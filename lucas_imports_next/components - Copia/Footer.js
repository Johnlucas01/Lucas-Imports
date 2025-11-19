export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-6 py-6 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Lucas Imports. Todos os direitos reservados.</p>
        <p className="mt-2"><a href="#" className="hover:text-navy">Política de Privacidade</a> · <a href="#" className="hover:text-navy">Trocas & Devoluções</a></p>
      </div>
    </footer>
  )
}
