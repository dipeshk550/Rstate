import React from 'react';
import { formatPrice } from '../utils/format';
import { Heart } from 'lucide-react';

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

type Props = {
  item: Listing;
  onOpen: (item: Listing) => void;
  fav: boolean;
  onFav: (id: string) => void;
};

export default function ListingCard({ item, onOpen, fav, onFav }: Props) {
  return (
    <div className="rounded-2xl bg-white shadow-sm overflow-hidden">
      <div className="relative h-44">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        <button onClick={(e) => { e.stopPropagation(); onFav(item.id); }} aria-label="favorite" className={`absolute top-3 right-3 p-2 rounded-full ${fav ? 'bg-rose-600 text-white' : 'bg-white'}`}>
          <Heart size={16} />
        </button>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-lg">{item.title}</div>
          <div className="text-sm text-gray-500">{formatPrice(item.price)}</div>
        </div>
        <div className="text-sm text-gray-600 mt-1">{item.locationText}, {item.city}</div>
        <div className="mt-2 text-sm text-gray-600 grid grid-cols-3 gap-2">
          <div>{item.beds || '–'} beds</div>
          <div>{item.baths || '–'} baths</div>
          <div>{item.areaSqFt} ft²</div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <button onClick={() => onOpen(item)} className="px-3 py-2 rounded-lg bg-primary text-white">View</button>
          <div className="text-xs text-gray-500">#{item.id}</div>
        </div>
      </div>
    </div>
  );
}
