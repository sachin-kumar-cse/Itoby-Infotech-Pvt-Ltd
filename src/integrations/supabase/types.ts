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
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      appointments: {
        Row: {
          company: string | null
          created_at: string
          date: string
          email: string
          id: string
          message: string | null
          name: string
          phone: string | null
          service: string
          status: string
          time_slot: string
          updated_at: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          date: string
          email: string
          id?: string
          message?: string | null
          name: string
          phone?: string | null
          service: string
          status?: string
          time_slot: string
          updated_at?: string
        }
        Update: {
          company?: string | null
          created_at?: string
          date?: string
          email?: string
          id?: string
          message?: string | null
          name?: string
          phone?: string | null
          service?: string
          status?: string
          time_slot?: string
          updated_at?: string
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author: string
          author_role: string
          category: string
          content: string
          created_at: string
          excerpt: string
          featured: boolean
          id: string
          image: string
          is_published: boolean
          read_time: string
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          author?: string
          author_role?: string
          category: string
          content: string
          created_at?: string
          excerpt: string
          featured?: boolean
          id?: string
          image?: string
          is_published?: boolean
          read_time?: string
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          author?: string
          author_role?: string
          category?: string
          content?: string
          created_at?: string
          excerpt?: string
          featured?: boolean
          id?: string
          image?: string
          is_published?: boolean
          read_time?: string
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          created_at: string
          email: string
          id: string
          is_read: boolean
          message: string
          name: string
          phone: string | null
          service: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          is_read?: boolean
          message: string
          name: string
          phone?: string | null
          service: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          is_read?: boolean
          message?: string
          name?: string
          phone?: string | null
          service?: string
        }
        Relationships: []
      }
      email_drip_emails: {
        Row: {
          body_html: string
          created_at: string
          delay_hours: number
          id: string
          sequence_id: string
          sort_order: number
          subject: string
        }
        Insert: {
          body_html: string
          created_at?: string
          delay_hours?: number
          id?: string
          sequence_id: string
          sort_order?: number
          subject: string
        }
        Update: {
          body_html?: string
          created_at?: string
          delay_hours?: number
          id?: string
          sequence_id?: string
          sort_order?: number
          subject?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_drip_emails_sequence_id_fkey"
            columns: ["sequence_id"]
            isOneToOne: false
            referencedRelation: "email_drip_sequences"
            referencedColumns: ["id"]
          },
        ]
      }
      email_drip_log: {
        Row: {
          email_id: string
          id: string
          recipient_email: string
          sent_at: string
          sequence_id: string
          status: string
        }
        Insert: {
          email_id: string
          id?: string
          recipient_email: string
          sent_at?: string
          sequence_id: string
          status?: string
        }
        Update: {
          email_id?: string
          id?: string
          recipient_email?: string
          sent_at?: string
          sequence_id?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_drip_log_email_id_fkey"
            columns: ["email_id"]
            isOneToOne: false
            referencedRelation: "email_drip_emails"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_drip_log_sequence_id_fkey"
            columns: ["sequence_id"]
            isOneToOne: false
            referencedRelation: "email_drip_sequences"
            referencedColumns: ["id"]
          },
        ]
      }
      email_drip_sequences: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          name: string
          trigger_event: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          name: string
          trigger_event?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          name?: string
          trigger_event?: string
        }
        Relationships: []
      }
      job_applications: {
        Row: {
          cover_letter: string | null
          created_at: string
          email: string
          experience: string
          id: string
          is_read: boolean
          job_id: string
          job_title: string
          name: string
          phone: string | null
          portfolio_url: string | null
          resume_path: string | null
        }
        Insert: {
          cover_letter?: string | null
          created_at?: string
          email: string
          experience: string
          id?: string
          is_read?: boolean
          job_id: string
          job_title: string
          name: string
          phone?: string | null
          portfolio_url?: string | null
          resume_path?: string | null
        }
        Update: {
          cover_letter?: string | null
          created_at?: string
          email?: string
          experience?: string
          id?: string
          is_read?: boolean
          job_id?: string
          job_title?: string
          name?: string
          phone?: string | null
          portfolio_url?: string | null
          resume_path?: string | null
        }
        Relationships: []
      }
      jobs: {
        Row: {
          benefits: string[]
          created_at: string
          department: string
          description: string
          experience: string
          id: string
          is_active: boolean
          location: string
          nice_to_have: string[]
          requirements: string[]
          responsibilities: string[]
          salary: string
          skills: string[]
          title: string
          type: string
          updated_at: string
        }
        Insert: {
          benefits?: string[]
          created_at?: string
          department: string
          description: string
          experience: string
          id?: string
          is_active?: boolean
          location: string
          nice_to_have?: string[]
          requirements?: string[]
          responsibilities?: string[]
          salary: string
          skills?: string[]
          title: string
          type?: string
          updated_at?: string
        }
        Update: {
          benefits?: string[]
          created_at?: string
          department?: string
          description?: string
          experience?: string
          id?: string
          is_active?: boolean
          location?: string
          nice_to_have?: string[]
          requirements?: string[]
          responsibilities?: string[]
          salary?: string
          skills?: string[]
          title?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      lead_scores: {
        Row: {
          activity_log: Json
          budget_range: string | null
          created_at: string
          email: string
          id: string
          last_activity_at: string
          name: string
          score: number
          services_interested: string[]
          source: string | null
          updated_at: string
        }
        Insert: {
          activity_log?: Json
          budget_range?: string | null
          created_at?: string
          email: string
          id?: string
          last_activity_at?: string
          name?: string
          score?: number
          services_interested?: string[]
          source?: string | null
          updated_at?: string
        }
        Update: {
          activity_log?: Json
          budget_range?: string | null
          created_at?: string
          email?: string
          id?: string
          last_activity_at?: string
          name?: string
          score?: number
          services_interested?: string[]
          source?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      newsletter_subscribers: {
        Row: {
          email: string
          id: string
          is_active: boolean
          subscribed_at: string
        }
        Insert: {
          email: string
          id?: string
          is_active?: boolean
          subscribed_at?: string
        }
        Update: {
          email?: string
          id?: string
          is_active?: boolean
          subscribed_at?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          category: string
          client: string
          created_at: string
          description: string
          id: string
          image: string
          is_active: boolean
          results: string
          slug: string
          tech: string[]
          title: string
          updated_at: string
        }
        Insert: {
          category: string
          client?: string
          created_at?: string
          description: string
          id?: string
          image?: string
          is_active?: boolean
          results?: string
          slug: string
          tech?: string[]
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          client?: string
          created_at?: string
          description?: string
          id?: string
          image?: string
          is_active?: boolean
          results?: string
          slug?: string
          tech?: string[]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      quote_requests: {
        Row: {
          budget: string
          company: string | null
          created_at: string
          description: string
          email: string
          estimated_cost: string | null
          id: string
          is_read: boolean
          name: string
          phone: string | null
          services: string[]
          timeline: string
        }
        Insert: {
          budget: string
          company?: string | null
          created_at?: string
          description: string
          email: string
          estimated_cost?: string | null
          id?: string
          is_read?: boolean
          name: string
          phone?: string | null
          services?: string[]
          timeline: string
        }
        Update: {
          budget?: string
          company?: string | null
          created_at?: string
          description?: string
          email?: string
          estimated_cost?: string | null
          id?: string
          is_read?: boolean
          name?: string
          phone?: string | null
          services?: string[]
          timeline?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: { Args: { _user_id: string }; Returns: boolean }
    }
    Enums: {
      app_role: "admin" | "user"
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
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
