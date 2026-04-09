import { supabase } from "./supabase";

export interface BookingPolicy {
  terms: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

const DEFAULT_POLICY: BookingPolicy = {
  terms: [
    "All tickets are non-refundable and non-transferable.",
    "Maximum 10 tickets per booking per user.",
    "Entry is subject to stadium rules and security checks.",
    "Management reserves the right to cancel bookings without prior notice."
  ],
  faqs: [
    {
      question: "How will I receive my tickets?",
      answer: "Once your payment is verified, you will receive an email with a link to download your digital ticket (PDF/Image)."
    },
    {
      question: "Is food included in the Platinum category?",
      answer: "Yes, Platinum tickets include access to a premium buffet and snack vouchers."
    }
  ]
};

export async function getBookingPolicy(): Promise<BookingPolicy> {
  try {
    const { data, error } = await supabase
      .from('site_settings')
      .select('value')
      .eq('key', 'booking_policy')
      .single();

    if (error || !data) {
      return DEFAULT_POLICY;
    }

    return data.value as BookingPolicy;
  } catch (e) {
    return DEFAULT_POLICY;
  }
}
