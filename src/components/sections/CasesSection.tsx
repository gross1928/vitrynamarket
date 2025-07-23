"use client";

import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/lightswind/carousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/lightswind/card';
import { Button } from '@/components/lightswind/button';
import { Badge } from '@/components/lightswind/badge';
import ScrollReveal from '@/components/lightswind/scroll-reveal';
import CountUp from '@/components/lightswind/count-up';
import { TrendingUp, Users, DollarSign, ArrowRight } from 'lucide-react';

const CasesSection = () => {
  const cases = [
    {
      name: 'MULTIPLAYER',
      category: 'Электроника',
      image: '/api/placeholder/400/250',
      before: {
        subscribers: 526,
        sales: 617504,
        promoShare: 0
      },
      after: {
        subscribers: 2479,
        sales: 5688094,
        promoShare: 31553654
      },
      growth: {
        subscribers: 4.7,
        sales: 9.2,
        promoShare: 100
      }
    },
    {
      name: 'ICOMP',
      category: 'Компьютеры',
      image: '/api/placeholder/400/250',
      before: {
        subscribers: 342,
        sales: 445200,
        promoShare: 0
      },
      after: {
        subscribers: 1890,
        sales: 4120000,
        promoShare: 22800000
      },
      growth: {
        subscribers: 5.5,
        sales: 9.3,
        promoShare: 100
      }
    },
    {
      name: 'Ginzzu',
      category: 'Смартфоны',
      image: '/api/placeholder/400/250',
      before: {
        subscribers: 789,
        sales: 892300,
        promoShare: 0
      },
      after: {
        subscribers: 3456,
        sales: 7890000,
        promoShare: 45600000
      },
      growth: {
        subscribers: 4.4,
        sales: 8.8,
        promoShare: 100
      }
    },
    {
      name: 'Сантехкомплект',
      category: 'Сантехника',
      image: '/api/placeholder/400/250',
      before: {
        subscribers: 234,
        sales: 334500,
        promoShare: 0
      },
      after: {
        subscribers: 1234,
        sales: 3456000,
        promoShare: 18900000
      },
      growth: {
        subscribers: 5.3,
        sales: 10.3,
        promoShare: 100
      }
    }
  ];

  return (
    <section id="cases" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Реальные{' '}
              <span className="gradient-text">результаты</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Посмотрите, как наши клиенты увеличили продажи с помощью бренд-витрин
            </p>
          </div>
        </ScrollReveal>

        {/* Overall statistics */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">
                <CountUp value={500} duration={2} />+
              </div>
              <p className="text-gray-600">Довольных клиентов</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">
                <CountUp value={5} duration={2} />x
              </div>
              <p className="text-gray-600">Средний рост продаж</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">
                <CountUp value={30} duration={2} />%
              </div>
              <p className="text-gray-600">Экономия на комиссиях</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Cases carousel */}
        <ScrollReveal>
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {cases.map((caseItem, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg mb-4 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-700 mb-2">{caseItem.name}</div>
                          <Badge variant="secondary">{caseItem.category}</Badge>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{caseItem.name}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* Results comparison */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 mb-1">
                            <CountUp value={caseItem.after.subscribers} duration={2} />
                          </div>
                          <div className="text-sm text-gray-600">Подписчики</div>
                          <div className="text-xs text-green-500">
                            +{caseItem.growth.subscribers}x
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-1">
                            <CountUp value={caseItem.after.sales / 1000000} duration={2} decimals={1} />
                          </div>
                          <div className="text-sm text-gray-600">Продажи (млн ₽)</div>
                          <div className="text-xs text-blue-500">
                            +{caseItem.growth.sales}x
                          </div>
                        </div>
                      </div>

                      {/* Promo sales */}
                      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-orange-600 mb-1">
                            <CountUp value={caseItem.after.promoShare / 1000000} duration={2} decimals={1} />
                          </div>
                          <div className="text-sm text-gray-600">Продажи с 5% (млн ₽)</div>
                          <div className="text-xs text-orange-500">
                            {caseItem.growth.promoShare}% от общих продаж
                          </div>
                        </div>
                      </div>

                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white"
                        onClick={() => {
                          // Здесь можно открыть модальное окно с деталями кейса
                          alert(`Детальный кейс ${caseItem.name} будет открыт в модальном окне`);
                        }}
                      >
                        Читать кейс
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Хотите такие же результаты?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Получите бесплатный аудит вашей витрины и узнайте, сколько вы можете сэкономить
              </p>
              <Button 
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-3"
                onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Получить консультацию
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CasesSection; 