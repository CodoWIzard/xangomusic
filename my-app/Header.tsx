'use client';

import Link from 'next/link';
import { useCart } from './cart-context';
import { useState } from 'react';
import CartPage from './cart-page';
import HowToOrderPage from './how-to-order-page';
import NewReleasesPage from './new-releases-page';
import ContactPage from './contact-page';

export default function Header() {
  const { state } = useCart();
  const [currentPage, setCurrentPage] = useState('home');
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const renderPage = () => {
    switch (currentPage) {
      case 'cart':
        return <CartPage />;
      case 'how-to-order':
        return <HowToOrderPage />;
      case 'new-releases':
        return <NewReleasesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return null;
    }
  };

  if (currentPage !== 'home') {
    return (
      <div>
        <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button 
                onClick={() => setCurrentPage('home')} 
                className="text-2xl font-bold text-stone-900 hover:text-stone-700 transition-colors"
              >
                Vinyl Vault
              </button>
              
              <nav className="hidden md:flex space-x-8">
                <button 
                  onClick={() => setCurrentPage('home')} 
                  className="text-stone-600 hover:text-stone-900 transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => setCurrentPage('new-releases')} 
                  className="text-stone-600 hover:text-stone-900 transition-colors"
                >
                  New Releases
                </button>
                <button 
                  onClick={() => setCurrentPage('how-to-order')} 
                  className="text-stone-600 hover:text-stone-900 transition-colors"
                >
                  How to Order
                </button>
                <button 
                  onClick={() => setCurrentPage('contact')} 
                  className="text-stone-600 hover:text-stone-900 transition-colors"
                >
                  Contact
                </button>
              </nav>

              <button 
                onClick={() => setCurrentPage('cart')}
                className="flex items-center space-x-2 bg-stone-900 text-white px-4 py-2 rounded-lg hover:bg-stone-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8" />
                </svg>
                <span>Cart ({itemCount})</span>
              </button>
            </div>
          </div>
        </header>
        {renderPage()}
      </div>
    );
  }

  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => setCurrentPage('home')} 
            className="text-2xl font-bold text-stone-900"
          >
            Vinyl Vault
          </button>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => setCurrentPage('home')} 
              className="text-stone-600 hover:text-stone-900 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('new-releases')} 
              className="text-stone-600 hover:text-stone-900 transition-colors"
            >
              New Releases
            </button>
            <button 
              onClick={() => setCurrentPage('how-to-order')} 
              className="text-stone-600 hover:text-stone-900 transition-colors"
            >
              How to Order
            </button>
            <button 
              onClick={() => setCurrentPage('contact')} 
              className="text-stone-600 hover:text-stone-900 transition-colors"
            >
              Contact
            </button>
          </nav>

          <button 
            onClick={() => setCurrentPage('cart')}
            className="flex items-center space-x-2 bg-stone-900 text-white px-4 py-2 rounded-lg hover:bg-stone-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8" />
            </svg>
            <span>Cart ({itemCount})</span>
          </button>
        </div>
      </div>
    </header>
  );
}