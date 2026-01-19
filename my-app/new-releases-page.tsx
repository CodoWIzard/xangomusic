'use client';

import { useState, useMemo } from 'react';
import { records } from './records';
import VinylCard from './VinylCard';

export default function NewReleasesPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('30');

  const filteredRecords = useMemo(() => {
    const now = new Date();
    const daysAgo = new Date(now.getTime() - (parseInt(selectedPeriod) * 24 * 60 * 60 * 1000));
    
    return records.filter(record => {
      const releaseDate = new Date(record.releaseDate);
      return releaseDate >= daysAgo;
    }).sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
  }, [selectedPeriod]);

  const recordsByGenre = useMemo(() => {
    const grouped = filteredRecords.reduce((acc, record) => {
      if (!acc[record.genre]) {
        acc[record.genre] = [];
      }
      acc[record.genre].push(record);
      return acc;
    }, {} as Record<string, typeof records>);
    
    return grouped;
  }, [filteredRecords]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900 mb-4">New Releases</h1>
        <p className="text-stone-600 mb-6">
          Discover the latest additions to our vinyl collection, organized by genre and release date.
        </p>
        
        <div className="flex flex-wrap gap-2">
          {['30', '60', '90'].map((days) => (
            <button
              key={days}
              onClick={() => setSelectedPeriod(days)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedPeriod === days
                  ? 'bg-stone-900 text-white'
                  : 'bg-white text-stone-600 border border-stone-300 hover:bg-stone-50'
              }`}
            >
              Last {days} days
            </button>
          ))}
        </div>
      </div>

      {Object.keys(recordsByGenre).length === 0 ? (
        <div className="text-center py-12">
          <p className="text-stone-500 text-lg">No new releases found in the last {selectedPeriod} days.</p>
        </div>
      ) : (
        <div className="space-y-12">
          {Object.entries(recordsByGenre).map(([genre, genreRecords]) => (
            <section key={genre}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-stone-900">{genre}</h2>
                <span className="text-stone-600">{genreRecords.length} records</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {genreRecords.map((record) => (
                  <div key={record.id} className="relative">
                    <VinylCard record={record} />
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      New
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      <div className="mt-12 bg-white rounded-lg shadow-sm border border-stone-200 p-6">
        <h3 className="text-xl font-semibold text-stone-900 mb-4">About New Releases</h3>
        <div className="text-stone-600 space-y-2">
          <p>Our new releases section features the latest vinyl records added to our collection.</p>
          <p>We regularly update our inventory with rare finds, reissues, and brand new pressings from artists around the world.</p>
          <p>Check back frequently to discover new additions to your collection!</p>
        </div>
      </div>
    </div>
  );
}