import React from 'react';

type Props = {
  page: number;
  total: number;
  perPage: number;
  onChange: (p: number) => void;
};

export default function Pagination({ page, total, perPage, onChange }: Props) {
  const totalPages = Math.ceil(total / perPage);
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-4">
      {[...Array(totalPages)].map((_, i) => {
        const p = i + 1;
        return (
          <button
            key={p}
            className={`px-3 py-1 border rounded ${
              p === page ? 'bg-blue-500 text-white' : 'bg-white'
            }`}
            onClick={() => onChange(p)}
          >
            {p}
          </button>
        );
      })}
    </div>
  );
}
