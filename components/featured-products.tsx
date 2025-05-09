import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const products = [
  {
    name: "Cotton Fabrics",
    image: "/placeholder.svg?height=600&width=800",
    description: "Premium cotton fabrics with exceptional quality and finish.",
  },
  {
    name: "Silk Textiles",
    image: "/placeholder.svg?height=600&width=800",
    description: "Luxurious silk textiles with vibrant colors and patterns.",
  },
  {
    name: "Denim Collection",
    image: "/placeholder.svg?height=600&width=800",
    description: "Durable and stylish denim fabrics for various applications.",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Products</h2>
          <Link href="/products" className="flex items-center gap-2 text-sm font-medium">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <Link
                href={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-medium flex items-center gap-2"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
