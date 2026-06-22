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
    PostgrestVersion: "14.5"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      accounting_exports: {
        Row: {
          file_path: string | null
          format: string
          generated_at: string
          id: string
          period_end: string
          period_start: string
          totals: Json
        }
        Insert: {
          file_path?: string | null
          format?: string
          generated_at?: string
          id?: string
          period_end: string
          period_start: string
          totals?: Json
        }
        Update: {
          file_path?: string | null
          format?: string
          generated_at?: string
          id?: string
          period_end?: string
          period_start?: string
          totals?: Json
        }
        Relationships: []
      }
      attribution_touches: {
        Row: {
          campaign: string | null
          contact_id: string | null
          id: string
          lead_id: string | null
          medium: string | null
          occurred_at: string
          source: string | null
          tracking_number: string | null
          utm: Json | null
        }
        Insert: {
          campaign?: string | null
          contact_id?: string | null
          id?: string
          lead_id?: string | null
          medium?: string | null
          occurred_at?: string
          source?: string | null
          tracking_number?: string | null
          utm?: Json | null
        }
        Update: {
          campaign?: string | null
          contact_id?: string | null
          id?: string
          lead_id?: string | null
          medium?: string | null
          occurred_at?: string
          source?: string | null
          tracking_number?: string | null
          utm?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "attribution_touches_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attribution_touches_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      bodies_of_water: {
        Row: {
          created_at: string
          equipment: Json
          gallons: number | null
          id: string
          notes: string | null
          sanitizer: Database["public"]["Enums"]["sanitizer_type"] | null
          service_location_id: string
          surface: Database["public"]["Enums"]["pool_surface"] | null
          type: Database["public"]["Enums"]["water_body_type"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          equipment?: Json
          gallons?: number | null
          id?: string
          notes?: string | null
          sanitizer?: Database["public"]["Enums"]["sanitizer_type"] | null
          service_location_id: string
          surface?: Database["public"]["Enums"]["pool_surface"] | null
          type?: Database["public"]["Enums"]["water_body_type"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          equipment?: Json
          gallons?: number | null
          id?: string
          notes?: string | null
          sanitizer?: Database["public"]["Enums"]["sanitizer_type"] | null
          service_location_id?: string
          surface?: Database["public"]["Enums"]["pool_surface"] | null
          type?: Database["public"]["Enums"]["water_body_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bodies_of_water_service_location_id_fkey"
            columns: ["service_location_id"]
            isOneToOne: false
            referencedRelation: "service_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      bookings: {
        Row: {
          body_of_water_id: string | null
          calcom_booking_id: string | null
          contact_id: string | null
          created_at: string
          id: string
          notes: string | null
          scheduled_at: string
          service_location_id: string | null
          source: string | null
          status: Database["public"]["Enums"]["booking_status"]
          type: Database["public"]["Enums"]["booking_type"]
          updated_at: string
        }
        Insert: {
          body_of_water_id?: string | null
          calcom_booking_id?: string | null
          contact_id?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          scheduled_at: string
          service_location_id?: string | null
          source?: string | null
          status?: Database["public"]["Enums"]["booking_status"]
          type?: Database["public"]["Enums"]["booking_type"]
          updated_at?: string
        }
        Update: {
          body_of_water_id?: string | null
          calcom_booking_id?: string | null
          contact_id?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          scheduled_at?: string
          service_location_id?: string | null
          source?: string | null
          status?: Database["public"]["Enums"]["booking_status"]
          type?: Database["public"]["Enums"]["booking_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookings_body_of_water_id_fkey"
            columns: ["body_of_water_id"]
            isOneToOne: false
            referencedRelation: "bodies_of_water"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_service_location_id_fkey"
            columns: ["service_location_id"]
            isOneToOne: false
            referencedRelation: "service_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      campaigns: {
        Row: {
          channel: Database["public"]["Enums"]["consent_channel"] | null
          created_at: string
          external_id: string | null
          id: string
          name: string
          provider: string | null
          scheduled_at: string | null
        }
        Insert: {
          channel?: Database["public"]["Enums"]["consent_channel"] | null
          created_at?: string
          external_id?: string | null
          id?: string
          name: string
          provider?: string | null
          scheduled_at?: string | null
        }
        Update: {
          channel?: Database["public"]["Enums"]["consent_channel"] | null
          created_at?: string
          external_id?: string | null
          id?: string
          name?: string
          provider?: string | null
          scheduled_at?: string | null
        }
        Relationships: []
      }
      consents: {
        Row: {
          channel: Database["public"]["Enums"]["consent_channel"]
          contact_id: string
          id: string
          opted_in_at: string | null
          opted_out_at: string | null
          source: string | null
          state: Database["public"]["Enums"]["consent_state"]
          updated_at: string
        }
        Insert: {
          channel: Database["public"]["Enums"]["consent_channel"]
          contact_id: string
          id?: string
          opted_in_at?: string | null
          opted_out_at?: string | null
          source?: string | null
          state?: Database["public"]["Enums"]["consent_state"]
          updated_at?: string
        }
        Update: {
          channel?: Database["public"]["Enums"]["consent_channel"]
          contact_id?: string
          id?: string
          opted_in_at?: string | null
          opted_out_at?: string | null
          source?: string | null
          state?: Database["public"]["Enums"]["consent_state"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "consents_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_locations: {
        Row: {
          contact_id: string
          created_at: string
          is_primary: boolean
          role: Database["public"]["Enums"]["contact_role"]
          service_location_id: string
        }
        Insert: {
          contact_id: string
          created_at?: string
          is_primary?: boolean
          role?: Database["public"]["Enums"]["contact_role"]
          service_location_id: string
        }
        Update: {
          contact_id?: string
          created_at?: string
          is_primary?: boolean
          role?: Database["public"]["Enums"]["contact_role"]
          service_location_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "contact_locations_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_locations_service_location_id_fkey"
            columns: ["service_location_id"]
            isOneToOne: false
            referencedRelation: "service_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts: {
        Row: {
          created_at: string
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          notes: string | null
          phone_e164: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          notes?: string | null
          phone_e164?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          notes?: string | null
          phone_e164?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      interactions: {
        Row: {
          channel_source: string | null
          contact_id: string | null
          direction: Database["public"]["Enums"]["interaction_dir"]
          external_id: string | null
          id: string
          lead_id: string | null
          metadata: Json
          occurred_at: string
          recording_url: string | null
          service_location_id: string | null
          summary: string | null
          tracking_number: string | null
          transcript: string | null
          type: Database["public"]["Enums"]["interaction_type"]
        }
        Insert: {
          channel_source?: string | null
          contact_id?: string | null
          direction: Database["public"]["Enums"]["interaction_dir"]
          external_id?: string | null
          id?: string
          lead_id?: string | null
          metadata?: Json
          occurred_at?: string
          recording_url?: string | null
          service_location_id?: string | null
          summary?: string | null
          tracking_number?: string | null
          transcript?: string | null
          type: Database["public"]["Enums"]["interaction_type"]
        }
        Update: {
          channel_source?: string | null
          contact_id?: string | null
          direction?: Database["public"]["Enums"]["interaction_dir"]
          external_id?: string | null
          id?: string
          lead_id?: string | null
          metadata?: Json
          occurred_at?: string
          recording_url?: string | null
          service_location_id?: string | null
          summary?: string | null
          tracking_number?: string | null
          transcript?: string | null
          type?: Database["public"]["Enums"]["interaction_type"]
        }
        Relationships: [
          {
            foreignKeyName: "interactions_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interactions_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interactions_service_location_id_fkey"
            columns: ["service_location_id"]
            isOneToOne: false
            referencedRelation: "service_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      jobs: {
        Row: {
          amount: number | null
          body_of_water_id: string | null
          completed_at: string | null
          created_at: string
          id: string
          scheduled_at: string | null
          service_location_id: string | null
          skimmer_job_id: string | null
          status: Database["public"]["Enums"]["job_status"]
          type: Database["public"]["Enums"]["service_interest"] | null
          updated_at: string
        }
        Insert: {
          amount?: number | null
          body_of_water_id?: string | null
          completed_at?: string | null
          created_at?: string
          id?: string
          scheduled_at?: string | null
          service_location_id?: string | null
          skimmer_job_id?: string | null
          status?: Database["public"]["Enums"]["job_status"]
          type?: Database["public"]["Enums"]["service_interest"] | null
          updated_at?: string
        }
        Update: {
          amount?: number | null
          body_of_water_id?: string | null
          completed_at?: string | null
          created_at?: string
          id?: string
          scheduled_at?: string | null
          service_location_id?: string | null
          skimmer_job_id?: string | null
          status?: Database["public"]["Enums"]["job_status"]
          type?: Database["public"]["Enums"]["service_interest"] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "jobs_body_of_water_id_fkey"
            columns: ["body_of_water_id"]
            isOneToOne: false
            referencedRelation: "bodies_of_water"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "jobs_service_location_id_fkey"
            columns: ["service_location_id"]
            isOneToOne: false
            referencedRelation: "service_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          campaign: string | null
          channel: Database["public"]["Enums"]["lead_channel"]
          contact_id: string | null
          created_at: string
          first_touch_at: string
          id: string
          medium: string | null
          metadata: Json
          service_interest:
            | Database["public"]["Enums"]["service_interest"]
            | null
          service_location_id: string | null
          source: string | null
          status: Database["public"]["Enums"]["lead_status"]
          updated_at: string
        }
        Insert: {
          campaign?: string | null
          channel: Database["public"]["Enums"]["lead_channel"]
          contact_id?: string | null
          created_at?: string
          first_touch_at?: string
          id?: string
          medium?: string | null
          metadata?: Json
          service_interest?:
            | Database["public"]["Enums"]["service_interest"]
            | null
          service_location_id?: string | null
          source?: string | null
          status?: Database["public"]["Enums"]["lead_status"]
          updated_at?: string
        }
        Update: {
          campaign?: string | null
          channel?: Database["public"]["Enums"]["lead_channel"]
          contact_id?: string | null
          created_at?: string
          first_touch_at?: string
          id?: string
          medium?: string | null
          metadata?: Json
          service_interest?:
            | Database["public"]["Enums"]["service_interest"]
            | null
          service_location_id?: string | null
          source?: string | null
          status?: Database["public"]["Enums"]["lead_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "leads_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_service_location_id_fkey"
            columns: ["service_location_id"]
            isOneToOne: false
            referencedRelation: "service_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          channel: Database["public"]["Enums"]["order_channel"]
          contact_id: string | null
          created_at: string
          currency: string | null
          exported_to_qb: boolean
          fees: number | null
          id: string
          placed_at: string
          qb_export_batch_id: string | null
          service_location_id: string | null
          shopify_order_id: string | null
          subtotal: number | null
          tax: number | null
          total: number | null
          water_test_id: string | null
        }
        Insert: {
          channel: Database["public"]["Enums"]["order_channel"]
          contact_id?: string | null
          created_at?: string
          currency?: string | null
          exported_to_qb?: boolean
          fees?: number | null
          id?: string
          placed_at?: string
          qb_export_batch_id?: string | null
          service_location_id?: string | null
          shopify_order_id?: string | null
          subtotal?: number | null
          tax?: number | null
          total?: number | null
          water_test_id?: string | null
        }
        Update: {
          channel?: Database["public"]["Enums"]["order_channel"]
          contact_id?: string | null
          created_at?: string
          currency?: string | null
          exported_to_qb?: boolean
          fees?: number | null
          id?: string
          placed_at?: string
          qb_export_batch_id?: string | null
          service_location_id?: string | null
          shopify_order_id?: string | null
          subtotal?: number | null
          tax?: number | null
          total?: number | null
          water_test_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_service_location_id_fkey"
            columns: ["service_location_id"]
            isOneToOne: false
            referencedRelation: "service_locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_water_test_id_fkey"
            columns: ["water_test_id"]
            isOneToOne: false
            referencedRelation: "water_tests"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          full_name: string | null
          id: string
          role: Database["public"]["Enums"]["staff_role"]
        }
        Insert: {
          created_at?: string
          full_name?: string | null
          id: string
          role?: Database["public"]["Enums"]["staff_role"]
        }
        Update: {
          created_at?: string
          full_name?: string | null
          id?: string
          role?: Database["public"]["Enums"]["staff_role"]
        }
        Relationships: []
      }
      referrals: {
        Row: {
          code: string
          created_at: string
          id: string
          referred_lead_id: string | null
          referrer_contact_id: string | null
          status: string
        }
        Insert: {
          code: string
          created_at?: string
          id?: string
          referred_lead_id?: string | null
          referrer_contact_id?: string | null
          status?: string
        }
        Update: {
          code?: string
          created_at?: string
          id?: string
          referred_lead_id?: string | null
          referrer_contact_id?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "referrals_referred_lead_id_fkey"
            columns: ["referred_lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referrals_referrer_contact_id_fkey"
            columns: ["referrer_contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      service_locations: {
        Row: {
          access_notes: string | null
          address_line1: string | null
          address_line2: string | null
          city: string | null
          created_at: string
          gate_code: string | null
          id: string
          in_service_area: boolean
          latitude: number | null
          longitude: number | null
          normalized_address: string | null
          postal_code: string | null
          skimmer_account_id: string | null
          state: string | null
          status: Database["public"]["Enums"]["location_status"]
          updated_at: string
        }
        Insert: {
          access_notes?: string | null
          address_line1?: string | null
          address_line2?: string | null
          city?: string | null
          created_at?: string
          gate_code?: string | null
          id?: string
          in_service_area?: boolean
          latitude?: number | null
          longitude?: number | null
          normalized_address?: string | null
          postal_code?: string | null
          skimmer_account_id?: string | null
          state?: string | null
          status?: Database["public"]["Enums"]["location_status"]
          updated_at?: string
        }
        Update: {
          access_notes?: string | null
          address_line1?: string | null
          address_line2?: string | null
          city?: string | null
          created_at?: string
          gate_code?: string | null
          id?: string
          in_service_area?: boolean
          latitude?: number | null
          longitude?: number | null
          normalized_address?: string | null
          postal_code?: string | null
          skimmer_account_id?: string | null
          state?: string | null
          status?: Database["public"]["Enums"]["location_status"]
          updated_at?: string
        }
        Relationships: []
      }
      water_tests: {
        Row: {
          body_of_water_id: string | null
          contact_id: string | null
          device: string | null
          id: string
          lsi: number | null
          readings: Json
          recommendation: Json
          service_location_id: string | null
          source: string | null
          tested_at: string
        }
        Insert: {
          body_of_water_id?: string | null
          contact_id?: string | null
          device?: string | null
          id?: string
          lsi?: number | null
          readings?: Json
          recommendation?: Json
          service_location_id?: string | null
          source?: string | null
          tested_at?: string
        }
        Update: {
          body_of_water_id?: string | null
          contact_id?: string | null
          device?: string | null
          id?: string
          lsi?: number | null
          readings?: Json
          recommendation?: Json
          service_location_id?: string | null
          source?: string | null
          tested_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "water_tests_body_of_water_id_fkey"
            columns: ["body_of_water_id"]
            isOneToOne: false
            referencedRelation: "bodies_of_water"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "water_tests_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "water_tests_service_location_id_fkey"
            columns: ["service_location_id"]
            isOneToOne: false
            referencedRelation: "service_locations"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      marketable_contacts: {
        Row: {
          channel: Database["public"]["Enums"]["consent_channel"] | null
          contact_id: string | null
        }
        Insert: {
          channel?: Database["public"]["Enums"]["consent_channel"] | null
          contact_id?: string | null
        }
        Update: {
          channel?: Database["public"]["Enums"]["consent_channel"] | null
          contact_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "consents_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      is_staff: { Args: never; Returns: boolean }
      link_contact_to_location: {
        Args: {
          p_contact_id: string
          p_is_primary?: boolean
          p_location_id: string
          p_role?: Database["public"]["Enums"]["contact_role"]
        }
        Returns: undefined
      }
      normalize_address_text: {
        Args: {
          p_city: string
          p_line1: string
          p_postal: string
          p_state: string
        }
        Returns: string
      }
      resolve_contact: {
        Args: {
          p_email: string
          p_first?: string
          p_last?: string
          p_phone: string
        }
        Returns: string
      }
      resolve_location: {
        Args: {
          p_city?: string
          p_line1: string
          p_postal?: string
          p_state?: string
        }
        Returns: string
      }
    }
    Enums: {
      booking_status:
        | "scheduled"
        | "confirmed"
        | "completed"
        | "canceled"
        | "no_show"
      booking_type: "consult" | "service"
      consent_channel: "email" | "sms"
      consent_state: "unknown" | "pending" | "opted_in" | "opted_out"
      contact_role:
        | "homeowner"
        | "spouse"
        | "tenant"
        | "property_manager"
        | "other"
      interaction_dir: "inbound" | "outbound"
      interaction_type: "call" | "sms" | "email" | "chat"
      job_status:
        | "scheduled"
        | "in_progress"
        | "completed"
        | "invoiced"
        | "canceled"
      lead_channel:
        | "call"
        | "web"
        | "walk_in"
        | "sms"
        | "chat"
        | "referral"
        | "other"
      lead_status: "new" | "contacted" | "booked" | "won" | "lost"
      location_status: "prospect" | "active" | "inactive" | "churned"
      order_channel: "pos" | "online"
      pool_surface: "vinyl" | "gunite" | "fiberglass" | "other"
      sanitizer_type: "chlorine" | "salt" | "bromine" | "other"
      service_interest:
        | "weekly_service"
        | "opening_closing"
        | "liner"
        | "heater"
        | "repair"
        | "construction"
        | "retail"
        | "other"
      staff_role: "owner" | "admin" | "tech" | "partner"
      water_body_type: "pool" | "spa" | "hot_tub" | "water_feature"
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
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      booking_status: [
        "scheduled",
        "confirmed",
        "completed",
        "canceled",
        "no_show",
      ],
      booking_type: ["consult", "service"],
      consent_channel: ["email", "sms"],
      consent_state: ["unknown", "pending", "opted_in", "opted_out"],
      contact_role: [
        "homeowner",
        "spouse",
        "tenant",
        "property_manager",
        "other",
      ],
      interaction_dir: ["inbound", "outbound"],
      interaction_type: ["call", "sms", "email", "chat"],
      job_status: [
        "scheduled",
        "in_progress",
        "completed",
        "invoiced",
        "canceled",
      ],
      lead_channel: [
        "call",
        "web",
        "walk_in",
        "sms",
        "chat",
        "referral",
        "other",
      ],
      lead_status: ["new", "contacted", "booked", "won", "lost"],
      location_status: ["prospect", "active", "inactive", "churned"],
      order_channel: ["pos", "online"],
      pool_surface: ["vinyl", "gunite", "fiberglass", "other"],
      sanitizer_type: ["chlorine", "salt", "bromine", "other"],
      service_interest: [
        "weekly_service",
        "opening_closing",
        "liner",
        "heater",
        "repair",
        "construction",
        "retail",
        "other",
      ],
      staff_role: ["owner", "admin", "tech", "partner"],
      water_body_type: ["pool", "spa", "hot_tub", "water_feature"],
    },
  },
} as const
