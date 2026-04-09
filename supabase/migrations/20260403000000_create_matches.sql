-- Create matches table
CREATE TABLE IF NOT EXISTS public.matches (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    match_no integer NOT NULL UNIQUE,
    date date NOT NULL,
    time time NOT NULL,
    home_team text NOT NULL,
    away_team text NOT NULL,
    venue text NOT NULL,
    status text DEFAULT 'Upcoming' CHECK (status IN ('Upcoming', 'Live', 'Finished', 'Cancelled')),
    created_at timestamptz DEFAULT now()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_matches_date ON public.matches(date);
CREATE INDEX IF NOT EXISTS idx_matches_status ON public.matches(status);

-- Enable RLS
ALTER TABLE public.matches ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access to matches" 
ON public.matches FOR SELECT 
TO public 
USING (true);
