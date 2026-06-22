// Re-export generated types as the single source of truth.
// Regenerate with: SUPABASE_ACCESS_TOKEN=... npx supabase gen types typescript --project-id rjbsstxzetdsrvoiebat > src/lib/supabase/database.types.ts

export type { Database } from "./database.types";
export type { Json } from "./database.types";

// Convenience row type aliases
import type { Database } from "./database.types";

type Tables = Database["public"]["Tables"];
type Enums = Database["public"]["Enums"];

export type ServiceLocation = Tables["service_locations"]["Row"];
export type Contact = Tables["contacts"]["Row"];
export type ContactLocation = Tables["contact_locations"]["Row"];
export type Lead = Tables["leads"]["Row"];
export type Booking = Tables["bookings"]["Row"];
export type Job = Tables["jobs"]["Row"];
export type Order = Tables["orders"]["Row"];
export type Interaction = Tables["interactions"]["Row"];
export type Consent = Tables["consents"]["Row"];
export type BodyOfWater = Tables["bodies_of_water"]["Row"];
export type WaterTest = Tables["water_tests"]["Row"];
export type AccountingExport = Tables["accounting_exports"]["Row"];
export type Referral = Tables["referrals"]["Row"];
export type Campaign = Tables["campaigns"]["Row"];
export type Profile = Tables["profiles"]["Row"];

// Enum aliases
export type LocationStatus = Enums["location_status"];
export type ContactRole = Enums["contact_role"];
export type WaterBodyType = Enums["water_body_type"];
export type PoolSurface = Enums["pool_surface"];
export type SanitizerType = Enums["sanitizer_type"];
export type ConsentChannel = Enums["consent_channel"];
export type ConsentState = Enums["consent_state"];
export type LeadChannel = Enums["lead_channel"];
export type LeadStatus = Enums["lead_status"];
export type ServiceInterest = Enums["service_interest"];
export type BookingType = Enums["booking_type"];
export type BookingStatus = Enums["booking_status"];
export type JobStatus = Enums["job_status"];
export type OrderChannel = Enums["order_channel"];
export type InteractionType = Enums["interaction_type"];
export type InteractionDir = Enums["interaction_dir"];
export type StaffRole = Enums["staff_role"];
