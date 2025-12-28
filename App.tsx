import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Dashboard from './pages/Dashboard';
import ProductsPage from './pages/ProductsPage';
import HowItWorks from './pages/HowItWorks';
import AIAssistant from './components/AIAssistant';
import CartDrawer from './components/CartDrawer';
import AuthModal from './components/AuthModal';
import { PageView, Product, CartItem, User } from './types';
import { MOCK_PRODUCTS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>(PageView.HOME);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  
  // Cart State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  // Auth State
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleProductClick = (id: string) => {
    setSelectedProductId(id);
    navigateTo(PageView.PRODUCT_DETAIL);
  };

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateCartQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleLogin = (name: string) => {
    setUser({ id: 'u1', name, email: 'user@example.com' });
    setIsAuthOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case PageView.HOME:
        return <Home onProductClick={handleProductClick} onNavigate={navigateTo} />;
      case PageView.PRODUCTS:
        return <ProductsPage onProductClick={handleProductClick} />;
      case PageView.HOW_IT_WORKS:
        return <HowItWorks onStartShopping={() => navigateTo(PageView.PRODUCTS)} />;
      case PageView.PRODUCT_DETAIL:
        const product = MOCK_PRODUCTS.find(p => p.id === selectedProductId);
        if (!product) return <Home onProductClick={handleProductClick} onNavigate={navigateTo} />;
        return <ProductDetail product={product} onBack={() => navigateTo(PageView.HOME)} onAddToCart={() => addToCart(product)} />;
      case PageView.DASHBOARD:
        return <Dashboard />;
      default:
        return <Home onProductClick={handleProductClick} onNavigate={navigateTo} />;
    }
  };

  return (
    <Layout 
      onNavigate={navigateTo} 
      currentPage={currentPage}
      onCartClick={() => setIsCartOpen(true)}
      onLoginClick={() => setIsAuthOpen(true)}
      onLogoutClick={handleLogout}
      cartItemCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
      user={user}
    >
      {renderPage()}
      <AIAssistant />
      
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={() => alert('Proceeding to Checkout Gateway...')}
      />

      <AuthModal 
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLogin={handleLogin}
      />
    </Layout>
  );
};

export default App;