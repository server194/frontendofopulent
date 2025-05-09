import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quality Control Department | Opulent International",
  description:
    "Our Quality Control Department ensures all textile products meet international standards through rigorous inspection and testing processes.",
  keywords: [
    "textile quality control",
    "fabric quality assurance",
    "yarn quality testing",
    "textile inspection services",
    "quality management system",
    "textile quality standards",
    "pre-shipment inspection",
    "textile testing procedures",
  ],
}

export default function QualityControlPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Quality Control Department</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              "No compromise on quality" is our fundamental principle and driving force
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-right">
              <h2 className="text-3xl font-bold mb-6">Our Quality Commitment</h2>
              <p className="text-gray-700 mb-4">
                At Opulent International, quality is not just a department—it's a mindset that permeates our entire
                organization. Our Quality Control Department serves as the guardian of our reputation, ensuring that
                every product we source and deliver meets the highest international standards and our clients' specific
                requirements.
              </p>
              <p className="text-gray-700 mb-4">
                We implement a comprehensive quality management system that encompasses every stage of the textile
                sourcing process, from raw material selection to final product inspection. Our dedicated team of quality
                control specialists combines technical expertise with meticulous attention to detail to identify and
                address potential issues before they affect our clients.
              </p>
              <p className="text-gray-700">
                As an ISO-certified company, we maintain proper documentation processes and conduct regular internal and
                external audits to continuously improve our quality control procedures. This commitment to excellence
                has earned us the trust and confidence of clients worldwide.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-left">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/qualitycomitment.png?height=800&width=1200"
                  alt="Quality Control Process"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Quality Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Quality Control Process</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation animation="slide-up" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Supplier Assessment</h3>
                <p className="text-gray-700">
                  We conduct thorough evaluations of potential suppliers, assessing their production capabilities,
                  quality management systems, and compliance with international standards before establishing
                  partnerships.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Raw Material Testing</h3>
                <p className="text-gray-700">
                  Our specialists perform comprehensive testing of raw materials to verify their composition, quality,
                  and suitability for intended applications, ensuring a solid foundation for quality products.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold mb-4">In-Process Inspection</h3>
                <p className="text-gray-700">
                  We monitor production processes at critical stages to identify and address potential issues early,
                  ensuring consistent quality throughout manufacturing.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">04</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Laboratory Testing</h3>
                <p className="text-gray-700">
                  We conduct rigorous laboratory tests to evaluate physical properties, color fastness, dimensional
                  stability, and other critical parameters according to international testing standards.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.5}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">05</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Pre-Shipment Inspection</h3>
                <p className="text-gray-700">
                  Our thorough pre-shipment inspections verify that finished products meet all specifications and
                  quality standards before dispatch, preventing quality issues from reaching our clients.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.6}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">06</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Documentation & Reporting</h3>
                <p className="text-gray-700">
                  We maintain comprehensive quality records and provide detailed reports to clients, ensuring
                  transparency and traceability throughout the quality control process.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testing Capabilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Testing Capabilities</h2>
            <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              We employ advanced testing methodologies and equipment to evaluate various aspects of textile quality.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollAnimation animation="slide-right">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Physical Testing</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">Tensile strength and elongation testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">Tear resistance evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">Abrasion resistance assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">Pilling resistance testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">Dimensional stability analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">Fabric weight and thickness measurement</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-left">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Chemical Testing</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">Color fastness to washing, light, and rubbing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">pH value determination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">Fiber composition analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">Detection of restricted substances</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">Formaldehyde content testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">Water repellency and resistance testing</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Quality Certifications</h2>
            <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              We adhere to internationally recognized quality standards and maintain relevant certifications to ensure
              the highest level of quality assurance.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="slide-up" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-20 h-20 mx-auto mb-4">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/iso9001.png?height=200&width=200"
                    alt="ISO 9001 Certification"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">ISO 9001:2015</h3>
                <p className="text-gray-700">
                  Certified Quality Management System ensuring consistent processes and continuous improvement.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-20 h-20 mx-auto mb-4">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/oekotex.png?height=200&width=200"
                    alt="OEKO-TEX Certification"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">OEKO-TEX Standard 100</h3>
                <p className="text-gray-700">
                  Ensuring textiles are tested for harmful substances and are safe for human use.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-20 h-20 mx-auto mb-4">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/Global_Organic_Textile_Standard_logo.jpg?height=200&width=200"
                    alt="GOTS Certification"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">GOTS Certification</h3>
                <p className="text-gray-700">
                  Global Organic Textile Standard certification for organic textiles with environmental and social
                  criteria.
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
            <h2 className="text-3xl font-bold mb-6">Experience Our Quality Commitment</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Partner with Opulent International to access textile products that meet the highest quality standards and
              your specific requirements.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Our Quality Team
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
