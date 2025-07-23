export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Спортивные курсы</h3>
              <p className="text-gray-300">Платформа для онлайн-обучения различным видам спорта</p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Навигация</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-300 hover:text-white transition">Главная</a></li>
                  <li><a href="/about" className="text-gray-300 hover:text-white transition">О проекте</a></li>
                  <li><a href="/sports" className="text-gray-300 hover:text-white transition">Курсы</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Контакты</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>Email: info@sport-courses.de</li>
                  <li>Телефон: +49 (123) 456-78-90</li>
                  <li>Адрес: г. Котбус, ул. Тельмана, 1</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Спортивные курсы. Все права защищены.</p>
          </div>
        </div>
      </footer>
    )
  }