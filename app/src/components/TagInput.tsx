// FIXME: do not use any in this file
import { MenuItem, Paper } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import { default as MuiChipInput } from "material-ui-chip-input";
import React, { InputHTMLAttributes, useState } from "react";
import Autosuggest from "react-autosuggest";
import { Tag } from "./Tag";

const suggestions = [
  { name: "Afghanistan" },
  { name: "Aland Islands" },
  { name: "Albania" },
  { name: "Algeria" },
  { name: "American Samoa" },
  { name: "Andorra" },
  { name: "Angola" },
  { name: "Anguilla" },
  { name: "Antarctica" },
  { name: "Antigua and Barbuda" },
  { name: "Argentina" },
  { name: "Armenia" },
  { name: "Aruba" },
  { name: "Australia" },
  { name: "Austria" },
  { name: "Azerbaijan" },
  { name: "Bahamas" },
  { name: "Bahrain" },
  { name: "Bangladesh" },
  { name: "Barbados" },
  { name: "Belarus" },
  { name: "Belgium" },
  { name: "Belize" },
  { name: "Benin" },
  { name: "Bermuda" },
  { name: "Bhutan" },
  { name: "Bolivia, Plurinational State of" },
  { name: "Bonaire, Sint Eustatius and Saba" },
  { name: "Bosnia and Herzegovina" },
  { name: "Botswana" },
  { name: "Bouvet Island" },
  { name: "Brazil" },
  { name: "British Indian Ocean Territory" },
  { name: "Brunei Darussalam" },
  { name: "テスト" },
  { name: "設計" },
  { name: "基本設計" },
  { name: "詳細設計" },
  { name: "テスト駆動開発" }
];

const useChipInputStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {
      height: "35px"
    },
    inputRoot: {
      padding: "0px 0px 0px 14px !important",
      height: "35px"
    },
    input: {
      padding: "0 !important",
      height: "35px"
    }
  })
);

const ChipInput = React.forwardRef((inputProps: any, ref: any) => {
  const { value, onChange, chips, ...other } = inputProps;
  const classes = useChipInputStyles();

  return (
    <MuiChipInput
      classes={classes}
      fullWidth
      blurBehavior="add"
      variant="outlined"
      placeholder="タグ（Enterで確定）"
      clearInputValueOnChange
      newChipKeys={[]} // https://github.com/TeamWertarbyte/material-ui-chip-input/pull/305
      onUpdateInput={onChange}
      value={chips}
      ref={ref}
      chipRenderer={(
        {
          value,
          isFocused,
          isDisabled,
          isReadOnly,
          handleClick,
          handleDelete,
          className
        },
        key
      ) => (
        <Tag
          key={key}
          clickable={false}
          style={{
            pointerEvents: isDisabled || isReadOnly ? "none" : undefined,
            backgroundColor: isFocused ? "rgb(206, 206, 206)" : "#e0e0e0", // FIXME
            margin: "0 8px 0 0"
          }}
          onClick={handleClick}
          onDelete={handleDelete}
          label={value}
        />
      )}
      {...other}
    />
  );
});

function renderInput(inputProps: any) {
  return <ChipInput {...inputProps} />;
}

function renderSuggestion(suggestion: any, { query, isHighlighted }: any) {
  const matches = match(suggestion.name, query);
  const parts = parse(suggestion.name, matches);

  return (
    <MenuItem
      selected={isHighlighted}
      component="div"
      onMouseDown={(e: React.MouseEvent) => e.preventDefault()} // prevent the click causing the input to be blurred
    >
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <span key={String(index)}>{part.text}</span>
          );
        })}
      </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options: any) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

const getSuggestionValue = (suggestion: any) => {
  return suggestion.name;
};

const getSuggestions = (value: string): any[] => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.name.toLowerCase().slice(0, inputLength) === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
      position: "relative"
    },
    suggestionsContainerOpen: {
      position: "absolute",
      marginTop: theme.spacing(),
      marginBottom: theme.spacing() * 3,
      left: 0,
      right: 0,
      zIndex: 1
    },
    suggestion: {
      display: "block"
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: "none"
    },
    textField: {
      width: "100%"
    }
  })
);

interface TagSelectorProps {
  allowDuplicates: boolean;
  onValueChange?: (value: string[]) => void;
  defaultValue?: string[];
}

export const TagInput = (
  props: TagSelectorProps & InputHTMLAttributes<any>
) => {
  const { allowDuplicates, onValueChange, defaultValue, ...other } = props;
  const classes = useStyles();
  const [suggestions, setSuggestions] = useState([] as string[]);
  const [value, setValue] = useState(defaultValue ?? []);
  const [textFieldInput, setTextFieldInput] = useState("");

  const handleSuggestionsFetchRequested = ({ value }: any) => {
    setSuggestions(getSuggestions(value));
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handletextFieldInputChange = (event: any, { newValue }: any) => {
    setTextFieldInput(newValue);
  };

  const handleAddChip = (chip: any) => {
    if (allowDuplicates || value.indexOf(chip) < 0) {
      const newValue = [...value, chip];
      setValue(newValue);
      setTextFieldInput("");

      if (onValueChange) {
        onValueChange(newValue);
      }
    }
  };

  const handleDeleteChip = (chip: [], index: number) => {
    const newValue = value.slice();
    newValue.splice(index, 1);
    setValue(newValue);

    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  // noinspection JSUnusedGlobalSymbols
  return (
    <Autosuggest
      theme={{
        container: classes.container,
        suggestionsContainerOpen: classes.suggestionsContainerOpen,
        suggestionsList: classes.suggestionsList,
        suggestion: classes.suggestion
      }}
      renderInputComponent={renderInput}
      suggestions={suggestions}
      onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
      onSuggestionsClearRequested={handleSuggestionsClearRequested}
      renderSuggestionsContainer={renderSuggestionsContainer}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      onSuggestionSelected={(e, { suggestionValue }) => {
        handleAddChip(suggestionValue);
        e.preventDefault();
      }}
      focusInputOnSuggestionClick={false}
      inputProps={
        {
          chips: value,
          value: textFieldInput,
          onChange: handletextFieldInputChange,
          onAdd: (chip: any) => handleAddChip(chip),
          onDelete: (chip: any, index: number) => handleDeleteChip(chip, index),
          ...other
        } as any
      }
    />
  );
};
