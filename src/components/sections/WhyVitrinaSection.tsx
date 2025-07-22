"use client";

import React from 'react';
import { GlowingCards } from '@/components/lightswind/glowing-cards';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/lightswind/card';
import { ScrollReveal } from '@/components/lightswind/scroll-reveal';
import { TrendingUp, Users, BarChart3 } from 'lucide-react';

const WhyVitrinaSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Экономия до 30%',
      description: 'Фиксированная комиссия 5% вместо 15-30%',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: Users,
      title: 'Прямая коммуникация',
      description: 'Push-уведомления и прямой доступ к подписчикам',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Рост среднего чека на 20%',
      description: 'Благодаря персонализации и рекомендациям',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: BarChart3,
      title: 'Удобная аналитика',
      description: 'Подробная аналитика в личном кабинете',
      color: 'from-blue-400 to-indigo-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Почему{' '}
              <span className="gradient-text">бренд-витрина</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Получите все преимущества собственной платформы с минимальными затратами
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index}>
              <GlowingCards>
                <Card className="text-center p-6 h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold mb-2">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </GlowingCards>
            </ScrollReveal>
          ))}
        </div>

        {/* Trust indicators */}
        <ScrollReveal>
          <div className="mt-16 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Доверяют ведущие бренды
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-lg font-semibold text-gray-700">Kärcher</div>
                <div className="text-lg font-semibold text-gray-700">FitnessStore</div>
                <div className="text-lg font-semibold text-gray-700">AvtoALL</div>
                <div className="text-lg font-semibold text-gray-700">ВелоСтрана</div>
                <div className="text-lg font-semibold text-gray-700">Кибермагия</div>
              </div>
              <p className="text-lg text-gray-600 mt-4">
                <strong>500+ магазинов</strong> уже работают с нами
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhyVitrinaSection; 