import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">i</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                iHelper
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#hero" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Главная</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Услуги</a>
              <a href="#cases" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Кейсы</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">О нас</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Контакты</a>
            </nav>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
              Бесплатный аудит
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Сертифицированный партнёр Яндекс.Маркета
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Увеличьте продажи на{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Яндекс.Маркете
                </span>{' '}
                в 3–5 раз
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Создаём бренд-витрины с 5-летним опытом и командой из 20+ специалистов. 
                Фиксированная комиссия 5% вместо 15-30%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Получить бесплатный аудит
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Смотреть кейсы
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Получить бесплатный аудит</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Ваше имя" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70" />
                  <input type="tel" placeholder="Телефон" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70" />
                  <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                    Отправить заявку
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">5</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">20+</div>
              <div className="text-gray-600">Специалистов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5%</div>
              <div className="text-gray-600">Комиссия</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vitrina Section */}
      <section id="why-vitrina" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Почему бренд-витрина?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Бренд-витрина — это ваш собственный магазин внутри Яндекс.Маркета с уникальным дизайном и полным контролем
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Экономия до 30%</h3>
              <p className="text-gray-600">Фиксированная комиссия 5% вместо стандартных 15-30% на маркетплейсах</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Прямая коммуникация</h3>
              <p className="text-gray-600">Push-уведомления и прямой доступ к подписчикам без посредников</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Рост среднего чека</h3>
              <p className="text-gray-600">Увеличение на 20% благодаря персонализации и рекомендациям</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Удобная аналитика</h3>
              <p className="text-gray-600">Подробная аналитика продаж и поведения клиентов в личном кабинете</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный цикл создания и продвижения бренд-витрин на Яндекс.Маркете
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Создание бренд-витрины</h3>
              <p className="text-gray-600 mb-6">Полный цикл разработки от дизайна до запуска с интеграцией API</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Уникальный дизайн и верстка
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Интеграция с API Яндекс.Маркета
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Тестирование и запуск
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Продвижение</h3>
              <p className="text-gray-600 mb-6">Комплексное продвижение вашей витрины для максимальных продаж</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  SEO оптимизация
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Контекстная реклама
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  SMM продвижение
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Поддержка</h3>
              <p className="text-gray-600 mb-6">Техническая поддержка и развитие витрины после запуска</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 техническая поддержка
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Регулярные обновления
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Аналитика и отчеты
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши кейсы</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Реальные результаты наших клиентов на Яндекс.Маркете
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">Kärcher</div>
                  <div className="text-blue-100">Профессиональная техника</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Рост продаж на 250%</h3>
                <p className="text-gray-600 mb-4">За 6 месяцев работы бренд-витрины</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="font-semibold text-green-700">+45%</div>
                    <div className="text-green-600">Средний чек</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="font-semibold text-blue-700">320%</div>
                    <div className="text-blue-600">ROI</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">FitnessStore</div>
                  <div className="text-green-100">Спортивные товары</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Конверсия в 3 раза</h3>
                <p className="text-gray-600 mb-4">Благодаря персонализации товаров</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="font-semibold text-green-700">+200%</div>
                    <div className="text-green-600">Конверсия</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="font-semibold text-blue-700">280%</div>
                    <div className="text-blue-600">ROI</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">AvtoALL</div>
                  <div className="text-purple-100">Автозапчасти</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Рост трафика на 180%</h3>
                <p className="text-gray-600 mb-4">За счет SEO и контекстной рекламы</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="font-semibold text-green-700">+180%</div>
                    <div className="text-green-600">Трафик</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="font-semibold text-blue-700">240%</div>
                    <div className="text-blue-600">ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">О компании</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Мы — сертифицированный партнёр Яндекс.Маркета с 5-летним опытом создания бренд-витрин. 
                Наша команда из 20+ специалистов помогла более чем 500 магазинам увеличить продажи и выйти на новый уровень.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
                  <div className="text-gray-600">Специалистов</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 mb-2">5%</div>
                  <div className="text-gray-600">Комиссия</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Наши преимущества</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Сертифицированный партнёр Яндекс.Маркета
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Гарантия результата
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    24/7 поддержка
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Бесплатный аудит витрины
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Готовы увеличить продажи?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Получите бесплатный аудит вашей витрины и узнайте, как увеличить продажи
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Получить бесплатный аудит</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Компания</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Отправить заявку
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">i</span>
                </div>
                <h3 className="text-xl font-bold">iHelper</h3>
              </div>
              <p className="text-gray-400 mb-4">Сертифицированный партнёр Яндекс.Маркета с 5-летним опытом создания бренд-витрин.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Услуги</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Создание витрин</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Продвижение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поддержка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аудит витрин</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-3 text-gray-400">
                <li>📧 info@ihelper.ru</li>
                <li>📞 +7 (999) 123-45-67</li>
                <li>🌐 ihelper.ru</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Режим работы</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Пн-Пт: 9:00 - 18:00</li>
                <li>Сб: 10:00 - 16:00</li>
                <li>Вс: Выходной</li>
                <li className="text-green-400 font-medium">Поддержка 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 iHelper. Все права защищены. Сертифицированный партнёр Яндекс.Маркета.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
