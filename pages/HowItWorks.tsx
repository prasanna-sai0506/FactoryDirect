import React from 'react';
import { ArrowRight, Factory, Store, User, X, Check, Truck, TrendingDown, ShieldCheck } from 'lucide-react';

const HowItWorks: React.FC<{ onStartShopping: () => void }> = ({ onStartShopping }) => {
  return (
    <div className="bg-white animate-in fade-in duration-500">
      {/* Hero Header */}
      <div className="bg-gray-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparency is our Product.</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          We stripped away the supply chain inefficiencies to bring you electronics at their true cost.
        </p>
        <button 
          onClick={onStartShopping}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
        >
          See the Prices
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* The Problem */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">The Traditional Retail Problem</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 overflow-x-auto pb-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Factory size={32} className="text-gray-600" />
              </div>
              <span className="font-semibold text-gray-700">Factory</span>
              <span className="text-xs text-gray-500">Cost: ₹100</span>
            </div>
            
            <ArrowRight className="text-red-400 rotate-90 md:rotate-0" />
            
            <div className="flex flex-col items-center opacity-50">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4 border border-red-100">
                <Truck size={24} className="text-red-400" />
              </div>
              <span className="font-semibold text-gray-500">Distributor</span>
              <span className="text-xs text-red-500">+20% Markup</span>
            </div>

            <ArrowRight className="text-red-400 rotate-90 md:rotate-0" />

            <div className="flex flex-col items-center opacity-50">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4 border border-red-100">
                <Store size={24} className="text-red-400" />
              </div>
              <span className="font-semibold text-gray-500">Wholesaler</span>
              <span className="text-xs text-red-500">+15% Markup</span>
            </div>

            <ArrowRight className="text-red-400 rotate-90 md:rotate-0" />

            <div className="flex flex-col items-center opacity-50">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4 border border-red-100">
                <Store size={24} className="text-red-400" />
              </div>
              <span className="font-semibold text-gray-500">Retailer</span>
              <span className="text-xs text-red-500">+30% Markup</span>
            </div>

            <ArrowRight className="text-red-400 rotate-90 md:rotate-0" />

            <div className="flex flex-col items-center relative">
               <div className="absolute -top-4 -right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                ₹250
               </div>
              <div className="w-20 h-20 bg-gray-800 text-white rounded-full flex items-center justify-center mb-4">
                <User size={32} />
              </div>
              <span className="font-semibold text-gray-900">You Pay</span>
            </div>
          </div>
        </div>

        {/* The Solution */}
        <div className="bg-blue-50 rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
          
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12 relative z-10">The FactoryDirect Way</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 relative z-10">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white shadow-lg rounded-full flex items-center justify-center mb-4">
                <Factory size={40} className="text-blue-600" />
              </div>
              <span className="font-bold text-xl text-gray-800">Factory</span>
              <span className="text-sm text-gray-600">Cost: ₹100</span>
            </div>
            
            <div className="flex flex-col items-center">
               <div className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold mb-2">Direct Shipping</div>
               <ArrowRight size={40} className="text-green-500 hidden md:block" />
               <ArrowRight size={40} className="text-green-500 md:hidden rotate-90" />
            </div>

            <div className="flex flex-col items-center relative">
               <div className="absolute -top-6 -right-6 bg-green-500 text-white text-lg font-bold px-4 py-2 rounded-full shadow-lg animate-bounce">
                ₹130
               </div>
              <div className="w-24 h-24 bg-blue-600 text-white shadow-xl rounded-full flex items-center justify-center mb-4">
                <User size={40} />
              </div>
              <span className="font-bold text-xl text-gray-800">You Pay</span>
              <span className="text-sm text-green-600 font-bold">You save 48%</span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
             <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                   <X className="text-red-500" />
                </div>
                <h3 className="font-bold text-gray-900">No Middlemen</h3>
                <p className="text-sm text-gray-500 mt-2">We cut out importers, distributors, and wholesalers.</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                   <TrendingDown className="text-green-500" />
                </div>
                <h3 className="font-bold text-gray-900">Zero Inventory Costs</h3>
                <p className="text-sm text-gray-500 mt-2">Products ship directly from the production line.</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                   <ShieldCheck className="text-blue-500" />
                </div>
                <h3 className="font-bold text-gray-900">Verified Quality</h3>
                <p className="text-sm text-gray-500 mt-2">We only onboard BIS-certified manufacturing partners.</p>
             </div>
          </div>
        </div>

        <div className="text-center">
           <h2 className="text-2xl font-bold mb-6">Ready to stop paying extra?</h2>
           <button 
              onClick={onStartShopping}
              className="px-8 py-4 bg-gray-900 text-white text-lg font-bold rounded-lg shadow-xl hover:bg-black transition-all"
           >
              Browse Factory Deals
           </button>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;