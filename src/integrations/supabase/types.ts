export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      achievements: {
        Row: {
          achievement_description: string | null
          achievement_name: string
          achievement_type: string
          earned_at: string
          id: string
          metadata: Json | null
          user_id: string
        }
        Insert: {
          achievement_description?: string | null
          achievement_name: string
          achievement_type: string
          earned_at?: string
          id?: string
          metadata?: Json | null
          user_id: string
        }
        Update: {
          achievement_description?: string | null
          achievement_name?: string
          achievement_type?: string
          earned_at?: string
          id?: string
          metadata?: Json | null
          user_id?: string
        }
        Relationships: []
      }
      battle_history: {
        Row: {
          created_at: string
          id: string
          is_draw: boolean | null
          is_winner: boolean | null
          opponent_id: string | null
          opponent_score: number
          opponent_username: string | null
          points_earned: number
          room_id: string | null
          subject: string | null
          total_questions: number | null
          user_id: string
          user_score: number
        }
        Insert: {
          created_at?: string
          id?: string
          is_draw?: boolean | null
          is_winner?: boolean | null
          opponent_id?: string | null
          opponent_score?: number
          opponent_username?: string | null
          points_earned?: number
          room_id?: string | null
          subject?: string | null
          total_questions?: number | null
          user_id: string
          user_score?: number
        }
        Update: {
          created_at?: string
          id?: string
          is_draw?: boolean | null
          is_winner?: boolean | null
          opponent_id?: string | null
          opponent_score?: number
          opponent_username?: string | null
          points_earned?: number
          room_id?: string | null
          subject?: string | null
          total_questions?: number | null
          user_id?: string
          user_score?: number
        }
        Relationships: [
          {
            foreignKeyName: "battle_history_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "battle_rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      battle_invitations: {
        Row: {
          created_at: string
          expires_at: string
          id: string
          receiver_id: string
          room_id: string | null
          sender_id: string
          status: string
        }
        Insert: {
          created_at?: string
          expires_at?: string
          id?: string
          receiver_id: string
          room_id?: string | null
          sender_id: string
          status?: string
        }
        Update: {
          created_at?: string
          expires_at?: string
          id?: string
          receiver_id?: string
          room_id?: string | null
          sender_id?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "battle_invitations_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "battle_rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      battle_rooms: {
        Row: {
          class_level: number
          created_at: string
          current_question: number | null
          finished_at: string | null
          host_answers: Json | null
          host_id: string
          host_score: number | null
          host_username: string
          id: string
          is_public: boolean
          opponent_answers: Json | null
          opponent_id: string | null
          opponent_score: number | null
          opponent_username: string | null
          questions: Json | null
          room_code: string
          started_at: string | null
          status: string
          subject: string
          total_questions: number
          winner_id: string | null
        }
        Insert: {
          class_level?: number
          created_at?: string
          current_question?: number | null
          finished_at?: string | null
          host_answers?: Json | null
          host_id: string
          host_score?: number | null
          host_username: string
          id?: string
          is_public?: boolean
          opponent_answers?: Json | null
          opponent_id?: string | null
          opponent_score?: number | null
          opponent_username?: string | null
          questions?: Json | null
          room_code: string
          started_at?: string | null
          status?: string
          subject?: string
          total_questions?: number
          winner_id?: string | null
        }
        Update: {
          class_level?: number
          created_at?: string
          current_question?: number | null
          finished_at?: string | null
          host_answers?: Json | null
          host_id?: string
          host_score?: number | null
          host_username?: string
          id?: string
          is_public?: boolean
          opponent_answers?: Json | null
          opponent_id?: string | null
          opponent_score?: number | null
          opponent_username?: string | null
          questions?: Json | null
          room_code?: string
          started_at?: string | null
          status?: string
          subject?: string
          total_questions?: number
          winner_id?: string | null
        }
        Relationships: []
      }
      cbse_news: {
        Row: {
          category: string | null
          created_at: string | null
          description_en: string | null
          description_hi: string | null
          expiry_date: string | null
          id: string
          is_important: boolean | null
          publish_date: string
          source_url: string | null
          title_en: string
          title_hi: string
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description_en?: string | null
          description_hi?: string | null
          expiry_date?: string | null
          id?: string
          is_important?: boolean | null
          publish_date: string
          source_url?: string | null
          title_en: string
          title_hi: string
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description_en?: string | null
          description_hi?: string | null
          expiry_date?: string | null
          id?: string
          is_important?: boolean | null
          publish_date?: string
          source_url?: string | null
          title_en?: string
          title_hi?: string
        }
        Relationships: []
      }
      chess_leaderboard: {
        Row: {
          best_time: number | null
          created_at: string
          current_streak: number
          elo_rating: number
          id: string
          last_puzzle_date: string | null
          longest_streak: number
          puzzles_solved: number
          total_points: number
          updated_at: string
          user_id: string
          username: string
        }
        Insert: {
          best_time?: number | null
          created_at?: string
          current_streak?: number
          elo_rating?: number
          id?: string
          last_puzzle_date?: string | null
          longest_streak?: number
          puzzles_solved?: number
          total_points?: number
          updated_at?: string
          user_id: string
          username: string
        }
        Update: {
          best_time?: number | null
          created_at?: string
          current_streak?: number
          elo_rating?: number
          id?: string
          last_puzzle_date?: string | null
          longest_streak?: number
          puzzles_solved?: number
          total_points?: number
          updated_at?: string
          user_id?: string
          username?: string
        }
        Relationships: []
      }
      chess_puzzle_attempts: {
        Row: {
          attempts: number
          created_at: string
          hints_used: number
          id: string
          points_earned: number
          puzzle_id: string
          solved: boolean
          solved_at: string | null
          time_taken: number | null
          user_id: string
        }
        Insert: {
          attempts?: number
          created_at?: string
          hints_used?: number
          id?: string
          points_earned?: number
          puzzle_id: string
          solved?: boolean
          solved_at?: string | null
          time_taken?: number | null
          user_id: string
        }
        Update: {
          attempts?: number
          created_at?: string
          hints_used?: number
          id?: string
          points_earned?: number
          puzzle_id?: string
          solved?: boolean
          solved_at?: string | null
          time_taken?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chess_puzzle_attempts_puzzle_id_fkey"
            columns: ["puzzle_id"]
            isOneToOne: false
            referencedRelation: "chess_puzzles"
            referencedColumns: ["id"]
          },
        ]
      }
      chess_puzzles: {
        Row: {
          created_at: string
          difficulty: string
          hint_text: string | null
          hint_text_hindi: string | null
          id: string
          points: number
          puzzle_fen: string
          solution: string[]
          theme: string
          title: string | null
          title_hindi: string | null
        }
        Insert: {
          created_at?: string
          difficulty?: string
          hint_text?: string | null
          hint_text_hindi?: string | null
          id?: string
          points?: number
          puzzle_fen: string
          solution: string[]
          theme?: string
          title?: string | null
          title_hindi?: string | null
        }
        Update: {
          created_at?: string
          difficulty?: string
          hint_text?: string | null
          hint_text_hindi?: string | null
          id?: string
          points?: number
          puzzle_fen?: string
          solution?: string[]
          theme?: string
          title?: string | null
          title_hindi?: string | null
        }
        Relationships: []
      }
      coupon_codes: {
        Row: {
          code: string
          created_at: string | null
          current_uses: number | null
          description: string | null
          discount_percent: number | null
          duration_months: number
          id: string
          max_uses: number | null
          plan_type: string
          status: string | null
          valid_from: string | null
          valid_until: string | null
        }
        Insert: {
          code: string
          created_at?: string | null
          current_uses?: number | null
          description?: string | null
          discount_percent?: number | null
          duration_months?: number
          id?: string
          max_uses?: number | null
          plan_type?: string
          status?: string | null
          valid_from?: string | null
          valid_until?: string | null
        }
        Update: {
          code?: string
          created_at?: string | null
          current_uses?: number | null
          description?: string | null
          discount_percent?: number | null
          duration_months?: number
          id?: string
          max_uses?: number | null
          plan_type?: string
          status?: string | null
          valid_from?: string | null
          valid_until?: string | null
        }
        Relationships: []
      }
      coupon_usage: {
        Row: {
          coupon_code: string
          id: string
          subscription_id: string | null
          used_at: string | null
          user_id: string
        }
        Insert: {
          coupon_code: string
          id?: string
          subscription_id?: string | null
          used_at?: string | null
          user_id: string
        }
        Update: {
          coupon_code?: string
          id?: string
          subscription_id?: string | null
          used_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "coupon_usage_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      daily_challenges: {
        Row: {
          answered_questions: number
          challenge_date: string
          completed_at: string
          created_at: string
          id: string
          points_earned: number
          score: number
          time_taken: number | null
          total_questions: number
          user_id: string
        }
        Insert: {
          answered_questions: number
          challenge_date?: string
          completed_at?: string
          created_at?: string
          id?: string
          points_earned: number
          score: number
          time_taken?: number | null
          total_questions?: number
          user_id: string
        }
        Update: {
          answered_questions?: number
          challenge_date?: string
          completed_at?: string
          created_at?: string
          id?: string
          points_earned?: number
          score?: number
          time_taken?: number | null
          total_questions?: number
          user_id?: string
        }
        Relationships: []
      }
      downloaded_questions: {
        Row: {
          downloaded_at: string | null
          id: string
          question_data: Json | null
          question_id: string | null
          user_id: string | null
        }
        Insert: {
          downloaded_at?: string | null
          id?: string
          question_data?: Json | null
          question_id?: string | null
          user_id?: string | null
        }
        Update: {
          downloaded_at?: string | null
          id?: string
          question_data?: Json | null
          question_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "downloaded_questions_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "long_questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "downloaded_questions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      exam_timetable: {
        Row: {
          class_level: number
          created_at: string | null
          exam_date: string
          exam_duration: string | null
          exam_time: string | null
          id: string
          is_practical: boolean | null
          notes: string | null
          notes_hi: string | null
          subject: string
          subject_hi: string
          updated_at: string | null
          year: number
        }
        Insert: {
          class_level: number
          created_at?: string | null
          exam_date: string
          exam_duration?: string | null
          exam_time?: string | null
          id?: string
          is_practical?: boolean | null
          notes?: string | null
          notes_hi?: string | null
          subject: string
          subject_hi: string
          updated_at?: string | null
          year: number
        }
        Update: {
          class_level?: number
          created_at?: string | null
          exam_date?: string
          exam_duration?: string | null
          exam_time?: string | null
          id?: string
          is_practical?: boolean | null
          notes?: string | null
          notes_hi?: string | null
          subject?: string
          subject_hi?: string
          updated_at?: string | null
          year?: number
        }
        Relationships: []
      }
      friends: {
        Row: {
          created_at: string
          friend_id: string
          id: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          friend_id: string
          id?: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          friend_id?: string
          id?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      grammar_progress: {
        Row: {
          class_level: number | null
          completed: boolean | null
          created_at: string | null
          id: string
          last_attempted: string | null
          questions_attempted: number | null
          questions_correct: number | null
          score_percentage: number | null
          topic_id: string
          updated_at: string | null
          user_id: string
          weak_areas: string[] | null
        }
        Insert: {
          class_level?: number | null
          completed?: boolean | null
          created_at?: string | null
          id?: string
          last_attempted?: string | null
          questions_attempted?: number | null
          questions_correct?: number | null
          score_percentage?: number | null
          topic_id: string
          updated_at?: string | null
          user_id: string
          weak_areas?: string[] | null
        }
        Update: {
          class_level?: number | null
          completed?: boolean | null
          created_at?: string | null
          id?: string
          last_attempted?: string | null
          questions_attempted?: number | null
          questions_correct?: number | null
          score_percentage?: number | null
          topic_id?: string
          updated_at?: string | null
          user_id?: string
          weak_areas?: string[] | null
        }
        Relationships: []
      }
      long_questions: {
        Row: {
          answer_text: string
          answer_text_english: string | null
          chapter: string | null
          class_level: number
          created_at: string | null
          difficulty: string | null
          id: string
          lesson_number: number | null
          marks: number | null
          ncert_page_number: number | null
          question_text: string
          question_text_english: string | null
          question_type: string | null
          subject: string
          unit_name: string | null
        }
        Insert: {
          answer_text: string
          answer_text_english?: string | null
          chapter?: string | null
          class_level: number
          created_at?: string | null
          difficulty?: string | null
          id?: string
          lesson_number?: number | null
          marks?: number | null
          ncert_page_number?: number | null
          question_text: string
          question_text_english?: string | null
          question_type?: string | null
          subject: string
          unit_name?: string | null
        }
        Update: {
          answer_text?: string
          answer_text_english?: string | null
          chapter?: string | null
          class_level?: number
          created_at?: string | null
          difficulty?: string | null
          id?: string
          lesson_number?: number | null
          marks?: number | null
          ncert_page_number?: number | null
          question_text?: string
          question_text_english?: string | null
          question_type?: string | null
          subject?: string
          unit_name?: string | null
        }
        Relationships: []
      }
      ncert_solutions: {
        Row: {
          chapter_name: string
          chapter_name_english: string | null
          chapter_number: number
          class_level: number
          created_at: string | null
          difficulty: string | null
          exercise_number: string
          id: string
          marks: number | null
          ncert_page_number: number | null
          question_number: string
          question_text: string
          question_text_english: string | null
          question_type: string | null
          solution_text: string
          solution_text_english: string | null
          subject: string
        }
        Insert: {
          chapter_name: string
          chapter_name_english?: string | null
          chapter_number: number
          class_level: number
          created_at?: string | null
          difficulty?: string | null
          exercise_number: string
          id?: string
          marks?: number | null
          ncert_page_number?: number | null
          question_number: string
          question_text: string
          question_text_english?: string | null
          question_type?: string | null
          solution_text: string
          solution_text_english?: string | null
          subject: string
        }
        Update: {
          chapter_name?: string
          chapter_name_english?: string | null
          chapter_number?: number
          class_level?: number
          created_at?: string | null
          difficulty?: string | null
          exercise_number?: string
          id?: string
          marks?: number | null
          ncert_page_number?: number | null
          question_number?: string
          question_text?: string
          question_text_english?: string | null
          question_type?: string | null
          solution_text?: string
          solution_text_english?: string | null
          subject?: string
        }
        Relationships: []
      }
      previous_year_papers: {
        Row: {
          board: string | null
          class_level: number
          created_at: string | null
          duration_minutes: number
          id: string
          is_sample_paper: boolean | null
          marking_scheme_url: string | null
          paper_data: Json | null
          paper_type: string
          pdf_url: string | null
          source: string | null
          subject: string
          term: string | null
          total_marks: number
          year: number
        }
        Insert: {
          board?: string | null
          class_level: number
          created_at?: string | null
          duration_minutes?: number
          id?: string
          is_sample_paper?: boolean | null
          marking_scheme_url?: string | null
          paper_data?: Json | null
          paper_type?: string
          pdf_url?: string | null
          source?: string | null
          subject: string
          term?: string | null
          total_marks?: number
          year: number
        }
        Update: {
          board?: string | null
          class_level?: number
          created_at?: string | null
          duration_minutes?: number
          id?: string
          is_sample_paper?: boolean | null
          marking_scheme_url?: string | null
          paper_data?: Json | null
          paper_type?: string
          pdf_url?: string | null
          source?: string | null
          subject?: string
          term?: string | null
          total_marks?: number
          year?: number
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_style: string | null
          class_level: number | null
          created_at: string
          current_streak: number | null
          id: string
          last_quiz_date: string | null
          league: string | null
          league_points: number | null
          longest_streak: number | null
          preferred_language: string | null
          streak_freeze_available: boolean | null
          updated_at: string
          username: string
        }
        Insert: {
          avatar_style?: string | null
          class_level?: number | null
          created_at?: string
          current_streak?: number | null
          id: string
          last_quiz_date?: string | null
          league?: string | null
          league_points?: number | null
          longest_streak?: number | null
          preferred_language?: string | null
          streak_freeze_available?: boolean | null
          updated_at?: string
          username: string
        }
        Update: {
          avatar_style?: string | null
          class_level?: number | null
          created_at?: string
          current_streak?: number | null
          id?: string
          last_quiz_date?: string | null
          league?: string | null
          league_points?: number | null
          longest_streak?: number | null
          preferred_language?: string | null
          streak_freeze_available?: boolean | null
          updated_at?: string
          username?: string
        }
        Relationships: []
      }
      quiz_history: {
        Row: {
          answered_questions: number
          class_level: number
          created_at: string
          difficulty: string
          difficulty_multiplier: number | null
          id: string
          points_earned: number | null
          score: number
          speed_bonus: number | null
          subject: string
          time_taken: number | null
          total_questions: number
          user_id: string
          username: string | null
        }
        Insert: {
          answered_questions: number
          class_level: number
          created_at?: string
          difficulty: string
          difficulty_multiplier?: number | null
          id?: string
          points_earned?: number | null
          score: number
          speed_bonus?: number | null
          subject: string
          time_taken?: number | null
          total_questions: number
          user_id: string
          username?: string | null
        }
        Update: {
          answered_questions?: number
          class_level?: number
          created_at?: string
          difficulty?: string
          difficulty_multiplier?: number | null
          id?: string
          points_earned?: number | null
          score?: number
          speed_bonus?: number | null
          subject?: string
          time_taken?: number | null
          total_questions?: number
          user_id?: string
          username?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          amount_paid: number
          coupon_code: string | null
          created_at: string | null
          discount_applied: number | null
          end_date: string | null
          features: Json | null
          id: string
          original_amount: number
          plan_name: string
          plan_type: string
          start_date: string | null
          status: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          amount_paid?: number
          coupon_code?: string | null
          created_at?: string | null
          discount_applied?: number | null
          end_date?: string | null
          features?: Json | null
          id?: string
          original_amount?: number
          plan_name: string
          plan_type: string
          start_date?: string | null
          status?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          amount_paid?: number
          coupon_code?: string | null
          created_at?: string | null
          discount_applied?: number | null
          end_date?: string | null
          features?: Json | null
          id?: string
          original_amount?: number
          plan_name?: string
          plan_type?: string
          start_date?: string | null
          status?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      calculate_quiz_points: {
        Args: {
          p_current_streak: number
          p_difficulty: string
          p_score: number
          p_time_taken: number
          p_total_questions: number
        }
        Returns: {
          difficulty_multiplier: number
          points_earned: number
          speed_bonus: number
        }[]
      }
      get_chess_leaderboard: {
        Args: { limit_count?: number }
        Returns: {
          current_streak: number
          elo_rating: number
          puzzles_solved: number
          rank: number
          total_points: number
          user_id: string
          username: string
        }[]
      }
      get_class_leaderboard: {
        Args: { class_num: number }
        Returns: {
          avg_score: number
          current_streak: number
          league: string
          quiz_count: number
          total_score: number
          user_id: string
          username: string
        }[]
      }
      get_monthly_leaderboard: {
        Args: { class_num: number }
        Returns: {
          avg_score: number
          current_streak: number
          league: string
          quiz_count: number
          total_score: number
          user_id: string
          username: string
        }[]
      }
      get_subject_leaderboard: {
        Args: { class_num: number; subject_name: string }
        Returns: {
          avg_score: number
          current_streak: number
          league: string
          quiz_count: number
          total_score: number
          user_id: string
          username: string
        }[]
      }
      get_user_rank: {
        Args: { class_num: number; p_user_id: string }
        Returns: {
          avg_score: number
          current_streak: number
          league: string
          quiz_count: number
          rank: number
          total_score: number
          username: string
        }[]
      }
      get_weekly_leaderboard: {
        Args: { class_num: number }
        Returns: {
          avg_score: number
          current_streak: number
          league: string
          quiz_count: number
          total_score: number
          user_id: string
          username: string
        }[]
      }
      submit_quiz_result: {
        Args: {
          p_answered_questions: number
          p_class_level: number
          p_difficulty: string
          p_score: number
          p_subject: string
          p_time_taken: number
          p_total_questions: number
        }
        Returns: string
      }
      update_chess_streak: {
        Args: { p_user_id: string }
        Returns: {
          current_streak: number
          longest_streak: number
          streak_maintained: boolean
        }[]
      }
      update_user_league: { Args: { p_user_id: string }; Returns: string }
      update_user_streak: {
        Args: { p_user_id: string }
        Returns: {
          current_streak: number
          longest_streak: number
          streak_maintained: boolean
        }[]
      }
      validate_and_apply_coupon: {
        Args: { p_code: string; p_user_id: string }
        Returns: {
          message: string
          subscription_id: string
          success: boolean
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
