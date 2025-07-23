"use client";

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/lightswind/accordion';
import ScrollReveal from '@/components/lightswind/scroll-reveal';
import { Card, CardContent } from '@/components/lightswind/card';
import { Button } from '@/components/lightswind/button';
import { HelpCircle, MessageCircle, Mail } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Что такое бренд-витрина на Яндекс.Маркете?',
      answer: 'Бренд-витрина — это отдельная страница вашего бренда на Яндекс.Маркете, где вы можете размещать товары с комиссией всего 5% вместо стандартных 15-20%. Это позволяет увеличить продажи и снизить затраты на комиссии.'
    },
    {
      question: 'Сколько стоит создание бренд-витрины?',
      answer: 'Стоимость зависит от выбранного пакета услуг. Имиджевый бренд стоит 50 000 ₽, витрина магазина — 100 000 ₽, а индивидуальные решения обсуждаются отдельно. Также доступны по-штучные услуги.'
    },
    {
      question: 'Сколько времени занимает создание витрины?',
      answer: 'Стандартный срок создания бренд-витрины составляет 2-3 недели. Это включает в себя настройку продвижения, SEO-оптимизацию, создание баннеров и настройку аналитики.'
    },
    {
      question: 'Какие категории товаров вы поддерживаете?',
      answer: 'Мы работаем со всеми категориями Яндекс.Маркета: DIY, SPORT, CIHAK и другими. Наша команда имеет опыт работы с различными нишами и может адаптировать стратегию под вашу специфику.'
    },
    {
      question: 'Помогаете ли вы с продвижением витрины?',
      answer: 'Да, мы предоставляем полный цикл услуг, включая настройку продвижения, создание баннеров, SEO-оптимизацию и аналитику. Наши специалисты помогут привлечь максимальное количество клиентов.'
    },
    {
      question: 'Можно ли перенести существующие товары?',
      answer: 'Да, мы можем перенести ваши существующие товары на бренд-витрину. Это поможет сохранить историю продаж и отзывы, при этом снизив комиссии с 15-20% до 5%.'
    },
    {
      question: 'Какая аналитика доступна?',
      answer: 'Мы предоставляем подробную аналитику по продажам, трафику, конверсии и другим ключевым метрикам. Также доступны push-уведомления для информирования о важных событиях.'
    },
    {
      question: 'Есть ли гарантия результата?',
      answer: 'Мы гарантируем качественное выполнение всех работ в рамках выбранного пакета услуг. Результаты зависят от многих факторов, но наши клиенты в среднем увеличивают продажи в 3-5 раз.'
    }
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Онлайн-чат',
      description: 'Получите мгновенный ответ на ваши вопросы',
      action: 'Начать чат',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Mail,
      title: 'Email поддержка',
      description: 'Отправьте нам письмо с подробным описанием',
      action: 'Написать письмо',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: HelpCircle,
      title: 'Консультация',
      description: 'Запишитесь на бесплатную консультацию',
      action: 'Записаться',
      color: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Часто задаваемые{' '}
              <span className="gradient-text">вопросы</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ответы на самые популярные вопросы о бренд-витринах
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-16">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="mb-4">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>

        {/* Contact methods */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              Нужна дополнительная помощь?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center p-6 shadow-lg border-0 bg-white hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardContent>
                    <h4 className="text-xl font-semibold mb-2">{method.title}</h4>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <Button 
                      className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white"
                      onClick={() => {
                        if (method.title.includes('чат')) {
                          alert('Чат будет открыт в новом окне');
                        } else if (method.title.includes('Email')) {
                          window.location.href = 'mailto:info@ihelper-team.com';
                        } else {
                          document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Additional info */}
        <ScrollReveal>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Не нашли ответ на свой вопрос?
                </h3>
                <p className="text-gray-600 mb-6">
                  Наша команда экспертов готова помочь вам с любыми вопросами о бренд-витринах и увеличении продаж на Яндекс.Маркете.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Бесплатная консультация</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Персональный подход</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Быстрый ответ</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Получите бесплатный аудит</h4>
                  <p className="mb-4 opacity-90">
                    Узнайте, сколько вы можете сэкономить с бренд-витриной
                  </p>
                  <Button 
                    variant="secondary"
                    className="w-full"
                    onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Оставить заявку
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection; 