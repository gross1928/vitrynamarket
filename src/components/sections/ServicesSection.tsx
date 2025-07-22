"use client";

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/lightswind/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/lightswind/card';
import { Button } from '@/components/lightswind/button';
import { Badge } from '@/components/lightswind/badge';
import { ScrollReveal } from '@/components/lightswind/scroll-reveal';
import { Check, Star } from 'lucide-react';

const ServicesSection = () => {
  const packages = {
    brand: {
      name: 'Имиджевый бренд',
      description: 'Полный пакет для создания бренд-витрины',
      price: '112 000 ₽',
      discount: '30%',
      originalPrice: '160 000 ₽',
      features: [
        'Баннеры: до 7 шт.',
        'Основные разделы: до 3 шт.',
        'Подразделы: от 4 до 26 шт.',
        'Техническое задание',
        'Настройка витрины',
        'Слайд-мануал: 1 шт.',
        'Логотип: 3 варианта'
      ],
      popular: true
    },
    store: {
      name: 'Витрина магазина',
      description: 'Оптимальное решение для розничных сетей',
      price: '63 200 ₽',
      discount: '20%',
      originalPrice: '79 000 ₽',
      features: [
        'Баннеры: до 7 шт.',
        'Основные разделы: до 3 шт.',
        'Подразделы: от 4 до 28 шт.',
        'Подготовка ТЗ',
        'Настройка витрины',
        'Загрузка мануала по всем SKU'
      ],
      popular: false
    },
    custom: {
      name: 'Индивидуально',
      description: 'По-штучные услуги по вашим потребностям',
      price: 'от 2 500 ₽',
      discount: null,
      originalPrice: null,
      features: [
        'Иконки и миниатюры',
        'Баннеры разных размеров',
        'Мануалы фото/видео',
        'Техническая поддержка',
        'SEO-оптимизация',
        'A/B тестирование'
      ],
      popular: false
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Наши{' '}
              <span className="gradient-text">услуги</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите подходящий пакет или закажите услуги по-штучно
            </p>
          </div>
        </ScrollReveal>

        <Tabs defaultValue="brand" className="w-full max-w-6xl mx-auto">
          <ScrollReveal>
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="brand" className="text-lg py-3">
                Имиджевый бренд
              </TabsTrigger>
              <TabsTrigger value="store" className="text-lg py-3">
                Витрина магазина
              </TabsTrigger>
              <TabsTrigger value="custom" className="text-lg py-3">
                Индивидуально
              </TabsTrigger>
            </TabsList>
          </ScrollReveal>

          {Object.entries(packages).map(([key, pkg]) => (
            <TabsContent key={key} value={key}>
              <ScrollReveal>
                <Card className="p-8 shadow-2xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
                  <CardHeader className="text-center pb-6">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <CardTitle className="text-3xl font-bold">
                        {pkg.name}
                      </CardTitle>
                      {pkg.popular && (
                        <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white">
                          <Star className="w-4 h-4 mr-1" />
                          Популярный
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-lg text-gray-600">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Pricing */}
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-4xl font-bold gradient-text">
                          {pkg.price}
                        </span>
                        {pkg.discount && (
                          <Badge variant="destructive" className="text-sm">
                            -{pkg.discount}
                          </Badge>
                        )}
                      </div>
                      {pkg.originalPrice && (
                        <p className="text-gray-500 line-through">
                          {pkg.originalPrice}
                        </p>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg mb-4">Что входит в пакет:</h4>
                      {pkg.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-6">
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white py-3 text-lg"
                      onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Заказать пакет
                    </Button>
                  </CardFooter>
                </Card>
              </ScrollReveal>
            </TabsContent>
          ))}
        </Tabs>

        {/* Additional services table */}
        <ScrollReveal>
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-8">
              По-штучные услуги
            </h3>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-600 to-orange-500 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Услуга</th>
                      <th className="px-6 py-4 text-left">Размер</th>
                      <th className="px-6 py-4 text-right">Цена</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">Иконки и миниатюры</td>
                      <td className="px-6 py-4">Любой</td>
                      <td className="px-6 py-4 text-right font-semibold">2 500 ₽</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">Баннеры</td>
                      <td className="px-6 py-4">1920x400px</td>
                      <td className="px-6 py-4 text-right font-semibold">5 000 ₽</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">Мануалы фото/видео</td>
                      <td className="px-6 py-4">Комплект</td>
                      <td className="px-6 py-4 text-right font-semibold">17 000 ₽</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">SEO-оптимизация</td>
                      <td className="px-6 py-4">Полная</td>
                      <td className="px-6 py-4 text-right font-semibold">12 000 ₽</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection; 