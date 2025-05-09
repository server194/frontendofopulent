import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Premium Garment Products | Opulent International",
  description:
    "Explore our comprehensive range of high-quality garment products, including casual wear, formal wear, sportswear, and specialized clothing manufactured to the highest quality standards.",
  keywords: [
    "textile garments",
    "ready-made garments",
    "casual wear",
    "formal wear",
    "sportswear",
    "denim garments",
    "cotton garments",
    "garment manufacturer",
    "garment exporter",
    "custom garments",
  ],
}

export default function GarmentsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Garment Products</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              High-quality ready-made garments manufactured to international standards for global export markets
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-right">
              <h2 className="text-3xl font-bold mb-6">Our Garment Collection</h2>
              <p className="text-gray-700 mb-4">
                At Opulent International, we offer a diverse range of premium ready-made garments designed to meet the
                needs of international markets. Our garments are available in various washes including Rinse, Silicon,
                Stone, Enzyme, Bleach, Distress, Sand Blast, Spray, Moustache, and Tint washes.
              </p>
              <p className="text-gray-700 mb-4">
                We work with trusted manufacturers across Pakistan, India, Vietnam, Indonesia, and Uzbekistan to produce
                garments that combine quality craftsmanship, innovative design, and competitive pricing. Our
                comprehensive quality control processes ensure that all garments meet international standards and
                specific client requirements.
              </p>
              <p className="text-gray-700">
                From casual wear to formal attire, sportswear to specialized clothing, our extensive collection offers
                solutions for diverse market segments and consumer preferences. Our team's expertise in garment
                production and global fashion trends allows us to provide valuable guidance in selecting the most
                suitable products for your specific market needs.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-left">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/Garments.png?height=800&width=1200"
                  alt="Garment Collection"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Garment Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Garment Product Range</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation animation="slide-up" delay={0.1}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/CasualWearGarments.png?height=600&width=800"
                    alt="Casual Wear"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Casual Wear</h3>
                  <p className="text-gray-700 mb-4">
                    Comfortable, stylish everyday garments designed for leisure and informal settings, combining
                    practicality with contemporary fashion trends.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">T-shirts & Polo Shirts (Various styles and fits)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Jeans & Casual Pants (Multiple washes and cuts)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Casual Shirts (Button-down and pullover styles)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Casual Jackets & Hoodies (Seasonal options)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.2}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/FormalWearGarment.png?height=600&width=800"
                    alt="Formal Wear"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Formal Wear</h3>
                  <p className="text-gray-700 mb-4">
                    Elegant, professional garments designed for business, official, and special occasions, featuring
                    refined tailoring and premium fabrics.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Business Shirts (Classic and slim fits)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Formal Trousers (Various styles and materials)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Blazers & Suits (Contemporary and traditional cuts)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Formal Dresses & Skirts (Professional attire)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.3}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/Denimgarments.png?height=600&width=800"
                    alt="Denim Garments"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Denim Garments</h3>
                  <p className="text-gray-700 mb-4">
                    Versatile denim clothing items featuring various washes, treatments, and styles for contemporary
                    casual and fashion-forward looks.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Jeans (Multiple fits, washes, and finishes)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Denim Jackets (Classic and fashion styles)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Denim Shirts (Light to heavy weight options)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Denim Skirts & Dresses (Fashion-forward designs)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.4}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/SportsWear.png?height=600&width=800"
                    alt="Sportswear"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Sportswear</h3>
                  <p className="text-gray-700 mb-4">
                    Performance-oriented garments designed for athletic activities, featuring technical fabrics and
                    functional designs for comfort and mobility.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Athletic T-shirts & Tops (Moisture-wicking)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Sports Pants & Shorts (Flexible, lightweight)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Track Suits (Coordinated sets for teams)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Performance Jackets (Weather-resistant options)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.5}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/WorkwearGarments.png?height=600&width=800"
                    alt="Workwear & Uniforms"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Workwear & Uniforms</h3>
                  <p className="text-gray-700 mb-4">
                    Durable, functional garments designed for various professional environments, combining practicality
                    with corporate identity requirements.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Corporate Uniforms (Customizable designs)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Industrial Workwear (Durable, safety-compliant)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Hospitality Uniforms (Professional appearance)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Healthcare Garments (Functional, hygienic)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.6}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/SpecialityGarments.png?height=600&width=800"
                    alt="Specialty Garments"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Specialty Garments</h3>
                  <p className="text-gray-700 mb-4">
                    Specialized clothing items designed for specific purposes, seasons, or market segments, featuring
                    unique designs and functional properties.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Outerwear (Weather-resistant jackets and coats)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Maternity Wear (Comfortable, stylish options)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Plus Size Collections (Inclusive sizing ranges)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Sustainable Garments (Eco-friendly materials)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Manufacturing Process</h2>
            <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              We work with carefully selected manufacturing partners who follow rigorous production processes to ensure
              consistent quality and timely delivery.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollAnimation animation="slide-up" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Design & Development</h3>
                <p className="text-gray-700">
                  Collaborative design process incorporating market trends, client specifications, and technical
                  requirements to create garments that meet both aesthetic and functional needs.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Material Sourcing</h3>
                <p className="text-gray-700">
                  Careful selection of fabrics, trims, and accessories from reliable suppliers, ensuring quality,
                  consistency, and compliance with specifications and sustainability requirements.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Production</h3>
                <p className="text-gray-700">
                  Efficient manufacturing processes including cutting, sewing, washing, finishing, and packaging,
                  carried out by skilled workers using modern equipment and techniques.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">04</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Control</h3>
                <p className="text-gray-700">
                  Comprehensive inspection at multiple stages of production, including material inspection, in-line
                  quality checks, and final inspection before shipment to ensure all garments meet quality standards.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Export Markets */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Export Markets</h2>
            <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              We export our premium garment products to markets worldwide, adapting to diverse regional preferences,
              sizing standards, and regulatory requirements.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation animation="slide-right">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Market-Specific Adaptations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">European Market:</span> Focus on sustainable materials, refined
                      styling, and strict compliance with REACH regulations
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">North American Market:</span> Emphasis on inclusive sizing, casual
                      comfort, and compliance with CPSIA standards
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Middle Eastern Market:</span> Adaptation to regional preferences for
                      modest fashion and premium fabrics
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Asian Market:</span> Tailored sizing, trending styles, and attention
                      to regional fashion preferences
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-left">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Export Capabilities</h3>
                <p className="text-gray-700 mb-4">
                  Our comprehensive export infrastructure ensures smooth international trade operations:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Efficient order processing and production planning for timely delivery
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Complete export documentation including certificates of origin and shipping documents
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Compliance with international trade regulations and country-specific requirements
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Flexible shipping options including FOB, CIF, and other international commercial terms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Market-specific packaging and labeling according to destination requirements
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-right">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/qualitydep.png?height=800&width=1200"
                  alt="Garment Quality Testing"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-left">
              <h2 className="text-3xl font-bold mb-6">Our Quality Assurance</h2>
              <p className="text-gray-700 mb-4">
                We implement rigorous quality control measures throughout our garment production process to ensure that
                all products meet international standards and our clients' specific requirements. Our quality assurance
                program includes:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Fabric and material inspection before production to verify quality and specifications
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">
                    In-line quality checks during cutting, sewing, and assembly processes
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Measurement verification to ensure consistent sizing across production batches
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Wash testing to verify color fastness, dimensional stability, and appearance after washing
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Final inspection of finished garments for construction quality, appearance, and packaging
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Laboratory testing for compliance with safety standards and performance requirements
                  </span>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Source Premium Garment Products?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact our garment specialists to discuss your specific requirements and discover how our premium garment
              products can enhance your retail or distribution business.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Our Garment Team
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
