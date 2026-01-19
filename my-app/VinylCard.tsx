'use client';

import Image from 'next/image';
import { Record } from './records';
import { useCart } from './cart-context';

interface VinylCardProps {
  record: Record;
}

export default function VinylCard({ record }: VinylCardProps) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: record });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-square bg-stone-100 relative">
        <div className="w-full h-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
          <div className="w-32 h-32 bg-stone-800 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-stone-100 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-stone-900 mb-1 line-clamp-1">{record.title}</h3>
        <p className="text-stone-600 text-sm mb-1">{record.artist}</p>
        <p className="text-stone-500 text-xs mb-2">{record.genre} • {record.country}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-stone-900">${record.price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-stone-900 text-white px-3 py-1.5 rounded-md text-sm hover:bg-stone-800 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}