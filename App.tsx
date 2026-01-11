
import React from 'react';
import Header from './components/Header';
import ReservationForm from './components/ReservationForm';
import { RESTAURANT_NAME, QUICK_PRESETS, POLICIES, HOURS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24">
        {/* Gallery Hero Section */}
        <section className="relative px-6 py-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[#BC1E22] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Welcome to L'Ambroisie</span>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 luxury-heading leading-[1.1]">
                Culinary <br /> Artistry & <br /> <span className="text-[#D4AF37]">Tradition</span>
              </h1>
              <p className="text-gray-500 text-lg max-w-md leading-relaxed mb-10 font-light italic">
                Experience the pinnacle of modern oriental dining, where every dish tells a story of heritage and innovation.
              </p>
              <div className="flex space-x-6 items-center">
                <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
                <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-gray-400">Award Winning Bistro</span>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative h-[450px] md:h-[600px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Luxury Dining" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur p-4 border border-[#D4AF37] hidden md:block">
                <p className="text-[10px] tracking-[0.2em] font-bold uppercase text-[#BC1E22]">Signature Selection</p>
                <p className="text-xs font-serif italic text-gray-600 mt-1">Premium Peking Duck</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section with refined spacing */}
        <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-50/50">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <ReservationForm />
            </div>

            {/* Information Column */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-12">
              <div className="border-l-2 border-[#BC1E22] pl-8">
                <h3 className="text-2xl font-bold luxury-heading mb-4 text-[#1a1a1a]">The Oriental Standard</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  L'Ambroisie brings the renowned Oriental Group excellence to a modern bistro setting. Our commitment to quality ingredients and masterful technique remains unchanged.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[10px] tracking-[0.3em] font-bold uppercase text-[#BC1E22] mb-4">Lunch Service</h4>
                  <p className="text-sm font-medium text-gray-900">{HOURS.lunch}</p>
                </div>
                <div>
                  <h4 className="text-[10px] tracking-[0.3em] font-bold uppercase text-[#BC1E22] mb-4">Dinner Service</h4>
                  <p className="text-sm font-medium text-gray-900">{HOURS.dinner}</p>
                </div>
              </div>

              <div className="bg-white p-8 border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#D4AF37]/10 -mr-6 -mt-6 rounded-full"></div>
                <h4 className="text-[10px] tracking-[0.3em] font-bold uppercase text-gray-400 mb-6">Reservation Policies</h4>
                <ul className="space-y-4">
                  {POLICIES.map((policy, idx) => (
                    <li key={idx} className="flex items-start text-[11px] text-gray-500 leading-relaxed uppercase tracking-wider">
                      <span className="mr-3 text-[#BC1E22]">/</span>
                      {policy}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Experiences - Gallery Grid */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.5em] uppercase">Discovery</span>
            <h2 className="text-4xl font-bold luxury-heading mt-4">Curated Experiences</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {QUICK_PRESETS.map((preset, idx) => (
              <div key={preset.id} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/5] mb-6">
                  <img 
                    src={`https://picsum.photos/id/${100 + idx}/800/1000`}
                    alt={preset.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[10px] tracking-[0.3em] font-bold uppercase text-[#D4AF37] mb-2">Package {idx + 1}</p>
                    <h4 className="text-2xl font-bold luxury-heading">{preset.title}</h4>
                  </div>
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-widest leading-loose">
                  {preset.description} — Perfect for {preset.guests} guests.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Luxury Footer */}
      <footer className="bg-[#1a1a1a] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          <div className="col-span-1">
            <span className="text-xl font-bold tracking-[0.2em] luxury-heading text-[#D4AF37]">L'AMBROISIE</span>
            <p className="text-gray-500 text-xs mt-6 leading-relaxed uppercase tracking-widest">
              A concept by Oriental Group. <br />
              Established 1991.
            </p>
          </div>
          
          <div className="col-span-1">
            <h5 className="text-[10px] tracking-[0.3em] font-bold uppercase text-white mb-8">Location</h5>
            <address className="text-gray-500 text-xs not-italic leading-loose uppercase tracking-widest">
              Level 2, Premium Wing <br />
              The Gardens Mall <br />
              Kuala Lumpur, Malaysia
            </address>
          </div>
          
          <div className="col-span-1">
            <h5 className="text-[10px] tracking-[0.3em] font-bold uppercase text-white mb-8">Navigation</h5>
            <div className="flex flex-col space-y-4 text-[10px] tracking-[0.2em] font-bold uppercase text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Reservations</a>
              <a href="#" className="hover:text-white transition-colors">Private Dining</a>
              <a href="#" className="hover:text-white transition-colors">Career Opportunities</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] font-bold uppercase text-gray-600">
          <p>© 2024 ORIENTAL GROUP OF RESTAURANTS</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
