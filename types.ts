
export interface ReservationData {
  name: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  requests: string;
}

export interface TimeSlot {
  label: string;
  value: string;
  isPopular?: boolean;
}

export interface QuickPreset {
  id: string;
  title: string;
  guests: number;
  description: string;
  icon: string;
}
