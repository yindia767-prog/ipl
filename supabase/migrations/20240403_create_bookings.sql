-- Create Bookings Table
CREATE TABLE IF NOT EXISTS public.bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    match_id TEXT NOT NULL,
    category TEXT NOT NULL,
    quantity INTEGER NOT NULL CHECK (quantity > 0 AND quantity <= 10),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    total_price INTEGER NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Allow Public Inserts (Required for frictionless booking)
CREATE POLICY "Enable insert for everyone" ON public.bookings
    FOR INSERT WITH CHECK (true);

-- Allow Admin Access (to all bookings)
-- Note: Admin role implementation will happen in Phase 3. 
-- For now, bookings are mostly insert-only for the public.
CREATE POLICY "Enable selection for authenticated users only" ON public.bookings
    FOR SELECT USING (auth.role() = 'authenticated');
