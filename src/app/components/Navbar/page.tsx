import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-orange-400 text-amber-900 p-4">
      <div className="container mx-auto flex gap-6">
        <Link href="/" className="hover:underline">Главная</Link>
        <Link href="/about" className="hover:underline">О проекте</Link>
        <Link href="/sports" className="hover:underline">Курсы по спорту</Link>
      </div>
    </nav>
  )
}