import React from 'react';
import { Product } from '../types';
import { ArrowLeft, Check, ShieldCheck, Truck, Clock, AlertCircle, FileText, ShoppingCart } from 'lucide-react';
import CostBreakdownChart from '../components/CostBreakdownChart';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart?: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart }) => {
  const formatRupee = (value: number) => 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);

  // Extract city from manufacturer string roughly for demo
  const originCity = product.manufacturer.includes('Noida') ? 'Noida' : 
                     product.manufacturer.includes('Chennai') ? 'Chennai' :
                     product.manufacturer.includes('Bengaluru') ? 'Bengaluru' :
                     product.manufacturer.includes('Pune') ? 'Pune' : 'Manesar';

  return (
    <div className="bg-gray-50 min-h-screen py-8 animate-in slide-in-from-right-10 fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors font-medium"
        >
          <ArrowLeft size={20} className="mr-2" /> Back to Marketplace
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="aspect-video w-full bg-gray-100 relative group">
                 <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                    <div className="flex flex-wrap items-center gap-2 text-gray-600">
                      <span className="font-semibold text-blue-600">{product.manufacturer}</span>
                      <span className="hidden sm:inline w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="flex items-center gap-1 text-sm bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-100"><ShieldCheck size={14} /> BIS Verified</span>
                    </div>
                  </div>
                  <div className="text-left sm:text-right w-full sm:w-auto flex flex-row sm:flex-col justify-between items-center sm:items-end">
                    <div className="text-3xl font-bold text-gray-900">{formatRupee(product.price)}</div>
                    <div className="text-sm text-gray-500 line-through">MRP: {formatRupee(product.marketPrice)}</div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>

                <div className="border-t border-gray-100 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Technical Specifications</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700 font-medium text-center border border-gray-100 hover:border-gray-300 transition-colors cursor-default">
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <CostBreakdownChart 
              breakdown={product.breakdown} 
              directPrice={product.price}
              marketPrice={product.marketPrice}
            />
          </div>

          {/* Action Column */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Purchase Options</h3>
              
              <div className="space-y-4 mb-6">
                <div className="p-4 border-2 border-blue-600 bg-blue-50 rounded-xl relative cursor-pointer ring-1 ring-blue-100 shadow-sm">
                  <div className="absolute top-2 right-2 text-blue-600">
                    <Check size={20} />
                  </div>
                  <span className="block text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">Direct Buy</span>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{formatRupee(product.price)}</div>
                  <div className="text-sm text-gray-600">Includes 18% GST</div>
                </div>

                <div className="p-4 border border-gray-200 hover:border-blue-300 rounded-xl cursor-pointer transition-colors relative opacity-60 hover:opacity-100 group">
                  <span className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-bl-lg rounded-tr-lg">Waitlist</span>
                  <span className="block text-xs font-bold text-gray-500 group-hover:text-blue-600 uppercase tracking-wide mb-1">Group Buy (Tier 2)</span>
                  <div className="text-2xl font-bold text-gray-400 group-hover:text-gray-700 mb-1">{formatRupee(product.price * 0.90)}</div>
                  <div className="text-sm text-gray-400">Unlock at 500 units</div>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <Truck size={18} className="text-gray-500" />
                  <span>Ships from <b>{originCity}</b></span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-gray-500" />
                  <span>Delivered in 3-5 Business Days</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-gray-500" />
                  <span>GST Invoice Available</span>
                </div>
              </div>

              <button 
                onClick={onAddToCart}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-all mb-3 flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} /> Buy Now (UPI / COD)
              </button>
              <button className="w-full bg-white text-gray-700 font-bold py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all">
                Ask AI Assistant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;