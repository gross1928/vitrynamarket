"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/lightswind/card';
import { ScrollReveal } from '@/components/lightswind/scroll-reveal';
import { CountUp } from '@/components/lightswind/count-up';
import { Badge } from '@/components/lightswind/badge';
import { Users, Award, Clock, Target, CheckCircle, Star } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    {
      icon: Users,
      value: 20,
      label: 'Сертифицированных специалистов',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Clock,
      value: 5,
      label: 'Лет опыта работы',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: Target,
      value: 500,
      label: 'Довольных клиентов',
      color: 'from-orange-400 to-red-500'
    }
  ];

  const advantages = [
    {
      title: 'Полный цикл услуг',
      description: 'От настройки продвижения до SEO-оптимизации',
      icon: CheckCircle
    },
    {
      title: 'Работаем по всем категориям',
      description: 'DIY, SPORT, CIHAK и другие ниши',
      icon: CheckCircle
    },
    {
      title: 'Аналитика ниш и конкурентов',
      description: 'Глубокий анализ рынка для максимальной эффективности',
      icon: CheckCircle
    }
  ];

  const testimonials = [
    {
      name: 'Александр Петров',
      company: 'MULTIPLAYER',
      text: 'Благодаря iHelper мы увеличили продажи в 4.7 раза. Команда работает профессионально и всегда на связи.',
      rating: 5
    },
    {
      name: 'Мария Сидорова',
      company: 'FitnessStore',
      text: 'Отличный результат! Экономия на комиссиях составила 25%, а рост подписчиков - 300%. Рекомендуем!',
      rating: 5
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Кто{' '}
              <span className="gradient-text">мы</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              iHelper — топ‑3 агентство, сертифицированный партнёр Яндекс.Маркета
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-8 shadow-lg border-0 bg-gradient-to-br from-gray-50 to-blue-50">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    <CountUp value={stat.value} duration={2} />
                    {stat.label.includes('Лет') ? '+' : stat.label.includes('Клиентов') ? '+' : ''}
                  </div>
                  <CardTitle className="text-lg text-gray-600">
                    {stat.label}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* Advantages */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              Наши преимущества
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="p-6 shadow-lg border-0 bg-white hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mb-4">
                      <advantage.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {advantage.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Team section */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              Наша команда
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6 shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2">Маркетологи</CardTitle>
                <p className="text-gray-600">Сертифицированные специалисты Яндекс.Маркета</p>
              </Card>
              
              <Card className="text-center p-6 shadow-lg border-0 bg-gradient-to-br from-green-50 to-blue-50">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2">Дизайнеры</CardTitle>
                <p className="text-gray-600">Создают уникальные визуальные решения</p>
              </Card>
              
              <Card className="text-center p-6 shadow-lg border-0 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2">Аналитики</CardTitle>
                <p className="text-gray-600">Анализируют рынок и конкурентов</p>
              </Card>
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonials */}
        <ScrollReveal>
          <div>
            <h3 className="text-3xl font-bold text-center mb-12">
              Отзывы клиентов
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 shadow-lg border-0 bg-gradient-to-br from-gray-50 to-blue-50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <CardTitle className="text-lg font-semibold">
                          {testimonial.name}
                        </CardTitle>
                        <p className="text-gray-600">{testimonial.company}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Готовы увеличить продажи?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Присоединяйтесь к 500+ довольным клиентам
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Получить консультацию
                </button>
                <button 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Посмотреть кейсы
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection; 