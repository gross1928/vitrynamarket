export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-blue-600 mb-6">
            iHelper
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            Сертифицированный партнёр Яндекс.Маркета
          </p>
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Увеличьте продажи на Яндекс.Маркете в 3–5 раз
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              С бренд‑витриной от iHelper с комиссией всего 5%
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Получить бесплатный аудит
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
