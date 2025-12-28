export interface CostBreakdown {
  manufacturing: number;
  logistics: number;
  tax: number;
  platformFee: number;
  retailMarkup?: number; // Only for traditional comparison
}

export interface Product {
  id: string;
  name: string;
  manufacturer: string;
  category: string;
  description: string;
  specs: string[];
  price: number;
  marketPrice: number;
  imageUrl: string;
  verified: boolean;
  minBatchSize?: number;
  currentBatchCount?: number;
  breakdown: CostBreakdown;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum PageView {
  HOME = 'HOME',
  PRODUCT_DETAIL = 'PRODUCT_DETAIL',
  DASHBOARD = 'DASHBOARD',
  PRODUCTS = 'PRODUCTS',
  HOW_IT_WORKS = 'HOW_IT_WORKS',
}