export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 p-8">
      {/* hello */}
      <h1 className="text-3xl font-bold mb-6">
        Добро пожаловать на сайт спортивных курсов!
      </h1>
      <div className="p-1">
        <p className="p-2">
          Откройте для себя современную платформу онлайн-обучения спорту — от
          йоги и фитнеса до единоборств и силовых тренировок.
        </p>
        <p className="p-2">
          Участвуйте в интерактивных занятиях, получайте советы от
          профессиональных тренеров и прокачивайте свое тело и дух, не выходя из
          дома.
        </p>
        <p className="p-2">
          Занимайтесь в удобное время, отслеживайте прогресс и становитесь
          сильнее каждый день — вместе с нами!
        </p>
        <p className="p-2">
          Хочешь добавить раздел с преимуществами или кнопками действия типа
          Начать курс? Я подскажу!
        </p>
        <a
          href="/sports"
          className="text-amber-950 px-4 py-2 rounded hover:bg-blue-700 transition decoration-solid"
        >
          Выбрать курс
        </a>
      </div>
    </div>
  );
}
