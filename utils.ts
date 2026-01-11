
import { ReservationData } from './types';
import { RESTAURANT_NAME, RESTAURANT_WHATSAPP } from './constants';

export const getTodayDateString = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const generateWhatsAppLink = (data: ReservationData): string => {
  const message = `🍽️ *TABLE RESERVATION REQUEST*

*Restaurant:* ${RESTAURANT_NAME}
*Name:* ${data.name}
*Phone:* ${data.phone}
*Party Size:* ${data.guests} guests
*Date:* ${data.date}
*Time:* ${data.time}

*Special Requests:* ${data.requests || 'None'}

Looking forward to dining with you!`;

  const encodedMessage = encodeURIComponent(message);
  const cleanPhone = RESTAURANT_WHATSAPP.replace(/\+/g, '').replace(/\s/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
};
