import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Premium Yarn Products | Opulent International",
  description:
    "Explore our comprehensive range of high-quality yarn products, including polyester filament yarn, textured yarn, spun yarn, viscose yarn, and blended yarns.",
  keywords: [
    "textile yarn",
    "polyester filament yarn",
    "textured yarn",
    "spun yarn",
    "viscose yarn",
    "nylon filament yarn",
    "acrylic yarn",
    "blended yarn",
    "yarn supplier",
    "yarn exporter",
  ],
}

export default function YarnPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <Link href="/products" className="inline-flex items-center text-primary font-medium mb-6 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Yarn Products</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              High-quality synthetic and fancy yarns sourced from leading manufacturers across Asia
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-right">
              <h2 className="text-3xl font-bold mb-6">Our Yarn Collection</h2>
              <p className="text-gray-700 mb-4">
                At Opulent International, we deal with a wide range of synthetic and fancy yarns sourced from leading
                manufacturers located in various far-east regions. Our extensive yarn portfolio caters to diverse
                textile applications, from fashion apparel to industrial textiles.
              </p>
              <p className="text-gray-700 mb-4">
                We maintain stringent quality control measures throughout our sourcing process, ensuring that all yarn
                products meet international standards and our clients' specific requirements. Our team's deep
                understanding of yarn characteristics and applications allows us to provide expert guidance in selecting
                the most suitable yarns for your textile projects.
              </p>
              <p className="text-gray-700">
                With our established supplier network and efficient logistics, we offer competitive pricing, reliable
                delivery, and consistent quality across our entire yarn range. Whether you need standard yarns for
                everyday production or specialty yarns for innovative textile developments, we have the solutions to
                meet your needs.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-left">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/Yarn.png?height=800&width=1200"
                  alt="Yarn Collection"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Yarn Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Yarn Product Range</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation animation="slide-up" delay={0.1}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/Polyester%20Filament%20Yarn%20(PFY).png?height=600&width=800"
                    alt="Polyester Filament Yarn"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Polyester Filament Yarn (PFY)</h3>
                  <p className="text-gray-700 mb-4">
                    Continuous filament yarns made from polyester polymers, known for their strength, durability, and
                    versatility. Available in various deniers, lusters, and cross-sections.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Fully Drawn Yarn (FDY)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Partially Oriented Yarn (POY)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Drawn Textured Yarn (DTY)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.2}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/Polyester%20Textured%20Yarn%20(PTY).png?height=600&width=800"
                    alt="Polyester Textured Yarn"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Polyester Textured Yarn (PTY)</h3>
                  <p className="text-gray-700 mb-4">
                    Polyester yarns that have undergone texturing processes to enhance bulk, stretch, comfort, and
                    appearance. Ideal for fabrics requiring elasticity and softness.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Air Textured Yarn</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">False Twist Textured Yarn</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Stretch Textured Yarn</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.3}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/Polyester%20Spun%20Yarn.png?height=600&width=800"
                    alt="Polyester Spun Yarn"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Polyester Spun Yarn</h3>
                  <p className="text-gray-700 mb-4">
                    Yarns made from short polyester fibers, offering a natural feel similar to cotton while maintaining
                    polyester's durability and easy-care properties.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Ring Spun Polyester</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Open End Polyester</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Compact Polyester Yarn</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.4}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/Viscose%20Yarn.png?height=600&width=800"
                    alt="Viscose Yarn"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Viscose Yarn</h3>
                  <p className="text-gray-700 mb-4">
                    Semi-synthetic yarns made from cellulose fibers, known for their silky appearance, breathability,
                    and excellent drape. Perfect for comfortable, luxurious fabrics.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Viscose Filament Yarn</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Viscose Spun Yarn</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Modal and Tencel Yarns</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.5}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/Nylon%20Yarn.png?height=600&width=800"
                    alt="Nylon Yarn"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Nylon Yarn</h3>
                  <p className="text-gray-700 mb-4">
                    Strong, elastic, and abrasion-resistant synthetic yarns ideal for applications requiring durability
                    and stretch. Available in various types and specifications.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Nylon 6 Filament Yarn</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Nylon 66 Filament Yarn</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Textured Nylon Yarn</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.6}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/Blended%20Yarn.png?height=600&width=800"
                    alt="Blended Yarn"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Blended Yarns</h3>
                  <p className="text-gray-700 mb-4">
                    Yarns combining two or more fiber types to achieve optimal performance characteristics, combining
                    the benefits of different fibers for enhanced fabric properties.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Polyester/Cotton Blends</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Polyester/Viscose Blends</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Specialty Fiber Blends</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-8 text-center">Yarn Applications</h2>
            <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Our yarn products are suitable for a wide range of textile applications across various industries.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollAnimation animation="slide-up" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Apparel Fabrics</h3>
                <p className="text-gray-700">
                  Yarns for fashion clothing, sportswear, intimate apparel, and everyday garments requiring comfort,
                  durability, and style.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Home Textiles</h3>
                <p className="text-gray-700">
                  Yarns for bedding, curtains, upholstery, carpets, and other household textiles requiring specific
                  functional and aesthetic properties.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Technical Textiles</h3>
                <p className="text-gray-700">
                  Specialized yarns for industrial applications, automotive textiles, medical textiles, and other
                  technical fabric requirements.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">04</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Specialty Products</h3>
                <p className="text-gray-700">
                  Yarns for niche applications such as outdoor textiles, protective clothing, and innovative textile
                  developments requiring specific performance characteristics.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-right">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/qualitydep.png?height=800&width=1200"
                  alt="Yarn Quality Testing"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-left">
              <h2 className="text-3xl font-bold mb-6">Our Quality Assurance</h2>
              <p className="text-gray-700 mb-4">
                We implement rigorous quality control measures throughout our yarn sourcing process to ensure that all
                products meet international standards and our clients' specific requirements. Our quality assurance
                program includes:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">Comprehensive supplier assessment and qualification process</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">Regular factory audits and production monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Thorough testing of physical properties such as tensile strength, elongation, and evenness
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">Color consistency and fastness verification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">Pre-shipment inspection and sampling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">Detailed documentation and certification</span>
                </li>
              </ul>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-6">Ready to Source Premium Yarn Products?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact our yarn specialists to discuss your specific requirements and discover how our premium yarn
              products can enhance your textile manufacturing.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Our Yarn Team
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
