
import React, { useState, useMemo } from 'react';
import { ReservationData } from '../types';
import { LUNCH_SLOTS, DINNER_SLOTS, QUICK_PRESETS } from '../constants';
import { getTodayDateString, generateWhatsAppLink } from '../utils';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      const link = generateWhatsAppLink(formData);
      window.open(link, '_blank');
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl text-center border border-gray-100 animate-in fade-in zoom-in duration-300">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-4 serif text-gray-900">Request Sent!</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          We've prepared your WhatsApp message. Once you send it, our team will review your request and confirm your table shortly.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-[#b49164] font-semibold hover:underline"
        >
          Make another reservation
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 serif">Book Your Table</h2>
        <p className="text-gray-500 mt-2">Experience the finest modern bistro dining.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Phone */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block ml-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block ml-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+6012-3456789"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Guests Quick Selection */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-gray-700 block ml-1">Number of Guests</label>
          <div className="flex flex-wrap gap-2">
            {[2, 4, 6, 8, 10].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => handlePreset(num)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  formData.guests === num 
                    ? 'bg-[#b49164] text-white shadow-md scale-105' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {num} Guests
              </button>
            ))}
            <input
              type="number"
              name="guests"
              min="1"
              max="20"
              value={formData.guests}
              onChange={handleChange}
              className="w-20 px-3 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:bg-white"
            />
          </div>
        </div>

        {/* Date and Time Selection */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block ml-1">Date</label>
            <input
              type="date"
              name="date"
              required
              min={getTodayDateString()}
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block ml-1">Time Slot</label>
            <select
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white transition-all appearance-none"
            >
              <option value="">Select a time</option>
              <optgroup label="Lunch Service">
                {LUNCH_SLOTS.map(slot => (
                  <option key={slot.value} value={slot.value}>
                    {slot.label} {slot.isPopular ? '🔥' : ''}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Dinner Service">
                {DINNER_SLOTS.map(slot => (
                  <option key={slot.value} value={slot.value}>
                    {slot.label} {slot.isPopular ? '🔥' : ''}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>

        {/* Special Requests */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 block ml-1">Special Requests (Optional)</label>
          <textarea
            name="requests"
            rows={3}
            placeholder="Dietary restrictions, celebrations, or table preferences..."
            value={formData.requests}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isValid}
          className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 transition-all ${
            isValid 
              ? 'bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-lg hover:shadow-xl translate-y-0 active:translate-y-1' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.768-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.448-1.271.607-1.445.16-.173.348-.217.462-.217.116 0 .231.001.332.005.109.004.258-.041.404.311.145.352.506 1.231.55 1.318.044.087.073.188.015.304-.058.116-.087.188-.174.289-.087.101-.184.225-.262.302-.087.087-.178.182-.077.357.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.088.275.073.376-.044.101-.117.434-.506.55-.68.116-.174.232-.145.391-.087.16.058 1.013.478 1.187.565.173.088.289.13.332.202.043.073.043.419-.101.825zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.435 5.174L2 22l4.957-1.3c1.465.798 3.136 1.245 4.908 1.343.045.003.089.005.135.005 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
          </svg>
          <span>Reserve via WhatsApp</span>
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
