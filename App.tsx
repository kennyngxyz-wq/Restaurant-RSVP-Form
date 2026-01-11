
import React from 'react';
import Header from './components/Header';
import ReservationForm from './components/ReservationForm';
import { RESTAURANT_NAME, QUICK_PRESETS, POLICIES, HOURS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/id/42/1600/900" 
              alt="Restaurant Ambiance" 
              className="w-full h-full object-cover brightness-[0.4]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#faf9f6]"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl text-white font-bold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 serif">
              Savor Every Moment
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light animate-in fade-in slide-in-from-bottom-10 duration-1000">
              Where culinary excellence meets timeless elegance. Join us for an unforgettable dining experience.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-4 -mt-32 relative z-20">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Form Area */}
            <div className="lg:col-span-8">
              <ReservationForm />
              
              {/* Presets Grid */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6 serif text-gray-900">Experience Packages</h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  {QUICK_PRESETS.map((preset) => (
                    <div 
                      key={preset.id}
                      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                    >
                      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">
                        {preset.icon}
                      </div>
                      <h4 className="font-bold text-gray-900">{preset.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{preset.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Information */}
            <div className="lg:col-span-4 space-y-8">
              {/* Hours Card */}
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50">
                <h3 className="text-xl font-bold mb-6 flex items-center serif text-gray-900">
                  <span className="mr-3">🕒</span> Dining Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                    <span className="text-gray-500">Lunch</span>
                    <span className="font-semibold text-gray-900">{HOURS.lunch}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                    <span className="text-gray-500">Dinner</span>
                    <span className="font-semibold text-gray-900">{HOURS.dinner}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Availability</span>
                    <span className="text-green-600 font-medium">{HOURS.days}</span>
                  </div>
                </div>
              </div>

              {/* Policy Card */}
              <div className="bg-[#1a1a1a] text-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold mb-6 serif text-[#b49164]">Booking Policies</h3>
                <ul className="space-y-4">
                  {POLICIES.map((policy, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-400">
                      <span className="mr-3 mt-1 text-[#b49164]">•</span>
                      {policy}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Decorative Card */}
              <div className="relative rounded-3xl overflow-hidden h-64 group">
                <img 
                  src="https://picsum.photos/id/493/600/800" 
                  alt="Wine selection" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                  <p className="text-[#b49164] text-xs font-bold uppercase tracking-widest mb-1">Fine Wine Selection</p>
                  <h4 className="text-white font-bold text-lg serif">Award Winning Cellar</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-100 pt-12 text-center text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="w-12 h-12 bg-[#b49164]/10 text-[#b49164] flex items-center justify-center rounded-lg mx-auto mb-6">
            <span className="font-bold text-xl serif">A</span>
          </div>
          <p className="mb-2">© 2024 {RESTAURANT_NAME}. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-6">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
