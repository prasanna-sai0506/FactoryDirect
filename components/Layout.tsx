import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Cpu, Search, User, Factory, LogOut } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
  currentPage: string;
  onCartClick: () => void;
  onLoginClick: () => void;
  onLogoutClick: () => void;
  cartItemCount: number;
  user: { name: string } | null;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  onNavigate, 
  currentPage, 
  onCartClick, 
  onLoginClick,
  onLogoutClick,
  cartItemCount,
  user
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center cursor-pointer" onClick={() => onNavigate('HOME')}>
              <Cpu className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900 tracking-tight">FactoryDirect</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <div className="relative hidden lg:block">
                <input 
                  type="text" 
                  placeholder="Search factories..." 
                  className="pl-10 pr-4 py-1.5 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 transition-all"
                />
                <Search className="absolute left-3 top-2 h-4 w-4 text-gray-400" />
              </div>
              <button 
                onClick={() => onNavigate('HOME')}
                className={`${currentPage === 'HOME' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 font-medium transition-colors`}
              >
                Marketplace
              </button>
              <button 
                onClick={() => onNavigate('DASHBOARD')}
                className={`${currentPage === 'DASHBOARD' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 font-medium flex items-center gap-1 transition-colors`}
              >
                <Factory size={16} /> For Factories
              </button>
              
              <button 
                onClick={onCartClick}
                className="text-gray-600 hover:text-blue-600 relative transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full animate-in zoom-in">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {user ? (
                <div className="flex items-center gap-3 border-l pl-4 border-gray-200">
                  <span className="text-sm font-medium text-gray-700 hidden lg:block">Hi, {user.name}</span>
                  <button onClick={onLogoutClick} className="text-gray-400 hover:text-red-500 transition-colors" title="Logout">
                    <LogOut size={20} />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={onLoginClick}
                  className="flex items-center gap-1 text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                  <User className="h-5 w-5" />
                  <span>Login</span>
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
               <button 
                onClick={onCartClick}
                className="text-gray-600 hover:text-blue-600 relative"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none p-1"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top-5 duration-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="px-3 pb-2">
                 <input 
                  type="text" 
                  placeholder="Search factories..." 
                  className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button onClick={() => { onNavigate('HOME'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                Marketplace
              </button>
              <button onClick={() => { onNavigate('DASHBOARD'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                Factory Dashboard
              </button>
              
              {user ? (
                 <button onClick={() => { onLogoutClick(); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-md">
                  Logout ({user.name})
                </button>
              ) : (
                <button onClick={() => { onLoginClick(); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-3 text-base font-medium text-blue-600 hover:bg-blue-50 rounded-md">
                  Login / Signup
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Cpu className="h-6 w-6 text-blue-400" />
                <span className="ml-2 text-lg font-bold">FactoryDirect</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                India's 1st D2C Electronics Marketplace. Empowering consumers by connecting them directly to the source. No middlemen, no hidden fees.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Shop</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Laptops</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Smartphones</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For Manufacturers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Transparency Report</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Stay Updated</h3>
              <div className="flex flex-col gap-2">
                <input type="email" placeholder="Enter your email" className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 w-full text-sm" />
                <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium transition-colors">Join Newsletter</button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            © 2024 FactoryDirect India Pvt Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;