import React from 'react';

type Props = {
  type: string;
  setType: (v: string) => void;
  city: string;
  setCity: (v: string) => void;
  priceMin: string;
  setPriceMin: (v: string) => void;
  priceMax: string;
  setPriceMax: (v: string) => void;
  sort: string;
  setSort: (v: string) => void;
  cityOptions: string[];
};

export default function Filters({
  type, setType, city, setCity, priceMin, setPriceMin, priceMax, setPriceMax, sort, setSort, cityOptions
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <select value={type} onChange={(e) => setType(e.target.value)} className="px-3 py-2 rounded-lg border">
        <option value="all">All Types</option>
        <option value="house">House</option>
        <option value="land">Land</option>
        <option value="apartment">Apartment</option>
        <option value="commercial">Commercial</option>
      </select>

      <select value={city} onChange={(e) => setCity(e.target.value)} className="px-3 py-2 rounded-lg border">
        <option value="all">All Cities</option>
        {cityOptions.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>

      <input value={priceMin} onChange={(e) => setPriceMin(e.target.value)} placeholder="Min price" className="w-28 px-3 py-2 rounded-lg border" />
      <input value={priceMax} onChange={(e) => setPriceMax(e.target.value)} placeholder="Max price" className="w-28 px-3 py-2 rounded-lg border" />

      <select value={sort} onChange={(e) => setSort(e.target.value)} className="px-3 py-2 rounded-lg border">
        <option value="newest">Newest</option>
        <option value="priceLow">Price: Low → High</option>
        <option value="priceHigh">Price: High → Low</option>
        <option value="area">Area: Big → Small</option>
      </select>
    </div>
  );
}
