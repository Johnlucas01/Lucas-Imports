export default function ProductCard({product}) {
  return (
    <div className="bg-white rounded-md shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-t-md" />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{product.name}</h3>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-navy">R$ {product.price}</span>
          <button className="btn-primary">Ver Detalhes</button>
        </div>
      </div>
    </div>
  )
}
