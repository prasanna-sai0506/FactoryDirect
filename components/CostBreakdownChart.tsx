import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { CostBreakdown } from '../types';

interface CostBreakdownChartProps {
  breakdown: CostBreakdown;
  directPrice: number;
  marketPrice: number;
}

const CostBreakdownChart: React.FC<CostBreakdownChartProps> = ({ breakdown, directPrice, marketPrice }) => {
  const data = [
    {
      name: 'FactoryDirect',
      Manufacturing: breakdown.manufacturing,
      Logistics: breakdown.logistics,
      GST: breakdown.tax,
      PlatformFee: breakdown.platformFee,
      RetailMarkup: 0,
      total: directPrice
    },
    {
      name: 'Retail Store',
      Manufacturing: breakdown.manufacturing,
      Logistics: breakdown.logistics * 1.5, // Logistics usually higher in traditional retail due to multiple hops
      GST: breakdown.tax, // GST is on the base value mostly, simplified here
      PlatformFee: 0,
      RetailMarkup: breakdown.retailMarkup || (marketPrice - directPrice),
      total: marketPrice
    },
  ];

  const formatRupee = (value: number) => 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold text-gray-800 mb-2">Price Transparency (₹)</h3>
      <p className="text-sm text-gray-500 mb-6">See exactly where your money goes compared to traditional retail shops.</p>
      
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
          >
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" width={100} tick={{fontSize: 12, fontWeight: 600}} />
            <Tooltip 
              cursor={{fill: 'transparent'}}
              formatter={(value: number) => [formatRupee(value), '']}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            />
            <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
            <Bar dataKey="Manufacturing" stackId="a" fill="#3b82f6" radius={[4, 0, 0, 4]} />
            <Bar dataKey="Logistics" stackId="a" fill="#6366f1" />
            <Bar dataKey="GST" stackId="a" fill="#94a3b8" />
            <Bar dataKey="PlatformFee" name="Direct Fee" stackId="a" fill="#10b981" />
            <Bar dataKey="RetailMarkup" name="Retail Margin" stackId="a" fill="#ef4444" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex justify-between items-center px-4 py-3 bg-green-50 rounded-lg border border-green-100">
        <span className="text-green-800 font-medium text-sm">Total Savings</span>
        <span className="text-green-700 font-bold text-lg">{formatRupee(marketPrice - directPrice)}</span>
      </div>
    </div>
  );
};

export default CostBreakdownChart;