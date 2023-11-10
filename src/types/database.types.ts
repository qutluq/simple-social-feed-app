export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      news: {
        Row: {
          author_id: number
          body: string | null
          created_at: string
          date: string | null
          id: number
          title: string | null
        }
        Insert: {
          author_id: number
          body?: string | null
          created_at?: string
          date?: string | null
          id?: number
          title?: string | null
        }
        Update: {
          author_id?: number
          body?: string | null
          created_at?: string
          date?: string | null
          id?: number
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "news_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          }
        ]
      }
      user: {
        Row: {
          about: string | null
          author_id: number | null
          created_at: string
          email: string
          firstname: string | null
          id: number
          image: string | null
          lastname: string | null
          password: string
          username: string
        }
        Insert: {
          about?: string | null
          author_id?: number | null
          created_at?: string
          email: string
          firstname?: string | null
          id?: number
          image?: string | null
          lastname?: string | null
          password?: string
          username?: string
        }
        Update: {
          about?: string | null
          author_id?: number | null
          created_at?: string
          email?: string
          firstname?: string | null
          id?: number
          image?: string | null
          lastname?: string | null
          password?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
