import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Premium Fabric Products | Opulent International",
  description:
    "Explore our comprehensive range of high-quality fabric products, including cotton, synthetic blends, denim, twill, poplin, and specialty fabrics for various applications.",
  keywords: [
    "textile fabric",
    "cotton fabric",
    "synthetic fabric",
    "blended fabric",
    "denim fabric",
    "twill fabric",
    "poplin fabric",
    "canvas fabric",
    "fabric supplier",
    "fabric exporter",
  ],
}

export default function FabricPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Fabric Products</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              High-quality cotton, synthetic, and blended fabrics sourced from leading manufacturers across Asia
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-right">
              <h2 className="text-3xl font-bold mb-6">Our Fabric Collection</h2>
              <p className="text-gray-700 mb-4">
                At Opulent International, we offer an extensive range of premium fabrics to meet diverse textile needs
                across industries. Our collection includes 100% cotton fabrics, synthetic blends like Cotton/Lycra or
                Spandex, Polyester/Cotton, Cotton/Viscose fabrics of different constructions and weights.
              </p>
              <p className="text-gray-700 mb-4">
                We source our fabrics from trusted manufacturers across Pakistan, India, Vietnam, Indonesia, and
                Uzbekistan, ensuring exceptional quality, consistency, and competitive pricing. Our rigorous quality
                control processes guarantee that all fabrics meet international standards and specific client
                requirements.
              </p>
              <p className="text-gray-700">
                Whether you need fabrics for fashion apparel, home textiles, or technical applications, our diverse
                collection offers the perfect solution for your specific needs. Our team's expertise in fabric
                properties and applications allows us to provide valuable guidance in selecting the most suitable
                materials for your projects.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-left">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/Fabric.png?height=800&width=1200"
                  alt="Fabric Collection"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Fabric Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Fabric Product Range</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation animation="slide-up" delay={0.1}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/CottonFabric.png?height=600&width=800"
                    alt="Cotton Fabrics"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Cotton Fabrics</h3>
                  <p className="text-gray-700 mb-4">
                    Premium 100% cotton fabrics known for their breathability, comfort, and versatility. Available in
                    various weights, weaves, and finishes to suit different applications.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Combed Cotton (Fine, smooth surface)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Carded Cotton (Soft, natural feel)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Organic Cotton (Eco-friendly)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Egyptian Cotton (Luxury grade)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.2}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/SyntheticBlends.png?height=600&width=800"
                    alt="Synthetic Blends"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Synthetic Blends</h3>
                  <p className="text-gray-700 mb-4">
                    Versatile fabric blends combining natural and synthetic fibers to achieve optimal performance
                    characteristics such as durability, stretch, and easy care properties.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Cotton/Polyester (Durability with comfort)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Cotton/Lycra (Natural stretch)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Cotton/Viscose (Drape with breathability)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Poly/Viscose (Easy-care with softness)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.3}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/DenimFabrics.png?height=600&width=800"
                    alt="Denim Fabrics"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Denim Fabrics</h3>
                  <p className="text-gray-700 mb-4">
                    Premium quality denim fabrics in various weights, stretches, and washes, suitable for jeans,
                    jackets, skirts, and other fashion applications.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Rigid Denim (Traditional, non-stretch)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Stretch Denim (With elastane/spandex)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Lightweight Denim (For shirts and dresses)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Colored Denim (Beyond traditional indigo)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.4}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/twillFabrics.png?height=600&width=800"
                    alt="Twill & Poplin"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Twill & Poplin</h3>
                  <p className="text-gray-700 mb-4">
                    Classic fabric constructions offering durability, versatility, and timeless appeal for various
                    garments and home textiles.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Cotton Twill (Diagonal weave, durable)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Cotton Poplin (Crisp, smooth surface)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Stretch Twill (With elastane for comfort)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Blended Poplin (Easy-care properties)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.5}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/SpecialtyFabrics.png?height=600&width=800"
                    alt="Specialty Fabrics"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Specialty Fabrics</h3>
                  <p className="text-gray-700 mb-4">
                    Unique fabrics with special properties, finishes, or constructions designed for specific
                    applications and performance requirements.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Water-Repellent Fabrics (Outdoor use)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">UV-Protective Fabrics (Sun protection)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Antimicrobial Fabrics (Healthcare applications)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Eco-Friendly Fabrics (Sustainable options)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.6}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/HomeTextile.png?height=600&width=800"
                    alt="Home Textile Fabrics"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Home Textile Fabrics</h3>
                  <p className="text-gray-700 mb-4">
                    Specialized fabrics designed for home furnishings, bedding, curtains, and other interior
                    applications, offering both aesthetic appeal and functional properties.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Upholstery Fabrics (Durable, stain-resistant)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Sheeting Fabrics (Soft, high thread count)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Curtain Fabrics (Decorative, light-filtering)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Kitchen & Bath Fabrics (Water-resistant)</span>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Fabric Applications</h2>
            <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Our fabric products are suitable for a wide range of applications across various industries, meeting
              diverse requirements for both domestic and international markets.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollAnimation animation="slide-up" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Fashion Apparel</h3>
                <p className="text-gray-700">
                  Fabrics for a wide range of clothing items including shirts, dresses, trousers, jackets, and
                  activewear, offering style, comfort, and durability.
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
                  Fabrics for bedding, curtains, upholstery, table linens, and other household textiles, combining
                  aesthetic appeal with practical functionality.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Industrial Textiles</h3>
                <p className="text-gray-700">
                  Specialized fabrics for industrial applications, including packaging, filtration, protective covers,
                  and other technical uses requiring specific performance characteristics.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">04</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Institutional Textiles</h3>
                <p className="text-gray-700">
                  Durable, easy-care fabrics for hospitality, healthcare, and educational settings, designed to
                  withstand frequent washing and heavy use while maintaining appearance.
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
              We export our premium fabric products to over 30 countries worldwide, meeting diverse market requirements
              and quality standards.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation animation="slide-right">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Key Export Regions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Europe:</span> Germany, France, Italy, UK, Spain, Portugal, Belgium
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Asia:</span> Japan, South Korea, China, UAE, Saudi Arabia,
                      Singapore, Malaysia
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">North America:</span> USA, Canada, Mexico, Honduras, Guatemala
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Australia & Oceania:</span> Australia, New Zealand
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-left">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Export Compliance</h3>
                <p className="text-gray-700 mb-4">
                  We ensure all our fabric exports meet international trade regulations and country-specific
                  requirements, including:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Compliance with international textile standards and certifications
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">Proper documentation including certificates of origin</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Testing for restricted substances according to destination market regulations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Adherence to labeling and packaging requirements for different markets
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
                  alt="Fabric Quality Testing"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-left">
              <h2 className="text-3xl font-bold mb-6">Our Quality Assurance</h2>
              <p className="text-gray-700 mb-4">
                We implement rigorous quality control measures throughout our fabric sourcing process to ensure that all
                products meet international standards and our clients' specific requirements. Our quality assurance
                program includes:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Comprehensive fabric testing for physical properties such as tensile strength, tear resistance, and
                    abrasion resistance
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Color fastness testing to washing, light, rubbing, and perspiration
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Dimensional stability testing to ensure minimal shrinkage after washing
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Testing for harmful substances to ensure compliance with international safety standards
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Visual inspection for fabric defects, color consistency, and finish quality
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Regular supplier audits and production monitoring to ensure consistent quality
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
            <h2 className="text-3xl font-bold mb-6">Ready to Source Premium Fabric Products?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact our fabric specialists to discuss your specific requirements and discover how our premium fabric
              products can enhance your textile projects.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Our Fabric Team
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
