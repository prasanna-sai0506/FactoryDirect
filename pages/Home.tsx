import React, { useState, useMemo } from 'react';
import { MOCK_PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Box, CheckCircle2, DollarSign, Truck } from 'lucide-react';
import { PageView } from '../types';

interface HomeProps {
  onProductClick: (id: string) => void;
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onProductClick, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Only show first 8 products on home page
  const filteredProducts = useMemo(() => {
    let products = MOCK_PRODUCTS;
    if (activeCategory !== 'All') {
      products = MOCK_PRODUCTS.filter(p => p.category === activeCategory);
    }
    return products.slice(0, 8);
  }, [activeCategory]);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold mb-6 border border-orange-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Make in India Revolution 🇮🇳
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                Electronics at <span className="text-blue-600">Factory Prices</span>.
                <br />
                <span className="text-gray-400 font-bold">Skip the Middlemen.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Connect directly with top manufacturers in Noida, Chennai & Bengaluru. Get GST invoices, warranty, and factory-gate prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onNavigate(PageView.PRODUCTS)}
                  className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Start Saving <ArrowRight size={18} />
                </button>
                <button 
                  onClick={() => onNavigate(PageView.HOW_IT_WORKS)}
                  className="px-8 py-3.5 bg-white text-gray-700 font-bold rounded-lg border border-gray-200 hover:bg-gray-50 transition-all"
                >
                  How it Works
                </button>
              </div>
              
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  BIS Certified
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  GST Invoice
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  UPI & COD
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-green-50 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-50 flex flex-col items-center text-center transform translate-y-8">
                    <Truck className="text-blue-600 mb-3 h-10 w-10" />
                    <h3 className="font-bold text-gray-900">Pan-India Delivery</h3>
                    <p className="text-xs text-gray-500 mt-2">Fast shipping from local factories.</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-50 flex flex-col items-center text-center">
                    <DollarSign className="text-green-600 mb-3 h-10 w-10" />
                    <h3 className="font-bold text-gray-900">Zero Commissions</h3>
                    <p className="text-xs text-gray-500 mt-2">No distributor margins added.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-hide">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === category
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Trending Deals in India</h2>
          <button 
             onClick={() => onNavigate(PageView.PRODUCTS)}
             className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1"
          >
             View All <ArrowRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onClick={onProductClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;