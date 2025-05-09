import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { DepartmentsSection } from "@/components/departments-section"

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-opulent-light to-white py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-right">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Traders & Sourcing Agency of <span className="text-primary">Textiles</span>
              </h1>
              <p className="text-lg text-gray-600 mb-4">纺织原料相关贸易代理</p>
              <p className="text-gray-700 mb-8">
                Opulent Group of Companies was established in 1992 with the aim to provide buying agency services to
                international customers for the procurement of textile products from Pakistan, India, Vietnam, Indonesia
                and Uzbekistan.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/products">Explore Products</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-left">
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/rawan-yasser-Xhe1jxy37VM-unsplash.jpg?height=800&width=1200"
                  alt="Textile Manufacturing"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-secondary opacity-50 rounded-tl-full"></div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Products</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We specialize in sourcing and trading high-quality textile products from various regions across Asia.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Yarn Product */}
            <ScrollAnimation animation="slide-up" delay={0.1}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-64">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/Yarn.png?height=600&width=800"
                    alt="Yarn Products"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">Yarn</h3>
                    <span className="text-sm text-gray-500">纱线</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    We are dealing with many synthetic & fancy yarns and have their sources which are located in various
                    far-east regions...
                  </p>
                  <Link
                    href="/products/yarn"
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollAnimation>

            {/* Fabric Product */}
            <ScrollAnimation animation="slide-up" delay={0.2}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-64">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/Fabric.png?height=600&width=800"
                    alt="Fabric Products"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">Fabric</h3>
                    <span className="text-sm text-gray-500">面料</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    100% Cotton and Synthetic Blends like Cotton/Lycra or Spandex, Polyester/Cotton, Cotton/Viscose
                    fabrics of different...
                  </p>
                  <Link
                    href="/products/fabric"
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollAnimation>

            {/* Garments Product */}
            <ScrollAnimation animation="slide-up" delay={0.3}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-64">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/Garments.png?height=600&width=800"
                    alt="Garment Products"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">Garments</h3>
                    <span className="text-sm text-gray-500">服装</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Our garments are available in Rinse, Silicon, Stone, Enzyme, Bleach, Distress, Sand Blast, Spray,
                    Moustache and Tint washes...
                  </p>
                  <Link
                    href="/products/garments"
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Quality Statement */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-6">Customer Satisfaction is our Achievement</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Providing the most excellent services through our best pre-shipment inspection and continual improvement
              of our Quality Management System for customer satisfaction.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Departments Section */}
      <DepartmentsSection />

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest trends, innovations, and expert perspectives in the textile industry
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="slide-up" delay={0.1}>
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/blog1.png?height=600&width=800"
                    alt="Sustainable Textile Practices"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-gray-500 text-sm mb-2">March 15, 2023</div>
                  <h3 className="text-xl font-bold mb-2">
                    Sustainable Textile Practices: The Future of Fabric Manufacturing
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Explore how sustainable practices are reshaping the textile industry, from organic cotton farming to
                    eco-friendly dyeing processes...
                  </p>
                  <Link href="/blog/sustainable-textile-practices" className="text-primary font-medium hover:underline">
                    Read More
                  </Link>
                </div>
              </article>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.2}>
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/blog2.png?height=600&width=800"
                    alt="Asian Textile Market Trends"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-gray-500 text-sm mb-2">February 28, 2023</div>
                  <h3 className="text-xl font-bold mb-2">
                    Asian Textile Market Trends: Opportunities and Challenges in 2023
                  </h3>
                  <p className="text-gray-600 mb-4">
                    An in-depth analysis of the current trends, growth opportunities, and challenges facing the textile
                    industry across major Asian manufacturing hubs...
                  </p>
                  <Link href="/blog/asian-textile-market-trends" className="text-primary font-medium hover:underline">
                    Read More
                  </Link>
                </div>
              </article>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.3}>
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/blog3.png?height=600&width=800"
                    alt="Technological Innovations"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-gray-500 text-sm mb-2">January 20, 2023</div>
                  <h3 className="text-xl font-bold mb-2">Technological Innovations Transforming Textile Production</h3>
                  <p className="text-gray-600 mb-4">
                    Discover how advanced technologies like AI, automation, and digital printing are revolutionizing
                    textile manufacturing processes...
                  </p>
                  <Link
                    href="/blog/technological-innovations-textile"
                    className="text-primary font-medium hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="fade" delay={0.4}>
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
              >
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-6">Get in Touch!</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Ready to discuss your textile sourcing needs? Our team is here to help you find the perfect solutions.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
