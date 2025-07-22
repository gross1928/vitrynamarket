"use client";

import React from 'react';
import { Button } from '@/components/lightswind/button';
import { Card, CardContent } from '@/components/lightswind/card';
import { ScrollReveal } from '@/components/lightswind/scroll-reveal';
import { Mail, Phone, Globe, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">iH</span>
              </div>
              <span className="text-2xl font-bold gradient-text">iHelper</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Сертифицированный партнёр Яндекс.Маркета с 5‑летним опытом. 
              Помогаем магазинам увеличить продажи через бренд-витрины.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Имиджевый бренд
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Витрина магазина
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Индивидуальные услуги
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:info@ihelper-team.com" 
                  className="hover:text-white transition-colors"
                >
                  info@ihelper-team.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4" />
                <a 
                  href="https://ihelper-seller.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  ihelper-seller.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2024 iHelper. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors">
                Политика конфиденциальности
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                Публичная оферта
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 