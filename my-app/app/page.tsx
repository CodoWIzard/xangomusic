'use client';

import { useState, useMemo } from 'react';
import { records } from '../records';
import VinylCard from '../VinylCard';
import SearchBar from '../SearchBar';
import GenreFilter from '../GenreFilter';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');

  const filteredRecords = useMemo(() => {
    return records.filter(record => {
      const matchesSearch = 
        record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.genre.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesGenre = selectedGenre === 'All' || record.genre === selectedGenre;
      const matchesCountry = selectedCountry === 'All' || record.country === selectedCountry;
      
      return matchesSearch && matchesGenre && matchesCountry;
    });
  }, [searchTerm, selectedGenre, selectedCountry]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
          Welcome to Vinyl Vault
        </h1>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto">
          Discover rare and classic vinyl records from around the world. 
          Curated collection for true music enthusiasts.
        </p>
      </section>

      {/* Facebook Updates Placeholder */}
      <section className="bg-white rounded-lg shadow-sm border border-stone-200 p-6 mb-8">
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Facebook Updates</h2>
        <div className="bg-stone-50 rounded-lg p-8 text-center">
          <p className="text-stone-600">Facebook feed integration placeholder</p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          </div>
          <div>
            <GenreFilter
              selectedGenre={selectedGenre}
              selectedCountry={selectedCountry}
              onGenreChange={setSelectedGenre}
              onCountryChange={setSelectedCountry}
            />
          </div>
        </div>
      </section>

      {/* Records Catalog */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-stone-900">Vinyl Collection</h2>
          <p className="text-stone-600">{filteredRecords.length} records found</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRecords.map((record) => (
            <VinylCard key={record.id} record={record} />
          ))}
        </div>
        
        {filteredRecords.length === 0 && (
          <div className="text-center py-12">
            <p className="text-stone-500 text-lg">No records found matching your criteria.</p>
          </div>
        )}
      </section>
    </div>
  );
}
