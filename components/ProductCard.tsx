import React from 'react';
import { Product } from '../types';
import { ShieldCheck, TrendingDown, Users } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const savings = Math.round(((product.marketPrice - product.price) / product.marketPrice) * 100);
  
  const formatRupee = (value: number) => 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);

  return (
    <div 
      onClick={() => onClick(product.id)}
      className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer group"
    >
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.verified && (
          <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <ShieldCheck size={14} className="text-blue-600" />
            <span className="text-xs font-semibold text-gray-700">BIS Verified</span>
          </div>
        )}
        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-sm">
          -{savings}% OFF
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-gray-900 line-clamp-1">{product.name}</h3>
        </div>
        <p className="text-xs text-gray-500 mb-3">{product.manufacturer}</p>
        
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-xl font-bold text-gray-900">{formatRupee(product.price)}</span>
          <span className="text-sm text-gray-400 line-through decoration-gray-400 decoration-1">{formatRupee(product.marketPrice)}</span>
        </div>

        {product.currentBatchCount && product.minBatchSize && (
          <div className="mb-4">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-600 flex items-center gap-1"><Users size={12}/> Batch Progress</span>
              <span className="font-medium text-blue-600">{product.currentBatchCount}/{product.minBatchSize}</span>
            </div>
            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${(product.currentBatchCount / product.minBatchSize) * 100}%` }}
              />
            </div>
          </div>
        )}

        <button className="w-full py-2 bg-gray-50 text-blue-600 text-sm font-semibold rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-colors">
          View Cost Breakdown
        </button>
      </div>
    </div>
  );
};

export default ProductCard;