import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: "yarn",
    title: "Yarn",
    titleChinese: "纱线",
    description:
      "We are dealing with many synthetic & fancy yarns and have their sources which are located in various far-east regions. Our product range includes Polyester Filament Yarn, Polyester Textured Yarn, Polyester Spun Yarn, Viscose Filament Yarn, Viscose Spun Yarn, Nylon Filament Yarn, Acrylic Yarn, and various blended yarns.",
    image: "https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/Yarn.png?height=600&width=800",
  },
  {
    id: "fabric",
    title: "Fabric",
    titleChinese: "面料",
    description:
      "100% Cotton and Synthetic Blends like Cotton/Lycra or Spandex, Polyester/Cotton, Cotton/Viscose fabrics of different constructions and weights. We offer a wide range of fabrics including Denim, Twill, Poplin, Canvas, Oxford, Flannel, Corduroy, and specialty fabrics with various finishes and treatments.",
    image: "https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/Fabric.png?height=600&width=800",
  },
  {
    id: "garments",
    title: "Garments",
    titleChinese: "服装",
    description:
      "Our garments are available in Rinse, Silicon, Stone, Enzyme, Bleach, Distress, Sand Blast, Spray, Moustache and Tint washes. We provide a complete range of garments including casual wear, formal wear, sportswear, and specialized clothing for various industries, all manufactured to the highest quality standards.",
    image: "https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/Garments.png?height=600&width=800",
  },
]

export default function ProductsPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Discover our comprehensive range of textile products sourced from the best manufacturers across Asia
          </p>
        </div>
      </section>

      {/* Products List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-3xl font-bold">{product.title}</h2>
                    <span className="text-gray-500">{product.titleChinese}</span>
                  </div>
                  <p className="text-gray-700 mb-6">{product.description}</p>
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div
                  className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Custom Textile Solutions?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team can help you source specific textile products tailored to your exact requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </main>
  )
}
