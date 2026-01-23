"use client";

import { genres, countries } from "./records";

interface GenreFilterProps {
  selectedGenre: string;
  selectedCountry: string;
  onGenreChange: (genre: string) => void;
  onCountryChange: (country: string) => void;
}

const FilterSelect = ({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) => (
  <div className="flex-1">
    <label className="block text-sm font-medium text-white mb-2">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-stone-500 bg-white text-stone-900"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default function GenreFilter({
  selectedGenre,
  selectedCountry,
  onGenreChange,
  onCountryChange,
}: GenreFilterProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <FilterSelect
        label="Genre"
        value={selectedGenre}
        options={genres}
        onChange={onGenreChange}
      />
      <FilterSelect
        label="Country"
        value={selectedCountry}
        options={countries}
        onChange={onCountryChange}
      />
    </div>
  );
}
