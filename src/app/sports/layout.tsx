export default function SportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Доступные курсы:</h2>
        <div className="flex gap-4">
          <a
            href="/sports/football"
            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
          >
            Футбол
          </a>
          <a
            href="/sports/tennis"
            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
          >
            Теннис
          </a>
          <a
            href="/sports/swimming"
            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
          >
            Плавание
          </a>
        </div>
      </div> */}
      {children}
    </div>
  );
}
