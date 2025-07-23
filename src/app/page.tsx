import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative">
      {/* Синяя нитка через весь сайт */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-indigo-700 h-full z-10 opacity-30"></div>
      
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
              <a href="#why-vitrina" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Почему витрина</a>
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
                Сертифицированный партнёр Яндекс Маркета
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Увеличьте продажи на{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Яндекс Маркете
                </span>{' '}
                в 3–5 раз с бренд‑витриной
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Создаём бренд-витрины с фиксированной комиссией 5% вместо 15-30%. 
                Прямая коммуникация с подписчиками и полная аналитика продаж.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Получить бесплатный аудит витрины
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Смотреть кейсы
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Получить бесплатный аудит витрины</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Ваше имя" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70" />
                  <input type="tel" placeholder="Телефон" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70" />
                  <input type="text" placeholder="Название магазина" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70" />
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
      <section className="py-16 bg-gradient-to-r from-white via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Витрин создано</div>
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
              <div className="text-gray-600">Комиссия витрины</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Тарифы на создание витрин</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите подходящий пакет для создания бренд-витрины на Яндекс Маркете
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Пакет "Витрина магазина" */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover-lift relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  -20%
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Витрина магазина</h3>
                <p className="text-gray-600 mb-4">Базовый пакет для запуска витрины</p>
                <div className="text-4xl font-bold text-green-600 mb-2">63 200 ₽</div>
                <div className="text-gray-500 line-through">79 000 ₽</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Баннеры: до 7 шт.
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Основные разделы: до 3 шт.
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Подразделы: от 4 до 28 шт.
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Подготовка ТЗ
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold text-green-600">Бонус:</span> Настройка витрины + загрузка мануала по всем SKU
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Заказать пакет
              </button>
            </div>

            {/* Пакет "Имиджевый бренд" */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-500 p-8 hover-lift relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  -30% ПОПУЛЯРНЫЙ
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Имиджевый бренд</h3>
                <p className="text-gray-600 mb-4">Полный пакет для создания бренд-витрины</p>
                <div className="text-4xl font-bold text-blue-600 mb-2">112 000 ₽</div>
                <div className="text-gray-500 line-through">160 000 ₽</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Баннеры: до 7 шт.
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Основные разделы: до 3 шт.
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Подразделы: от 4 до 26 шт.
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Техническое задание
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Настройка витрины
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Слайд-мануал: 1 шт.
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Логотип: 3 варианта
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Заказать пакет
              </button>
            </div>

            {/* По-штучные услуги */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover-lift">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Индивидуально</h3>
                <p className="text-gray-600 mb-4">По-штучные услуги</p>
                <div className="text-4xl font-bold text-purple-600 mb-2">от 2 500 ₽</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center justify-between">
                  <span>Иконки/миниатюры</span>
                  <span className="font-semibold">2 500 ₽</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Баннеры разных размеров</span>
                  <span className="font-semibold">5 000 ₽</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Мануалы фото/видео</span>
                  <span className="font-semibold">8 000 ₽</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Дополнительные разделы</span>
                  <span className="font-semibold">12 000 ₽</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Полная настройка</span>
                  <span className="font-semibold">17 000 ₽</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Рассчитать стоимость
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vitrina Section */}
      <section id="why-vitrina" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Что даёт бренд-витрина Яндекс Маркета?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Бренд-витрина — это ваш собственный магазин внутри Яндекс Маркета с уникальным дизайном, 
              фиксированной комиссией 5% и прямым доступом к подписчикам
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Экономия комиссий до 30%</h3>
              <p className="text-gray-600">Фиксированная комиссия 5% вместо стандартных 15-30% на маркетплейсах</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Прямая коммуникация с подписчиками</h3>
              <p className="text-gray-600">Push-уведомления и прямой доступ к подписчикам без посредников</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Повышение среднего чека на 20%</h3>
              <p className="text-gray-600">Благодаря персонализации товаров и умным рекомендациям</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Удобная аналитика в личном кабинете</h3>
              <p className="text-gray-600">Подробная аналитика продаж и поведения клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Реальные результаты наших клиентов</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Кейсы с бренд-витринами на Яндекс Маркете с детальным описанием работ и результатов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">Профессиональная техника</div>
                  <div className="text-blue-100">Бренд-витрина</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Рост продаж в 4.7 раза</h3>
                <p className="text-gray-600 mb-4">Создали бренд-витрину с 7 баннерами, 3 основными разделами и 26 подразделами. Настроили персонализацию товаров и умные рекомендации.</p>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Подписчики:</span>
                    <span className="font-semibold text-green-600">526 → 2,479</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Продажи с 5%:</span>
                    <span className="font-semibold text-blue-600">617,504 → 5,688,094 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Промокоды:</span>
                    <span className="font-semibold text-purple-600">0 → 31,553,654 ₽</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                  Читать кейс
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">Спортивные товары</div>
                  <div className="text-green-100">Бренд-витрина</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Конверсия в 3 раза</h3>
                <p className="text-gray-600 mb-4">Разработали витрину с 5 баннерами, 2 разделами и 18 подразделами. Внедрили систему рекомендаций и персонализации.</p>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Подписчики:</span>
                    <span className="font-semibold text-green-600">234 → 1,156</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Продажи с 5%:</span>
                    <span className="font-semibold text-blue-600">445,000 → 2,800,000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Средний чек:</span>
                    <span className="font-semibold text-orange-600">+45%</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                  Читать кейс
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">Автозапчасти</div>
                  <div className="text-purple-100">Бренд-витрина</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Рост трафика на 180%</h3>
                <p className="text-gray-600 mb-4">Создали витрину с 6 баннерами, 3 разделами и 28 подразделами. Настроили SEO-оптимизацию и контекстную рекламу.</p>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Подписчики:</span>
                    <span className="font-semibold text-green-600">189 → 892</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Продажи с 5%:</span>
                    <span className="font-semibold text-blue-600">1,200,000 → 4,100,000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ROI:</span>
                    <span className="font-semibold text-purple-600">240%</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                  Читать кейс
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Кто мы</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                iHelper — топ‑3 агентство, сертифицированный партнёр Яндекс Маркета с 5-летним опытом создания бренд-витрин. 
                Наша команда из 20+ сертифицированных специалистов помогла более чем 500 магазинам увеличить продажи и выйти на новый уровень.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Витрин создано</div>
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
                  <div className="text-gray-600">Комиссия витрины</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white overflow-hidden">
                <div className="animate-scroll">
                  <h3 className="text-2xl font-bold mb-4">Наши преимущества</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Сертифицированный партнёр Яндекс Маркета
                    </li>
                    <li className="flex items-center">
                      <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Полный цикл: от настройки продвижения до SEO
                    </li>
                    <li className="flex items-center">
                      <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Работаем по всем категориям: DIY, SPORT, CIHAK и др.
                    </li>
                    <li className="flex items-center">
                      <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Используем аналитику ниш и конкурентов
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Частые вопросы</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ответы на популярные вопросы о бренд-витринах Яндекс Маркета
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="text-lg font-semibold text-gray-800">Зачем нужна витрина, если уже есть магазин на Маркете?</span>
                  <svg className="w-6 h-6 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    Бренд-витрина позволяет снизить комиссию с 15-30% до фиксированных 5%, 
                    а также получить прямой доступ к подписчикам и расширенную аналитику. 
                    Это ваш собственный магазин внутри Яндекс Маркета с уникальным дизайном.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="text-lg font-semibold text-gray-800">Почему тариф 5% выгоднее?</span>
                  <svg className="w-6 h-6 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    На обычном маркетплейсе комиссия составляет 15-30% в зависимости от категории. 
                    С бренд-витриной вы платите фиксированные 5% независимо от товара. 
                    Это экономия до 25% с каждой продажи.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="text-lg font-semibold text-gray-800">Сколько времени занимает запуск?</span>
                  <svg className="w-6 h-6 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    Создание бренд-витрины занимает от 2 до 4 недель в зависимости от сложности проекта. 
                    Мы работаем поэтапно: анализ, дизайн, разработка, тестирование и запуск.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="text-lg font-semibold text-gray-800">Какие требования к материалам?</span>
                  <svg className="w-6 h-6 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    Нам нужны: логотип в векторном формате, фотографии товаров высокого качества, 
                    описания товаров, информация о бренде. Мы поможем подготовить все необходимые материалы.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="text-lg font-semibold text-gray-800">Что если потребуется доработка?</span>
                  <svg className="w-6 h-6 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    Мы предоставляем 30 дней бесплатной поддержки после запуска витрины. 
                    Любые доработки в рамках технического задания выполняются бесплатно.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Не нашли ответ?</h3>
                <p className="text-gray-600 mb-6">Напишите нам, и мы ответим на ваш вопрос</p>
                <form className="space-y-4">
                  <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Ваш вопрос"></textarea>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Email для ответа" />
                  <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                    Отправить вопрос
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Готовы создать витрину?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Получите бесплатный аудит вашей витрины и узнайте, как увеличить продажи
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Получить бесплатный аудит витрины</h3>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Название магазина</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Расскажите о вашем магазине и целях"></textarea>
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
              <p className="text-gray-400 mb-4">Сертифицированный партнёр Яндекс Маркета с 5-летним опытом создания бренд-витрин.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Услуги</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Создание витрин</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Дизайн витрин</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поддержка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аудит витрин</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-3 text-gray-400">
                <li>📧 info@ihelper-team.com</li>
                <li>🌐 ihelper-seller.com</li>
                <li>📞 +7 (999) 123-45-67</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Документы</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Публичная оферта</a></li>
                <li className="text-green-400 font-medium">Поддержка 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 iHelper. Все права защищены. Сертифицированный партнёр Яндекс Маркета.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
