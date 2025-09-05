import React, { useEffect, useMemo, useState } from 'react';
import listingsData from '../data/listings.json';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import ListingCard from '../components/ListingCards';
import Pagination from '../components/Pagination';
import { useFavorites } from '../context/FavoritesContext';
import ListingDetails from './ListingDetails';

type Listing = (typeof listingsData)[number];

export default function ListingsPage() {
  const [q, setQ] = useState('');
  const [type, setType] = useState('all');
  const [city, setCity] = useState('all');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [sort, setSort] = useState('newest');
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Listing | null>(null);

  const { favs, toggle } = useFavorites();

  useEffect(() => { setPage(1); }, [q, type, city, priceMin, priceMax, sort]);

  const cityOptions = useMemo(() => Array.from(new Set(listingsData.map(l => l.city))), []);

  const filtered = useMemo(() => {
    let items = [...listingsData];
    if (type !== 'all') items = items.filter(i => i.type === type);
    if (city !== 'all') items = items.filter(i => i.city === city);
    if (q.trim()) {
      const t = q.toLowerCase();
      items = items.filter(i => `${i.title} ${i.locationText}`.toLowerCase().includes(t));
    }
    if (priceMin) items = items.filter(i => i.price >= parseInt(priceMin, 10));
    if (priceMax) items = items.filter(i => i.price <= parseInt(priceMax, 10));
    switch (sort) {
      case 'priceLow': items.sort((a,b)=>a.price-b.price); break;
      case 'priceHigh': items.sort((a,b)=>b.price-a.price); break;
      case 'area': items.sort((a,b)=>b.areaSqFt-a.areaSqFt); break;
      default: items.sort((a,b) => new Date(b.listedAt).getTime() - new Date(a.listedAt).getTime());
    }
    return items;
  }, [q, type, city, priceMin, priceMax, sort]);

  const PER_PAGE = 9;
  const start = (page - 1) * PER_PAGE;
  const pageItems = filtered.slice(start, start + PER_PAGE);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <SearchBar q={q} setQ={setQ} />
          <div className="hidden md:block">
            <Filters type={type} setType={setType} city={city} setCity={setCity}
                     priceMin={priceMin} setPriceMin={setPriceMin} priceMax={priceMax} setPriceMax={setPriceMax}
                     sort={sort} setSort={setSort} cityOptions={cityOptions} />
          </div>
        </div>

        {/* small screen filters */}
        <div className="md:hidden mt-3">
          <Filters type={type} setType={setType} city={city} setCity={setCity}
                   priceMin={priceMin} setPriceMin={setPriceMin} priceMax={priceMax} setPriceMax={setPriceMax}
                   sort={sort} setSort={setSort} cityOptions={cityOptions} />
        </div>
      </div>

      <div className="text-sm text-gray-600 mb-4">Showing <strong>{filtered.length}</strong> results</div>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-xl font-semibold">No listings match your filters</div>
          <div className="mt-3 text-gray-500">Try removing filters or widening price range.</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pageItems.map(item => (
            <ListingCard key={item.id} item={item} onOpen={setSelected} fav={favs.includes(item.id)} onFav={toggle} />
          ))}
        </div>
      )}

      <Pagination 
      page={page} 
      total={filtered.length} 
      perPage={PER_PAGE} 
      onChange={setPage} />

      {selected && <ListingDetails item={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
