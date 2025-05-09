import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Global Market Department | Opulent International",
  description:
    "Our Global Market Department handles international business relations, connecting textile buyers with premium manufacturers across Asia.",
  keywords: [
    "global textile market",
    "international textile trade",
    "textile export services",
    "Asian textile suppliers",
    "global textile sourcing",
    "international textile procurement",
    "textile trading agency",
    "global textile partnerships",
  ],
}

export default function GlobalMarketPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Global Market Department</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Connecting international buyers with premium textile manufacturers across Asia
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-right">
              <h2 className="text-3xl font-bold mb-6">International Business Excellence</h2>
              <p className="text-gray-700 mb-4">
                As international business has enormous potential for our yarn and fabric, we have established a
                dedicated department to handle global market operations. Our Global Market Department serves as the
                bridge between international buyers and premium textile manufacturers across Asia.
              </p>
              <p className="text-gray-700 mb-4">
                With a deep understanding of international trade regulations, cultural nuances, and market trends, our
                team excels at creating valuable connections that benefit both buyers and manufacturers. We maintain
                strong business relationships with customers in Korea, Malaysia, Indonesia, Hong Kong, Japan, China,
                Taiwan, Singapore, Sri Lanka, Thailand, Turkey, Germany, Honduras, Guatemala, Bangladesh, Italy,
                Portugal, Spain, Belgium, Estonia, and USA.
              </p>
              <p className="text-gray-700">
                Our global market specialists are fluent in multiple languages and have extensive experience in
                international business negotiations, ensuring smooth communication and successful transactions for our
                clients worldwide.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-left">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/internaionalbusinessexcellence.png?height=800&width=1200"
                  alt="Global Market Operations"
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
            <h2 className="text-3xl font-bold mb-12 text-center">Our Global Market Services</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation animation="slide-up" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Market Intelligence</h3>
                <p className="text-gray-700">
                  We provide up-to-date information on global textile market trends, pricing fluctuations, and emerging
                  opportunities to help our clients make informed decisions.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Supplier Matching</h3>
                <p className="text-gray-700">
                  Our extensive network allows us to connect international buyers with the most suitable manufacturers
                  based on specific requirements, quality standards, and budget constraints.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Trade Documentation</h3>
                <p className="text-gray-700">
                  We handle all necessary international trade documentation, ensuring compliance with regulations and
                  smooth customs clearance for exports to various countries.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Negotiation Support</h3>
                <p className="text-gray-700">
                  Our team provides expert negotiation support to secure favorable terms for both buyers and
                  manufacturers, creating win-win partnerships.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.5}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
                <p className="text-gray-700">
                  We implement rigorous quality control measures to ensure that all products meet international
                  standards and client specifications before shipment.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.6}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Logistics Management</h3>
                <p className="text-gray-700">
                  Our department coordinates all aspects of international shipping and logistics, ensuring timely
                  delivery of products to destinations worldwide.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Global Presence Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Global Presence</h2>
            <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              We have established strong business relationships with customers across major textile markets worldwide,
              providing seamless sourcing solutions regardless of geographical boundaries.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/ChatGPT%20Image%20Apr%2017%2C%202025%20at%2010_09_08%20PM.png?height=1000&width=2000"
                alt="Opulent International Global Presence Map"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="font-medium text-lg">
                  Our global network spans across Asia, Europe, North America, and Australia, ensuring we can meet the
                  diverse needs of our international clientele.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Global Market Team</h2>
            <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Our team of experienced professionals brings together expertise in international trade, textile industry
              knowledge, and multicultural communication skills.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="slide-up" delay={0.1}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?height=600&width=800" alt="Team Member" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Ahmad Bashir</h3>
                  <p className="text-primary mb-4">Global Market Director</p>
                  <p className="text-gray-600">
                    With over 15 years of experience in international textile trade, Ahmad leads our global market
                    operations with expertise and vision.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.2}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?height=600&width=800" alt="Team Member" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Li Wei</h3>
                  <p className="text-primary mb-4">Asian Markets Specialist</p>
                  <p className="text-gray-600">
                    Li specializes in East Asian markets, with deep connections in China, Japan, and South Korea's
                    textile industries.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.3}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?height=600&width=800" alt="Team Member" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                  <p className="text-primary mb-4">European Markets Specialist</p>
                  <p className="text-gray-600">
                    Sarah manages our European client relationships, with expertise in EU trade regulations and market
                    requirements.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-6">Ready to Expand Your Global Reach?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Connect with our Global Market Department to explore international textile sourcing opportunities and
              expand your business across borders.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Our Global Team
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
