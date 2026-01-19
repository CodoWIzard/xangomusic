# Vinyl Vault - Vinyl Record Shop Frontend

A modern, responsive Next.js frontend boilerplate for a vinyl record shop. This is a frontend-only application with no backend, authentication, or payment processing - perfect for showcasing a record collection or as a starting point for a full e-commerce solution.

## Features

- **Modern Design**: Clean, minimalist design with warm record-store vibes
- **Responsive Layout**: Mobile-first design that works on all devices  
- **Search & Filter**: Client-side search by artist, title, genre, and country
- **Shopping Cart**: Full cart functionality with quantity management (frontend-only)
- **Multiple Pages**: Home, New Releases, How to Order, Contact, and Cart pages
- **Mock Data**: Realistic vinyl record data with proper categorization
- **TypeScript**: Fully typed for better development experience
- **Tailwind CSS**: Utility-first styling with custom color palette

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **State Management**: React Context + useReducer
- **Icons**: SVG icons (no external dependencies)
- **Data**: Static JSON mock data

## Getting Started

1. **Install dependencies**:\n   ```bash\n   npm install\n   ```\n\n2. **Run the development server**:\n   ```bash\n   npm run dev\n   ```\n\n3. **Open your browser**:\n   Navigate to [http://localhost:3000](http://localhost:3000)\n\n## Project Structure\n\n```\nmy-app/\n├── app/\n│   ├── layout.tsx          # Root layout with providers\n│   ├── page.tsx            # Homepage with catalog\n│   └── globals.css         # Global styles\n├── components/             # Reusable UI components\n│   ├── Header.tsx          # Navigation header\n│   ├── Footer.tsx          # Site footer\n│   ├── VinylCard.tsx       # Record display card\n│   ├── SearchBar.tsx       # Search input\n│   └── GenreFilter.tsx     # Category filters\n├── data/\n│   └── records.ts          # Mock vinyl record data\n├── lib/\n│   └── cart-context.tsx    # Shopping cart state management\n└── pages/                  # Page components\n    ├── cart-page.tsx       # Shopping cart\n    ├── how-to-order-page.tsx\n    ├── new-releases-page.tsx\n    └── contact-page.tsx\n```\n\n## Key Components\n\n### VinylCard\nDisplays individual record information with:\n- Album artwork placeholder\n- Title, artist, genre, country\n- Price and \"Add to Cart\" button\n\n### SearchBar\nClient-side search functionality:\n- Searches across artist, title, and genre\n- Real-time filtering\n\n### GenreFilter\nDropdown filters for:\n- Music genre (Jazz, Rock, Electronic, Classical)\n- Country of origin\n\n### Cart Management\nFull shopping cart with:\n- Add/remove items\n- Quantity adjustment\n- Price calculation\n- Persistent state during session\n\n## Pages\n\n1. **Home**: Main catalog with search, filters, and record grid\n2. **New Releases**: Time-based filtering (30/60/90 days) organized by genre\n3. **How to Order**: Information about ordering process and shipping\n4. **Contact**: Store information and contact form (UI only)\n5. **Cart**: Shopping cart with item management\n\n## Customization\n\n### Adding Records\nEdit `data/records.ts` to add new vinyl records:\n\n```typescript\n{\n  id: \"unique-id\",\n  title: \"Album Title\",\n  artist: \"Artist Name\",\n  country: \"Country\",\n  genre: \"Genre\",\n  price: 29.99,\n  releaseDate: \"2024-01-15\",\n  coverImage: \"/covers/album.jpg\"\n}\n```\n\n### Styling\nThe project uses Tailwind CSS with a stone color palette. Key colors:\n- `stone-50`: Background\n- `stone-900`: Primary text and buttons\n- `stone-600`: Secondary text\n- `stone-200`: Borders and dividers\n\n### Adding Backend\nThis frontend is designed to easily integrate with a backend:\n1. Replace mock data imports with API calls\n2. Add authentication context\n3. Implement real payment processing\n4. Add database integration\n\n## Browser Support\n\n- Chrome/Edge 88+\n- Firefox 85+\n- Safari 14+\n- Mobile browsers (iOS Safari, Chrome Mobile)\n\n## License\n\nMIT License - feel free to use this as a starting point for your own projects.\n\n## Contributing\n\nThis is a boilerplate project. Feel free to fork and customize for your needs!\n