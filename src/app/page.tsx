import React from 'react';

export default function Home() {
  console.log("[DEBUG] Home page rendering");
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">iHelper - Бренд-витрины Яндекс.Маркета</h1>
          <nav className="mt-4">
            <ul className="flex space-x-6">
              <li><a href="#hero" className="hover:text-blue-200">Главная</a></li>
              <li><a href="#services" className="hover:text-blue-200">Услуги</a></li>
              <li><a href="#cases" className="hover:text-blue-200">Кейсы</a></li>
              <li><a href="#about" className="hover:text-blue-200">О нас</a></li>
              <li><a href="#faq" className="hover:text-blue-200">FAQ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Увеличьте продажи на Яндекс.Маркете в 3–5 раз</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Сертифицированный партнёр Яндекс.Маркета с 5‑летним опытом и 20+ специалистами
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">
            Получить бесплатный аудит витрины
          </button>
        </div>
      </section>

      {/* Why Vitrina Section */}
      <section id="why-vitrina" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Почему бренд-витрина?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Экономия до 30%</h3>
              <p className="text-gray-600">Фиксированная комиссия 5% вместо 15-30%</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Прямая коммуникация</h3>
              <p className="text-gray-600">Push-уведомления и прямой доступ к подписчикам</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Рост среднего чека на 20%</h3>
              <p className="text-gray-600">Благодаря персонализации и рекомендациям</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Удобная аналитика</h3>
              <p className="text-gray-600">Подробная аналитика в личном кабинете</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Создание бренд-витрины</h3>
              <p className="text-gray-600 mb-4">Полный цикл разработки от дизайна до запуска</p>
              <ul className="space-y-2">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Дизайн и верстка</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Интеграция с API</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Тестирование</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Продвижение</h3>
              <p className="text-gray-600 mb-4">Комплексное продвижение вашей витрины</p>
              <ul className="space-y-2">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>SEO оптимизация</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Контекстная реклама</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>SMM продвижение</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Поддержка</h3>
              <p className="text-gray-600 mb-4">Техническая поддержка и развитие</p>
              <ul className="space-y-2">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>24/7 поддержка</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Обновления</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Аналитика</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Наши кейсы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Kärcher</h3>
                <p className="text-gray-600 mb-4">Рост продаж на 250% за 6 месяцев</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Средний чек: +45%</span>
                  <span>ROI: 320%</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-400 to-green-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">FitnessStore</h3>
                <p className="text-gray-600 mb-4">Увеличение конверсии в 3 раза</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Конверсия: +200%</span>
                  <span>ROI: 280%</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">AvtoALL</h3>
                <p className="text-gray-600 mb-4">Рост трафика на 180%</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Трафик: +180%</span>
                  <span>ROI: 240%</span>
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
              <h2 className="text-4xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы - сертифицированный партнёр Яндекс.Маркета с 5-летним опытом создания бренд-витрин. 
                Наша команда из 20+ специалистов помогла более чем 500 магазинам увеличить продажи.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                  <div className="text-gray-600">Специалистов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5%</div>
                  <div className="text-gray-600">Комиссия</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-xl">Фото команды</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Часто задаваемые вопросы</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Сколько стоит создание бренд-витрины?</h3>
              <p className="text-gray-600">Стоимость зависит от сложности проекта и начинается от 150,000 рублей. Мы предлагаем бесплатную консультацию для оценки вашего проекта.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Сколько времени занимает разработка?</h3>
              <p className="text-gray-600">Средний срок разработки - 2-4 недели. Время зависит от сложности проекта и количества товаров.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Какая комиссия с продаж?</h3>
              <p className="text-gray-600">Наша комиссия составляет всего 5% от продаж, что значительно меньше стандартных 15-30% на маркетплейсах.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Предоставляете ли вы поддержку после запуска?</h3>
              <p className="text-gray-600">Да, мы предоставляем техническую поддержку 24/7 и помогаем с развитием витрины после запуска.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">iHelper</h3>
              <p className="text-gray-300">Сертифицированный партнёр Яндекс.Маркета</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Создание витрин</li>
                <li>Продвижение</li>
                <li>Поддержка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li>📧 info@ihelper.ru</li>
                <li>📞 +7 (999) 123-45-67</li>
                <li>🌐 ihelper.ru</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Telegram</li>
                <li>WhatsApp</li>
                <li>VK</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 iHelper. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
