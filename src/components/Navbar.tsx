import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const loc = useLocation();
  return (
    <header className="bg-white border-b sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">R</div>
          <div>
            <div className="font-bold">Realstate</div>
            <div className="text-xs text-gray-500">Find houses, land & more</div>
          </div>
        </Link>

        <nav className="flex items-center gap-4">
          <Link to="/" className={`text-sm ${loc.pathname === '/' ? 'font-semibold' : 'text-gray-600'}`}>Home</Link>
          <Link to="/listings" className={`text-sm ${loc.pathname.startsWith('/listings') ? 'font-semibold' : 'text-gray-600'}`}>Listings</Link>
          <Link to="/favorites" className={`text-sm ${loc.pathname === '/favorites' ? 'font-semibold' : 'text-gray-600'}`}>Favorites</Link>
        </nav>
      </div>
    </header>
  );
}
