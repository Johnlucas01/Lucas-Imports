import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Quem Somos</h1>
        <p>Lucas Imports é especialista em camisas importadas da Tailândia. Foco em qualidade e design.</p>
      </main>
      <Footer />
    </>
  )
}
