import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-navy">Lucas Imports</div>
        <nav className="space-x-6">
          <Link href="/"><a className="hover:text-navy">Início</a></Link>
          <Link href="#products"><a className="hover:text-navy">Produtos</a></Link>
          <Link href="/about"><a className="hover:text-navy">Quem Somos</a></Link>
          <Link href="/contact"><a className="hover:text-navy">Contato</a></Link>
        </nav>
      </div>
    </header>
  )
}
