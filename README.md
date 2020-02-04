# Tonbly

## Development

### Prerequisites

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/lang/)

### Setup

```shell
$ git clone https://github.com/devilune/tonbly.git
$ cd tonbly
$ yarn
$ cd db
$ yarn up
```

### Run

```shell
# at root directory
$ yarn dev
```

## Projects

### db

#### references

- https://github.com/hasura/graphql-engine/issues/2431#issuecomment-569418113

## Contributing

### Commit Message Guidelines

#### Commit Message Format

```
<type>: <subject>
```

#### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests
