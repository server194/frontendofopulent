import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Domestic Market Department | Opulent International",
  description:
    "Our Domestic Market Department serves local businesses with high-quality textile products, leveraging our extensive network within Pakistan.",
  keywords: [
    "Pakistan textile market",
    "domestic textile suppliers",
    "local textile sourcing",
    "Pakistan fabric market",
    "textile industry Pakistan",
    "domestic yarn suppliers",
    "Pakistan garment industry",
    "local textile procurement",
  ],
}

export default function DomesticMarketPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <Link
              href="/departments"
              className="inline-flex items-center text-primary font-medium mb-6 hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Departments
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Domestic Market Department</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Serving Pakistan's growing textile industry with premium products and reliable service
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-right">
              <h2 className="text-3xl font-bold mb-6">Powering Pakistan's Textile Industry</h2>
              <p className="text-gray-700 mb-4">
                Our Domestic Market Department focuses on serving local businesses with high-quality textile products,
                leveraging our extensive network of manufacturers and suppliers within Pakistan. With the continuously
                increasing woven industry and export sector in Pakistan, we recognize the great potential and importance
                of the domestic market.
              </p>
              <p className="text-gray-700 mb-4">
                We provide comprehensive sourcing solutions to textile mills, garment manufacturers, fashion brands, and
                other businesses across Pakistan, helping them access premium materials that meet international quality
                standards while understanding local market dynamics and requirements.
              </p>
              <p className="text-gray-700">
                Our team's deep knowledge of the Pakistani textile ecosystem, combined with our strong supplier
                relationships, enables us to offer competitive pricing, reliable delivery, and exceptional service to
                our domestic clients.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-left">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/powerinpakistanstextileindustry.png?height=800&width=1200"
                  alt="Domestic Market Operations"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Domestic Market Services</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation animation="slide-up" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Local Sourcing</h3>
                <p className="text-gray-700">
                  We connect domestic businesses with reliable local suppliers of yarn, fabric, and other textile
                  materials, ensuring quality and consistency.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Market Intelligence</h3>
                <p className="text-gray-700">
                  We provide valuable insights on local market trends, pricing dynamics, and emerging opportunities in
                  Pakistan's textile industry.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Supply Chain Management</h3>
                <p className="text-gray-700">
                  Our team manages the entire supply chain process, from sourcing to delivery, ensuring timely
                  fulfillment of orders for domestic clients.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
                <p className="text-gray-700">
                  We implement strict quality control measures to ensure all products meet both international standards
                  and specific client requirements.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.5}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Logistics Support</h3>
                <p className="text-gray-700">
                  We provide comprehensive logistics solutions for domestic transportation, ensuring safe and timely
                  delivery of products across Pakistan.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.6}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Technical Consultation</h3>
                <p className="text-gray-700">
                  Our experts offer technical advice on textile materials, helping clients select the most suitable
                  products for their specific applications.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Market Coverage */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Domestic Market Coverage</h2>
            <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              We serve clients across all major textile hubs in Pakistan, providing comprehensive coverage of the
              domestic market.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation animation="slide-right">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Key Regions We Serve</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Lahore</span> - Punjab's textile manufacturing hub with numerous
                      garment factories and textile mills
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Faisalabad</span> - Known as the "Manchester of Pakistan" for its
                      extensive textile industry
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Karachi</span> - Major port city and commercial center with
                      significant textile manufacturing presence
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Sialkot</span> - Renowned for specialized textile products and
                      sportswear manufacturing
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Multan</span> - Important center for cotton production and textile
                      processing
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <span className="font-medium">Peshawar</span> - Gateway to Central Asian markets with growing
                      textile sector
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-left">
              <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/kyregions.png?height=800&width=1200"
                  alt="Pakistan Textile Industry Map"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-8 text-center">Industry Sectors We Serve</h2>
            <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Our domestic market operations cater to various sectors within Pakistan's textile industry.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollAnimation animation="slide-up" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Spinning Mills</h3>
                <p className="text-gray-700">
                  Supplying quality raw materials and technical support to spinning mills across Pakistan.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Weaving Industry</h3>
                <p className="text-gray-700">
                  Providing high-quality yarns and technical expertise to weaving enterprises of all sizes.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Garment Manufacturers</h3>
                <p className="text-gray-700">
                  Supplying premium fabrics and materials to garment manufacturers producing for both local and export
                  markets.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">04</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Fashion Brands</h3>
                <p className="text-gray-700">
                  Partnering with Pakistani fashion brands to source innovative and high-quality textile materials.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-6">Elevate Your Textile Business</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Partner with our Domestic Market Department to access premium textile products and comprehensive sourcing
              solutions for your business in Pakistan.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Our Domestic Team
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
