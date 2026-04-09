"use server";

import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";
import { z } from "zod";

const bookingSchema = z.object({
  matchId: z.string(),
  category: z.string(),
  quantity: z.number().min(1).max(10),
  totalPrice: z.number().positive(),
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

export type BookingState = {
  error?: string;
  success?: boolean;
};

export async function submitBooking(prevState: BookingState, formData: FormData): Promise<BookingState> {
  const rawData = {
    matchId: formData.get("matchId") as string,
    category: formData.get("category") as string,
    quantity: parseInt(formData.get("quantity") as string),
    totalPrice: parseInt(formData.get("totalPrice") as string),
    fullName: formData.get("fullName") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
  };

  const validated = bookingSchema.safeParse(rawData);

  if (!validated.success) {
    return { error: validated.error.issues[0].message };
  }

  // Inventory Check (Max 150 per Category for v1)
  const { count, error: countError } = await supabase
    .from("bookings")
    .select("*", { count: "exact", head: true })
    .eq("match_id", validated.data.matchId)
    .eq("category", validated.data.category);

  if (countError) {
    return { error: "Failed to check availability. Please try again." };
  }

  if (count !== null && count >= 150) {
    return { error: `Sorry, ${validated.data.category} tickets are sold out for this match.` };
  }

  // Insert Booking
  const { data, error: insertError } = await supabase
    .from("bookings")
    .insert([
      {
        match_id: validated.data.matchId,
        category: validated.data.category,
        quantity: validated.data.quantity,
        total_price: validated.data.totalPrice,
        full_name: validated.data.fullName,
        email: validated.data.email,
        phone: validated.data.phone,
        status: 'pending'
      },
    ])
    .select()
    .single();

  if (insertError) {
    console.error("Booking Error Details:", {
      code: insertError.code,
      message: insertError.message,
      details: insertError.details,
      hint: insertError.hint
    });
    return { error: "Booking submission failed. Please try again." };
  }

  // Successful submission, redirect to payment
  redirect(`/payment/${data.id}`);
}

export async function getBookingById(id: string) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, matches(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching booking:", error);
    return null;
  }

  return data;
}
