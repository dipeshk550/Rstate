import React from 'react';

type Props = {
  q: string;
  setQ: (s: string) => void;
};

export default function SearchBar({ q, setQ }: Props) {
  return (
    <div className="w-full md:w-96">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search title or location..."
        className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:border-primary"
      />
    </div>
  );
}
