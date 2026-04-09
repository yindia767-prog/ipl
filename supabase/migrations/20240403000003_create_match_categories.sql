-- Create match_categories table
CREATE TABLE IF NOT EXISTS public.match_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    match_id UUID NOT NULL REFERENCES public.matches(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    sub_name TEXT,
    price INTEGER NOT NULL,
    seats_available INTEGER NOT NULL DEFAULT 0,
    total_seats INTEGER NOT NULL DEFAULT 0,
    label TEXT CHECK (label IN ('hottest', 'best_price', 'top_choice', 'fan_favorite', 'last_tickets', 'fast_filling')),
    rating DECIMAL(3,1),
    rating_label TEXT,
    features TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.match_categories ENABLE ROW LEVEL SECURITY;

-- Governance policy
CREATE POLICY "Allow public read access to match_categories" ON public.match_categories
    FOR SELECT USING (true);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_match_categories_match_id ON public.match_categories(match_id);

-- Test dynamic category mapping (Trigger placeholder)
-- Example insert:
-- INSERT INTO public.match_categories (match_id, name, sub_name, price, seats_available, total_seats, label, rating, rating_label, features)
-- SELECT id, 'Lower K', 'Row AA', 3163, 2, 10, 'best_price', 8.6, 'Amazing', ARRAY['2 tickets together', 'Clear view']
-- FROM public.matches WHERE match_no = 7;
