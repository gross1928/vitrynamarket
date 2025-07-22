"use client";

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">iH</span>
            </div>
            <span className="text-xl font-bold gradient-text">iHelper</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#hero" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Главная
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Услуги
              </a>
              <a href="#cases" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Кейсы
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                О нас
              </a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                FAQ
              </a>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('hero')}
              className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
            >
              Получить аудит
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 