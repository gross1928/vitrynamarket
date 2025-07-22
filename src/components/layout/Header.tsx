"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/lightswind/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/lightswind/navigation-menu';
import { HamburgerMenuOverlay } from '@/components/lightswind/HamburgerMenuOverlay';

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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger onClick={() => scrollToSection('hero')}>
                    Главная
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger onClick={() => scrollToSection('services')}>
                    Услуги
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger onClick={() => scrollToSection('cases')}>
                    Кейсы
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger onClick={() => scrollToSection('about')}>
                    О нас
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger onClick={() => scrollToSection('faq')}>
                    FAQ
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('hero')}
              className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white"
            >
              Получить аудит
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <HamburgerMenuOverlay
              items={[
                { label: 'Главная', onClick: () => scrollToSection('hero') },
                { label: 'Услуги', onClick: () => scrollToSection('services') },
                { label: 'Кейсы', onClick: () => scrollToSection('cases') },
                { label: 'О нас', onClick: () => scrollToSection('about') },
                { label: 'FAQ', onClick: () => scrollToSection('faq') },
              ]}
              buttonSize="sm"
              buttonColor="#3b82f6"
              overlayBackground="linear-gradient(135deg, #3b82f6, #ff6d1b)"
              textColor="#ffffff"
              fontSize="lg"
              fontFamily="Inter, sans-serif"
              fontWeight="medium"
              menuAlignment="center"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 