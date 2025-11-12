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



SET default_table_access_method = heap;

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
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


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
-- Name: quiz_history Anyone can create quiz history; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Anyone can create quiz history" ON public.quiz_history FOR INSERT WITH CHECK (true);


--
-- Name: quiz_history Anyone can view quiz history; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Anyone can view quiz history" ON public.quiz_history FOR SELECT USING (true);


--
-- Name: quiz_history; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.quiz_history ENABLE ROW LEVEL SECURITY;

--
-- PostgreSQL database dump complete
--


