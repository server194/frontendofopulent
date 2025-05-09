import Image from "next/image"
import { CheckCircle } from "lucide-react"

const services = [
  {
    title: "Textile Sourcing",
    description:
      "We identify and source the highest quality textile products from manufacturers across Asia, ensuring you get the best materials for your needs.",
    image: "https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/textilesourcingservice.png?height=600&width=800",
  },
  {
    title: "Quality Inspection",
    description:
      "Our rigorous quality control processes ensure that all products meet international standards and your specific requirements before shipment.",
    image: "https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/qualityincpesctionservice.png?height=600&width=800",
  },
  {
    title: "Logistics Management",
    description:
      "We handle all aspects of shipping and logistics, ensuring your orders are delivered on time and in perfect condition.",
    image: "https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/logisticsservice.png?height=600&width=800",
  },
  {
    title: "Market Intelligence",
    description:
      "Stay ahead with our insights on market trends, pricing fluctuations, and emerging opportunities in the textile industry.",
    image: "https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/marketintelligenceservice.png?height=600&width=800",
  },
]

export default function ServicesPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Comprehensive textile sourcing and trading services to meet your business needs
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Opulent Group of Companies provides end-to-end textile sourcing and trading services, connecting
              international buyers with the best manufacturers across Asia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Quality Commitment</h2>
              <p className="text-gray-700 mb-6">
                "No compromise on quality" is the basic and main agenda of our quality control department. We ensure
                that every product we source meets the highest international standards and your specific requirements.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">Rigorous pre-shipment inspection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">Comprehensive quality management system</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">ISO certified processes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">Regular audits and quality checks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">Detailed documentation and reporting</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/qualitydep.png?height=800&width=1200"
                alt="Quality Control Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-xl text-gray-700 italic mb-6">
              "Opulent Group has been our trusted textile sourcing partner for over 5 years. Their commitment to
              quality, timely deliveries, and excellent customer service has made them an invaluable extension of our
              supply chain."
            </p>
            <div>
              <p className="font-bold">John Smith</p>
              <p className="text-gray-600">Procurement Director, Global Apparel Inc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help with your textile sourcing needs.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  )
}
