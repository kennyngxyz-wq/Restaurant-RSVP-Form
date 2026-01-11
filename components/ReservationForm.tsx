
import React, { useState, useMemo } from 'react';
import { ReservationData } from '../types.ts';
import { LUNCH_SLOTS, DINNER_SLOTS, WEBHOOK_URL } from '../constants.tsx';
import { getTodayDateString, generateWhatsAppLink } from '../utils.ts';

const ReservationForm: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    guests: 2,
    date: getTodayDateString(),
    time: '',
    requests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = useMemo(() => {
    return formData.name.trim() !== '' && 
           formData.phone.trim().length >= 8 && 
           formData.time !== '' && 
           formData.date !== '';
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value
    }));
  };

  const handlePreset = (count: number) => {
    setFormData(prev => ({ ...prev, guests: count }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || isSubmitting) return;

    setIsSubmitting(true);

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, submittedAt: new Date().toISOString() }),
      });
      const link = generateWhatsAppLink(formData);
      window.open(link, '_blank');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      window.open(generateWhatsAppLink(formData), '_blank');
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-12 text-center border border-gray-100 shadow-2xl animate-in fade-in duration-500">
        <div className="w-16 h-16 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-8 h-8 text-[#BC1E22]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-4 luxury-heading text-[#1a1a1a]">Booking Initiated</h2>
        <p className="text-gray-500 mb-10 max-w-sm mx-auto leading-relaxed">
          Your reservation request has been processed. Please complete the booking by sending the pre-filled message on WhatsApp.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-[#BC1E22] text-xs font-bold tracking-[0.2em] uppercase hover:underline"
        >
          New Reservation
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 border border-gray-100 shadow-2xl">
      <div className="mb-10 text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 luxury-heading">Table Reservation</h2>
        <div className="w-20 h-[2px] bg-[#BC1E22] mx-auto mt-4"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] tracking-[0.2em] font-bold uppercase text-gray-400 block">Your Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-0 py-3 bg-transparent border-b border-gray-200 rounded-none focus:border-[#BC1E22] transition-all disabled:opacity-50 placeholder:text-gray-300"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] tracking-[0.2em] font-bold uppercase text-gray-400 block">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+60..."
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-0 py-3 bg-transparent border-b border-gray-200 rounded-none focus:border-[#BC1E22] transition-all disabled:opacity-50 placeholder:text-gray-300"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] tracking-[0.2em] font-bold uppercase text-gray-400 block">Party Size</label>
          <div className="flex flex-wrap gap-4">
            {[2, 4, 6, 8, 10].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => handlePreset(num)}
                disabled={isSubmitting}
                className={`w-12 h-12 flex items-center justify-center text-xs font-bold transition-all border ${
                  formData.guests === num 
                    ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#BC1E22]'
                } disabled:opacity-50`}
              >
                {num}
              </button>
            ))}
            <div className="flex items-center space-x-2 border-b border-gray-200 ml-auto">
              <span className="text-[10px] uppercase text-gray-400">Custom:</span>
              <input
                type="number"
                name="guests"
                min="1"
                max="30"
                value={formData.guests}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-12 bg-transparent py-2 text-center text-sm focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] tracking-[0.2em] font-bold uppercase text-gray-400 block">Dining Date</label>
            <input
              type="date"
              name="date"
              required
              min={getTodayDateString()}
              value={formData.date}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-0 py-3 bg-transparent border-b border-gray-200 rounded-none focus:border-[#BC1E22] transition-all disabled:opacity-50"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] tracking-[0.2em] font-bold uppercase text-gray-400 block">Preferred Time</label>
            <select
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-0 py-3 bg-transparent border-b border-gray-200 rounded-none focus:border-[#BC1E22] transition-all appearance-none disabled:opacity-50"
            >
              <option value="">Select Time</option>
              <optgroup label="Lunch">
                {LUNCH_SLOTS.map(slot => (
                  <option key={slot.value} value={slot.value}>{slot.label}</option>
                ))}
              </optgroup>
              <optgroup label="Dinner">
                {DINNER_SLOTS.map(slot => (
                  <option key={slot.value} value={slot.value}>{slot.label}</option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] tracking-[0.2em] font-bold uppercase text-gray-400 block">Occasion / Requests</label>
          <textarea
            name="requests"
            rows={2}
            placeholder="Anniversary, dietary restrictions, etc."
            value={formData.requests}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-0 py-3 bg-transparent border-b border-gray-200 rounded-none focus:border-[#BC1E22] transition-all resize-none disabled:opacity-50 placeholder:text-gray-300"
          />
        </div>

        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className={`w-full py-5 font-bold text-xs tracking-[0.3em] uppercase transition-all shadow-lg ${
            isValid && !isSubmitting
              ? 'bg-[#BC1E22] text-white hover:bg-[#a11a1d] translate-y-0 hover:-translate-y-1' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? 'Processing...' : 'Reserve via WhatsApp'}
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
