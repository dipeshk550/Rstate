import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import  Home  from './pages/Home';
import ListingsPage from './pages/Listings';
import FavoritesPage from './pages/Favorites';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route
          path="*"
          element={
            <div className="max-w-6xl mx-auto px-4 py-10">Page not found</div>
          }
        />
      </Routes>

      <footer className="border-t mt-10 py-8">
        <div className="max-w-6xl mx-auto px-4 text-sm text-gray-600">
          © {new Date().getFullYear()} Realstate — demo app
        </div>
      </footer>
    </div>
  );
}
