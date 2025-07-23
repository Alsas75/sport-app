import React from "react";

export default function Football() {
  return (
    <div className="container mx-auto px-4 py-12 p-8">
      <h1 className="text-3xl font-bold mb-6">Курс по футболу</h1>
      <p className="mb-4">
        Футбол - это не просто игра, это искусство, требующее техники, тактики и
        командного духа.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Темы курса:</h2>
      <ul className="list-disc pl-5 mb-6">
        <li className="mb-1">Основы техники владения мячом</li>
        <li className="mb-1">Точность и сила удара</li>
        <li className="mb-1">Дриблинг и обводка соперника</li>
        <li className="mb-1">Тактические построения</li>
        <li>Командная игра и позиционирование</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Для кого этот курс:</h2>
      <p>
        Подходит для начинающих и любителей, которые хотят улучшить свои навыки
        игры в футбол. Рекомендуемый возраст: от 10 лет.
      </p>
    </div>
  );
}
