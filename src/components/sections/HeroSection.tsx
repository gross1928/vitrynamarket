"use client";

import React, { useState } from 'react';
import { AuroraBackground } from '@/components/lightswind/aurora-background';
import { GradientButton } from '@/components/lightswind/gradient-button';
import { ShinyText } from '@/components/lightswind/shiny-text';
import { ScrollReveal } from '@/components/lightswind/scroll-reveal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/lightswind/card';
import { Input } from '@/components/lightswind/input';
import { Button } from '@/components/lightswind/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/lightswind/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  email: z.string().email('Введите корректный email'),
  phone: z.string().min(10, 'Введите корректный номер телефона'),
  storeName: z.string().min(2, 'Название магазина должно содержать минимум 2 символа'),
});

type FormData = z.infer<typeof formSchema>;

const HeroSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      storeName: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Здесь будет логика отправки формы
    console.log('Form data:', data);
    setTimeout(() => {
      setIsSubmitting(false);
      form.reset();
      alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    }, 1000);
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      <AuroraBackground>
        <div className="container mx-auto px-4 py-20 pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <ScrollReveal>
                <ShinyText className="text-4xl md:text-6xl font-bold leading-tight">
                  Увеличьте продажи на{' '}
                  <span className="gradient-text">Яндекс.Маркете</span>{' '}
                  в 3–5 раз
                </ShinyText>
              </ScrollReveal>
              
              <ScrollReveal>
                <p className="text-xl text-gray-600 max-w-2xl">
                  Сертифицированный партнёр Яндекс.Маркета с 5‑летним опытом и 20+ специалистами
                </p>
              </ScrollReveal>
              
              <ScrollReveal>
                <div className="flex flex-col sm:flex-row gap-4">
                  <GradientButton 
                    size="xl" 
                    className="text-white text-lg px-8 py-4"
                    onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Получить бесплатный аудит витрины
                  </GradientButton>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="text-lg px-8 py-4"
                    onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Посмотреть кейсы
                  </Button>
                </div>
              </ScrollReveal>

              {/* Keywords in background */}
              <ScrollReveal>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="bg-white/50 px-3 py-1 rounded-full">5% комиссия</span>
                  <span className="bg-white/50 px-3 py-1 rounded-full">Рост подписчиков</span>
                  <span className="bg-white/50 px-3 py-1 rounded-full">Аналитика</span>
                  <span className="bg-white/50 px-3 py-1 rounded-full">Push-уведомления</span>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column - Form */}
            <ScrollReveal>
              <Card id="form" className="p-6 shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold gradient-text">
                    Получите бесплатный аудит
                  </CardTitle>
                  <p className="text-gray-600">
                    Оставьте заявку и получите персональное предложение
                  </p>
                </CardHeader>
                
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Имя</FormLabel>
                            <FormControl>
                              <Input placeholder="Ваше имя" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Телефон</FormLabel>
                            <FormControl>
                              <Input placeholder="+7 (999) 123-45-67" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="storeName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Название магазина</FormLabel>
                            <FormControl>
                              <Input placeholder="Название вашего магазина" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white py-3"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Отправляем...' : 'Получить бесплатный аудит'}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
};

export default HeroSection; 