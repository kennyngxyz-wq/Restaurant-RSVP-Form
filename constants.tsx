
import React from 'react';
import { TimeSlot, QuickPreset } from './types';

export const RESTAURANT_NAME = "L'Ambroisie Modern Bistro";
export const RESTAURANT_WHATSAPP = "+60126875385";
export const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwbkWWMe6dgNoKpXVECEikORVzBsc0-B57suwcWtSj_UsevSPJ2MzWxujXnDNI9afk/exec";

export const LUNCH_SLOTS: TimeSlot[] = [
  { label: "12:00 PM", value: "12:00 PM" },
  { label: "12:30 PM", value: "12:30 PM" },
  { label: "1:00 PM", value: "1:00 PM", isPopular: true },
  { label: "1:30 PM", value: "1:30 PM", isPopular: true },
  { label: "2:00 PM", value: "2:00 PM" },
  { label: "2:30 PM", value: "2:30 PM" },
  { label: "3:00 PM", value: "3:00 PM" },
];

export const DINNER_SLOTS: TimeSlot[] = [
  { label: "6:00 PM", value: "6:00 PM" },
  { label: "6:30 PM", value: "6:30 PM" },
  { label: "7:00 PM", value: "7:00 PM", isPopular: true },
  { label: "7:30 PM", value: "7:30 PM", isPopular: true },
  { label: "8:00 PM", value: "8:00 PM", isPopular: true },
  { label: "8:30 PM", value: "8:30 PM" },
  { label: "9:00 PM", value: "9:00 PM" },
  { label: "9:30 PM", value: "9:30 PM" },
  { label: "10:00 PM", value: "10:00 PM" },
];

export const QUICK_PRESETS: QuickPreset[] = [
  { id: 'date', title: 'Date Night', guests: 2, description: 'Intimate table for two', icon: '🕯️' },
  { id: 'family', title: 'Family Dinner', guests: 4, description: 'Comfortable booth for four', icon: '🏠' },
  { id: 'party', title: 'Group Party', guests: 8, description: 'Large table for gatherings', icon: '🎉' },
];

export const POLICIES = [
  "Grace period of 15 minutes for all reservations.",
  "Tables are allocated for a duration of 2 hours.",
  "For groups larger than 10, please contact us directly.",
  "Dress code: Smart Casual."
];

export const HOURS = {
  lunch: "12:00 PM - 3:00 PM",
  dinner: "6:00 PM - 10:00 PM",
  days: "Open Daily"
};
