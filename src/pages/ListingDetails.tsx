import React from 'react';
import { formatPrice } from '../utils/format';

type Listing = {
  id: string;
  title: string;
  type: string;
  city: string;
  locationText: string;
  price: number;
  areaSqFt: number;
  beds: number;
  baths: number;
  image: string;
  listedAt: string;
};

export default function ListingDetails({ item, onClose }: { item: Listing; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="relative z-40 max-w-4xl w-full bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <img src={item.image} alt={item.title} className="w-full h-96 object-cover" />
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <div className="text-sm text-gray-600 mt-1">{item.locationText}, {item.city}</div>
              </div>
              <div className="text-xl font-semibold">{formatPrice(item.price)}</div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
              <div><strong>{item.beds || '–'}</strong> Beds</div>
              <div><strong>{item.baths || '–'}</strong> Baths</div>
              <div><strong>{item.areaSqFt}</strong> ft²</div>
            </div>

            <div className="mt-6">
              <button className="px-4 py-2 bg-primary text-white rounded-lg">Contact Seller</button>
              <button onClick={onClose} className="ml-3 px-4 py-2 border rounded-lg">Close</button>
            </div>

            <div className="mt-4 text-xs text-gray-500">Listing ID: {item.id} • Listed: {new Date(item.listedAt).toLocaleDateString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
