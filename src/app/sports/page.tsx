export default function Sports() {
    return (
      <div  className="flex-col gap-8 mx-auto px-4 py-12 p-8">
        <h1 className="text-3xl font-bold mb-8">Курсы по видам спорта</h1>
        
        {/* </div><div className="grid md:grid-cols-3 gap-6"> */}
         <div>
        
          <div className="border p-4 rounded-lg m-5">
            <h2 className="text-xl font-semibold mb-2">Футбол</h2>
            <p className="mb-4">Освойте основы самой популярной игры в мире и улучшите свои навыки.</p>
            <a 
              href="/sports/football" 
              className="text-blue-600 hover:underline"
            >
              Подробнее →
            </a>
          </div>
          
          <div className="border p-4 rounded-lg m-5">
            <h2 className="text-xl font-semibold mb-2">Теннис</h2>
            <p className="mb-4">Научитесь играть в теннис с нуля или повысьте свой уровень.</p>
            <a 
              href="/sports/tennis" 
              className="text-blue-600 hover:underline"
            >
              Подробнее →
            </a>
          </div>
          
          <div className="border p-4 rounded-lg m-5">
            <h2 className="text-xl font-semibold mb-2">Плавание</h2>
            <p className="mb-4">Освойте правильную технику плавания и разные стили.</p>
            <a 
              href="/sports/swimming" 
              className="text-blue-600 hover:underline"
            >
              Подробнее →
            </a>
          </div>
        </div>
      </div>
    )
  }