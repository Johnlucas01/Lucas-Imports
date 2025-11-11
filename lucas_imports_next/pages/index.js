import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'

const products = [
  {
    id: 1,
    name: 'Camisa Tailandesa - Azul Marinho',
    description: 'Algodão premium, corte confortável, importada da Tailândia.',
    price: '149,90',
    image: '/images/sample-shirt.svg'
  },
  {
    id: 2,
    name: 'Camisa Tailandesa - Estampa Tradicional',
    description: 'Estampa exclusiva, acabamento reforçado.',
    price: '169,90',
    image: '/images/sample-shirt.svg'
  },
  {
    id: 3,
    name: 'Camisa Tailandesa - Linho Leve',
    description: 'Perfeita para clima quente. Toque macio.',
    price: '189,90',
    image: '/images/sample-shirt.svg'
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Imports - Camisas Tailandesas</title>
        <meta name="description" content="Lucas Imports - camisas tailandesas de qualidade. Importadas diretamente da Tailândia." />
      </Head>

      <Header />

      <main>
        <section className="bg-navy text-white py-20 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Camisas Tailandesas Premium</h1>
            <p className="text-lg mb-8">Estilo exclusivo, importadas direto da Tailândia</p>
            <a href="#products" className="bg-white text-navy px-6 py-3 rounded-md font-medium">Ver Produtos</a>
          </div>
        </section>

        <section id="produtos" className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Nossos Destaques</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>

        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Por que escolher Lucas Imports?</h3>
            <p className="max-w-2xl mx-auto">Produtos importados com controle de qualidade, foco em conforto e peças com design autêntico.</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
