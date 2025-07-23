import React from "react";

export default function Swimming() {
  return (
    <div className="container mx-auto px-4 py-12 p-8">
      <h1 className="text-3xl font-bold mb-6">Курс по плаванию</h1>
      <p className="mb-4">
        Плавание - это не только жизненно важный навык, но и отличный способ
        поддерживать физическую форму и здоровье.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Темы курса:</h2>
      <ul className="list-disc pl-5 mb-6">
        <li className="mb-1">Техника дыхания в воде</li>
        <li className="mb-1">Основные стили: кроль, брасс, баттерфляй</li>
        <li className="mb-1">Правильное положение тела в воде</li>
        <li className="mb-1">Старты и повороты</li>
        <li>Безопасность на воде</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Для кого этот курс:</h2>
      <p>
        Подходит для всех возрастов и уровней подготовки - от начинающих до тех,
        кто хочет усовершенствовать свою технику. Особое внимание уделяется
        детям и взрослым, которые только учатся плавать.
      </p>
    </div>
  );
}
