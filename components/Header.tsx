
import React from 'react';
import { RESTAURANT_NAME } from '../constants.tsx';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 h-24 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-bold tracking-[0.2em] luxury-heading oriental-red-text leading-none">
            L'AMBROISIE
          </span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mt-1">
            MODERN BISTRO BY ORIENTAL
          </span>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-10 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-600">
          <a href="#" className="hover:text-[#BC1E22] transition-colors">The Restaurant</a>
          <a href="#" className="hover:text-[#BC1E22] transition-colors">Our Menu</a>
          <a href="#" className="hover:text-[#BC1E22] transition-colors">Private Rooms</a>
          <a href="#" className="hover:text-[#BC1E22] transition-colors">Contact</a>
          <button className="bg-[#BC1E22] text-white px-8 py-3 hover:bg-[#a11a1d] transition-all shadow-sm">
            BOOK NOW
          </button>
        </nav>
        
        <button className="lg:hidden p-2 text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
