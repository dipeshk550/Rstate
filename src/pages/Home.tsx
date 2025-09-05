import React from 'react';

type Props = {
  page: number;
  total: number;
  perPage: number;
  onChange: (p: number) => void;
};

export default function Pagination({ page, total, perPage, onChange }: Props) {
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {/* Previous button */}
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        className="px-3 py-1 rounded border hover:bg-gray-200 transition"
        disabled={page === 1}
      >
        Prev
      </button>

      {/* Page numbers */}
      {Array.from({ length: totalPages }, (_, i) => {
        const p = i + 1;
        return (
          <button
            key={p}
            onClick={() => onChange(p)}
            className={`px-3 py-1 rounded border transition ${
              p === page ? 'bg-blue-500 text-white border-blue-500' : 'bg-white hover:bg-gray-100'
            }`}
          >
            {p}
          </button>
        );
      })}

      {/* Next button */}
      <button
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        className="px-3 py-1 rounded border hover:bg-gray-200 transition"
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}
