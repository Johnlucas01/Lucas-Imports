import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Contato</h1>
        <p>Para pedidos e informações: <strong>contato@lucasimports.com.br</strong></p>
      </main>
      <Footer />
    </>
  )
}
