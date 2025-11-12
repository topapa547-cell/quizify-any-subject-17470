--
-- PostgreSQL database dump
--


-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--



--
-- Name: handle_new_user(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.handle_new_user() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
BEGIN
  INSERT INTO public.profiles (id, username)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1))
  );
  RETURN new;
END;
$$;


SET default_table_access_method = heap;

--
-- Name: profiles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.profiles (
    id uuid NOT NULL,
    username text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: quiz_history; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.quiz_history (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid,
    class_level integer NOT NULL,
    subject text NOT NULL,
    difficulty text NOT NULL,
    score integer NOT NULL,
    total_questions integer NOT NULL,
    answered_questions integer NOT NULL,
    time_taken integer,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    username text
);


--
-- Name: profiles profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_pkey PRIMARY KEY (id);


--
-- Name: profiles profiles_username_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_username_key UNIQUE (username);


--
-- Name: quiz_history quiz_history_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.quiz_history
    ADD CONSTRAINT quiz_history_pkey PRIMARY KEY (id);


--
-- Name: idx_quiz_history_class_subject; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_quiz_history_class_subject ON public.quiz_history USING btree (class_level, subject);


--
-- Name: idx_quiz_history_created_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_quiz_history_created_at ON public.quiz_history USING btree (created_at DESC);


--
-- Name: profiles profiles_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: quiz_history Anyone can create quiz history; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Anyone can create quiz history" ON public.quiz_history FOR INSERT WITH CHECK (true);


--
-- Name: quiz_history Anyone can view quiz history; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Anyone can view quiz history" ON public.quiz_history FOR SELECT USING (true);


--
-- Name: profiles Profiles are viewable by everyone; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);


--
-- Name: profiles Users can insert their own profile; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK ((auth.uid() = id));


--
-- Name: profiles Users can update their own profile; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING ((auth.uid() = id));


--
-- Name: profiles; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

--
-- Name: quiz_history; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.quiz_history ENABLE ROW LEVEL SECURITY;

--
-- PostgreSQL database dump complete
--


