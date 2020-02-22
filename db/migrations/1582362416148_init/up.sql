CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.article (
    id integer NOT NULL,
    title text NOT NULL,
    content text NOT NULL,
    author_user_id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.article_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.article_id_seq OWNED BY public.article.id;
CREATE TABLE public.article_tag (
    article_id integer NOT NULL,
    tag_id integer NOT NULL
);
CREATE TABLE public.comment (
    id integer NOT NULL,
    article_id integer NOT NULL,
    comment_user_id integer NOT NULL,
    text text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.comment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.comment_id_seq OWNED BY public.comment.id;
CREATE TABLE public.tag (
    id integer NOT NULL,
    label text NOT NULL,
    for_ignore_update text
);
CREATE SEQUENCE public.tag_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.tag_id_seq OWNED BY public.tag.id;
CREATE TABLE public."user" (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    role text NOT NULL,
    salt text NOT NULL
);
CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
ALTER TABLE ONLY public.article ALTER COLUMN id SET DEFAULT nextval('public.article_id_seq'::regclass);
ALTER TABLE ONLY public.comment ALTER COLUMN id SET DEFAULT nextval('public.comment_id_seq'::regclass);
ALTER TABLE ONLY public.tag ALTER COLUMN id SET DEFAULT nextval('public.tag_id_seq'::regclass);
ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
ALTER TABLE ONLY public.article
    ADD CONSTRAINT article_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.article_tag
    ADD CONSTRAINT article_tag_pkey PRIMARY KEY (article_id, tag_id);
ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.tag
    ADD CONSTRAINT tag_label_key UNIQUE (label);
ALTER TABLE ONLY public.tag
    ADD CONSTRAINT tag_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_article_updated_at BEFORE UPDATE ON public.article FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_article_updated_at ON public.article IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_comment_updated_at BEFORE UPDATE ON public.comment FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_comment_updated_at ON public.comment IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.article
    ADD CONSTRAINT article_author_user_id_fkey FOREIGN KEY (author_user_id) REFERENCES public."user"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.article_tag
    ADD CONSTRAINT article_tag_article_id_fkey FOREIGN KEY (article_id) REFERENCES public.article(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.article_tag
    ADD CONSTRAINT article_tag_tag_id_fkey FOREIGN KEY (tag_id) REFERENCES public.tag(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_article_id_fkey FOREIGN KEY (article_id) REFERENCES public.article(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_comment_user_id_fkey FOREIGN KEY (comment_user_id) REFERENCES public."user"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
