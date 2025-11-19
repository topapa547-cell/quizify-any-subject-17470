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
      long_questions: {
        Row: {
          answer_text: string
          answer_text_english: string | null
          chapter: string | null
          class_level: number
          created_at: string | null
          difficulty: string | null
          id: string
          marks: number | null
          question_text: string
          question_text_english: string | null
          subject: string
        }
        Insert: {
          answer_text: string
          answer_text_english?: string | null
          chapter?: string | null
          class_level: number
          created_at?: string | null
          difficulty?: string | null
          id?: string
          marks?: number | null
          question_text: string
          question_text_english?: string | null
          subject: string
        }
        Update: {
          answer_text?: string
          answer_text_english?: string | null
          chapter?: string | null
          class_level?: number
          created_at?: string | null
          difficulty?: string | null
          id?: string
          marks?: number | null
          question_text?: string
          question_text_english?: string | null
          subject?: string
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
      update_user_league: { Args: { p_user_id: string }; Returns: string }
      update_user_streak: {
        Args: { p_user_id: string }
        Returns: {
          current_streak: number
          longest_streak: number
          streak_maintained: boolean
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
