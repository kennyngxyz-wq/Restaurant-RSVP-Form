
import React from 'react';
import { RESTAURANT_NAME } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#b49164] flex items-center justify-center rounded-lg shadow-lg">
            <span className="text-white font-bold text-xl serif">A</span>
          </div>
          <span className="hidden md:block text-xl font-bold tracking-tight text-gray-900 serif">
            {RESTAURANT_NAME}
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-[#b49164] transition-colors">Menu</a>
          <a href="#" className="hover:text-[#b49164] transition-colors">Private Dining</a>
          <a href="#" className="hover:text-[#b49164] transition-colors">Location</a>
          <button className="bg-[#b49164] text-white px-6 py-2 rounded-full hover:bg-[#a3835a] transition-all shadow-md">
            Reserve
          </button>
        </nav>
        
        <button className="md:hidden p-2 text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
