// src/pages/Favorites.tsx
import React from 'react';
import listingsData from '../data/listings.json';
import ListingCard from '../components/ListingCards';
import { useFavorites } from '../context/FavoritesContext';

export default function FavoritesPage() {
  const { favs, toggle } = useFavorites();
  const favListings = listingsData.filter(l => favs.includes(l.id));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Favorites</h2>
      {favListings.length === 0 ? (
        <div className="text-gray-600">You haven't added any favorites yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favListings.map(item => (
            <ListingCard item={item} key={item.id} onOpen={() => {}} fav={true} onFav={toggle} />
          ))}
        </div>
      )}
    </div>
  );
}
