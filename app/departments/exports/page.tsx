import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Exports Department | Opulent International",
  description:
    "Our Exports Department handles all aspects of international shipping, documentation, and logistics to ensure smooth delivery of textile products worldwide.",
  keywords: [
    "textile exports",
    "international shipping",
    "export documentation",
    "textile logistics",
    "global textile delivery",
    "export compliance",
    "customs clearance",
    "international trade",
  ],
}

export default function ExportsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Exports Department</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Ensuring seamless delivery of premium textile products to clients worldwide
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-right">
              <h2 className="text-3xl font-bold mb-6">Global Delivery Excellence</h2>
              <p className="text-gray-700 mb-4">
                Our Exports Department serves as the vital link between our sourcing operations and international
                clients, handling all aspects of shipping, documentation, and logistics to ensure smooth delivery of
                textile products worldwide. We are always ready to provide up-to-date production status and shipment
                details to our clients.
              </p>
              <p className="text-gray-700 mb-4">
                With extensive experience in international trade regulations and customs procedures, our team navigates
                the complexities of global shipping with expertise and precision. We coordinate with freight forwarders,
                shipping lines, and customs authorities to optimize routes, minimize costs, and ensure timely
                deliveries.
              </p>
              <p className="text-gray-700">
                Our commitment to transparency and communication means that clients always have visibility into their
                shipments, from production completion to final delivery. We handle all necessary documentation with
                meticulous attention to detail, ensuring compliance with international trade regulations and smooth
                customs clearance.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-left">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/ExportsDep.png?height=800&width=1200"
                  alt="Export Operations"
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
            <h2 className="text-3xl font-bold mb-12 text-center">Our Export Services</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation animation="slide-up" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Export Documentation</h3>
                <p className="text-gray-700">
                  We prepare and process all required export documents, including commercial invoices, packing lists,
                  certificates of origin, and shipping bills, ensuring accuracy and compliance with international
                  regulations.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Logistics Management</h3>
                <p className="text-gray-700">
                  We coordinate all aspects of international shipping, from booking cargo space to tracking shipments,
                  optimizing routes and carriers to ensure cost-effective and timely deliveries.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Customs Clearance</h3>
                <p className="text-gray-700">
                  Our team manages the customs clearance process, ensuring compliance with regulations in both origin
                  and destination countries to prevent delays and complications.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Shipment Tracking</h3>
                <p className="text-gray-700">
                  We provide real-time tracking information and regular updates on shipment status, giving clients
                  complete visibility from dispatch to delivery.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.5}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Regulatory Compliance</h3>
                <p className="text-gray-700">
                  We ensure compliance with international trade regulations, export controls, and country-specific
                  requirements to facilitate smooth cross-border transactions.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.6}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Insurance Coordination</h3>
                <p className="text-gray-700">
                  We arrange appropriate cargo insurance coverage to protect shipments against potential risks during
                  transit, providing peace of mind to our clients.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Export Markets */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Export Markets</h2>
            <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              We export premium textile products to over 30 countries across multiple continents, serving diverse
              markets with tailored solutions.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation animation="slide-up" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Asia</h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">Japan</li>
                  <li className="text-gray-700">South Korea</li>
                  <li className="text-gray-700">China</li>
                  <li className="text-gray-700">UAE</li>
                  <li className="text-gray-700">Saudi Arabia</li>
                  <li className="text-gray-700">Singapore</li>
                  <li className="text-gray-700">Malaysia</li>
                  <li className="text-gray-700">Indonesia</li>
                  <li className="text-gray-700">Thailand</li>
                  <li className="text-gray-700">Sri Lanka</li>
                  <li className="text-gray-700">Bangladesh</li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Europe</h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">Germany</li>
                  <li className="text-gray-700">France</li>
                  <li className="text-gray-700">Italy</li>
                  <li className="text-gray-700">United Kingdom</li>
                  <li className="text-gray-700">Spain</li>
                  <li className="text-gray-700">Portugal</li>
                  <li className="text-gray-700">Belgium</li>
                  <li className="text-gray-700">Netherlands</li>
                  <li className="text-gray-700">Turkey</li>
                  <li className="text-gray-700">Estonia</li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">North America</h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">United States</li>
                  <li className="text-gray-700">Canada</li>
                  <li className="text-gray-700">Mexico</li>
                  <li className="text-gray-700">Honduras</li>
                  <li className="text-gray-700">Guatemala</li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Australia & Oceania</h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">Australia</li>
                  <li className="text-gray-700">New Zealand</li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Export Process</h2>
            <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              We follow a structured and efficient process to ensure smooth export operations and timely deliveries.
            </p>
          </ScrollAnimation>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary -translate-x-1/2"></div>

            {/* Process Steps */}
            <div className="space-y-12 relative">
              <ScrollAnimation animation="fade" delay={0.1}>
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-4 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Order Confirmation</h3>
                    <p className="text-gray-700">
                      We confirm all order details, including product specifications, quantities, and delivery
                      requirements, ensuring clarity and alignment.
                    </p>
                  </div>
                  <div className="hidden md:block relative">
                    <div className="absolute top-1/2 left-0 w-4 h-4 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="pl-8">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <span className="text-primary font-bold">Step 1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade" delay={0.2}>
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="hidden md:block relative order-2 md:order-1">
                    <div className="absolute top-1/2 left-0 w-4 h-4 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="pl-8">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <span className="text-primary font-bold">Step 2</span>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Production Monitoring</h3>
                    <p className="text-gray-700">
                      We closely monitor the production process, providing regular updates to clients and ensuring
                      quality standards are maintained throughout.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade" delay={0.3}>
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-4 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Quality Inspection</h3>
                    <p className="text-gray-700">
                      Our quality control team conducts thorough pre-shipment inspections to ensure all products meet
                      quality standards and client specifications.
                    </p>
                  </div>
                  <div className="hidden md:block relative">
                    <div className="absolute top-1/2 left-0 w-4 h-4 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="pl-8">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <span className="text-primary font-bold">Step 3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade" delay={0.4}>
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="hidden md:block relative order-2 md:order-1">
                    <div className="absolute top-1/2 left-0 w-4 h-4 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="pl-8">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <span className="text-primary font-bold">Step 4</span>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Documentation Preparation</h3>
                    <p className="text-gray-700">
                      We prepare all necessary export documents, ensuring accuracy and compliance with international
                      trade regulations and destination country requirements.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade" delay={0.5}>
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-4 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Shipping Arrangement</h3>
                    <p className="text-gray-700">
                      We coordinate with freight forwarders and shipping lines to arrange optimal transportation,
                      considering cost, transit time, and reliability.
                    </p>
                  </div>
                  <div className="hidden md:block relative">
                    <div className="absolute top-1/2 left-0 w-4 h-4 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="pl-8">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <span className="text-primary font-bold">Step 5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade" delay={0.6}>
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="hidden md:block relative order-2 md:order-1">
                    <div className="absolute top-1/2 left-0 w-4 h-4 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="pl-8">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <span className="text-primary font-bold">Step 6</span>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Shipment Tracking</h3>
                    <p className="text-gray-700">
                      We provide real-time tracking information and regular updates on shipment status until final
                      delivery to the client's destination.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-6">Streamline Your Global Textile Exports</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Partner with our Exports Department to ensure smooth, efficient, and compliant delivery of your textile
              products to markets worldwide.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Our Export Team
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
