-- Update matches table with rich content
ALTER TABLE public.matches
ADD COLUMN IF NOT EXISTS description TEXT,
ADD COLUMN IF NOT EXISTS header_image_url TEXT,
ADD COLUMN IF NOT EXISTS title TEXT;

-- Create site_settings table for global managed content
CREATE TABLE IF NOT EXISTS public.site_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    key TEXT UNIQUE NOT NULL,
    value JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for settings
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Allow public read access to settings
CREATE POLICY "Allow public read access to site_settings" 
ON public.site_settings FOR SELECT 
TO public 
USING (true);

-- Insert default Terms & FAQs
INSERT INTO public.site_settings (key, value)
VALUES (
    'booking_policy',
    '{
        "terms": [
            "All tickets are non-refundable and non-transferable.",
            "Maximum 10 tickets per booking per user.",
            "Entry is subject to stadium rules and security checks.",
            "Management reserves the right to cancel bookings without prior notice."
        ],
        "faqs": [
            {
                "question": "How will I receive my tickets?",
                "answer": "Once your payment is verified, you will receive an email with a link to download your digital ticket (PDF/Image)."
            },
            {
                "question": "Is food included in the Platinum category?",
                "answer": "Yes, Platinum tickets include access to a premium buffet and snack vouchers."
            },
            {
                "question": "What happens if a match is cancelled?",
                "answer": "In case of cancellation, a full refund will be processed within 7-10 working days."
            }
        ]
    }'::jsonb
)
ON CONFLICT (key) DO NOTHING;
