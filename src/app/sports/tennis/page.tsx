import React from "react";

export default function Tennis() {
  return (
    <div className="container mx-auto px-4 py-12 p-8">
      <h1 className="text-3xl font-bold mb-6">Курс по теннису</h1>
      <p className="mb-4">
        Теннис - это динамичный вид спорта, развивающий координацию, реакцию и
        стратегическое мышление.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Темы курса:</h2>
      <ul className="list-disc pl-5 mb-6">
        <li className="mb-1">Основные удары: форхенд, бэкхенд</li>
        <li className="mb-1">Подача и прием подачи</li>
        <li className="mb-1">Правила и счет в теннисе</li>
        <li className="mb-1">Тактика одиночной и парной игры</li>
        <li>Физическая подготовка теннисиста</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Для кого этот курс:</h2>
      <p>
        Подходит для начинающих и продолжающих. Возрастные группы: детская (7-14
        лет), взрослая (15+). Индивидуальный подход к каждому ученику.
      </p>
    </div>
  );
}
