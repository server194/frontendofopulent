import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accounts & Finance Department | Opulent International",
  description:
    "Our Accounts & Finance Department ensures transparent financial transactions, timely payments, and comprehensive financial reporting for our company and clients.",
  keywords: [
    "textile finance",
    "international payments",
    "financial reporting",
    "textile accounting",
    "trade finance",
    "export financing",
    "financial management",
    "textile business finance",
  ],
}

export default function AccountsFinancePage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Accounts & Finance Department</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Building value for our clients through transparent financial management
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-right">
              <h2 className="text-3xl font-bold mb-6">Financial Excellence</h2>
              <p className="text-gray-700 mb-4">
                Our Accounts & Finance Department serves as the financial backbone of Opulent International, ensuring
                transparent financial transactions, timely payments, and comprehensive financial reporting for both our
                company and our clients. We aim to serve the needs of our customers and build value through sound
                financial management.
              </p>
              <p className="text-gray-700 mb-4">
                With expertise in international trade finance, currency management, and financial risk mitigation, our
                team navigates the complexities of global textile transactions with precision and integrity. We maintain
                robust financial systems and controls to ensure accuracy, compliance, and security in all financial
                operations.
              </p>
              <p className="text-gray-700">
                Our commitment to financial transparency and ethical practices has earned us the trust of clients and
                partners worldwide. We provide clear, detailed financial documentation and reporting, enabling informed
                decision-making and fostering long-term business relationships built on trust and mutual benefit.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-left">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/accountsdep.png?height=800&width=1200"
                  alt="Accounts & Finance Operations"
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
            <h2 className="text-3xl font-bold mb-12 text-center">Our Financial Services</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation animation="slide-up" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">International Payments</h3>
                <p className="text-gray-700">
                  We manage secure and efficient international payment processes, handling various payment methods and
                  currencies to facilitate smooth transactions between buyers and suppliers.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Financial Documentation</h3>
                <p className="text-gray-700">
                  We prepare and process comprehensive financial documentation for international trade, including
                  invoices, payment receipts, and financial statements with meticulous attention to detail.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Currency Management</h3>
                <p className="text-gray-700">
                  We implement effective strategies to manage currency fluctuations and exchange rate risks, protecting
                  both our company and clients from adverse financial impacts.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Trade Finance Solutions</h3>
                <p className="text-gray-700">
                  We facilitate access to appropriate trade finance instruments, such as letters of credit and trade
                  credit insurance, to mitigate risks and enhance financial security.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.5}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Financial Reporting</h3>
                <p className="text-gray-700">
                  We provide clear, accurate financial reports to clients, offering transparency and valuable insights
                  into their transactions and business relationships with us.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.6}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Compliance Management</h3>
                <p className="text-gray-700">
                  We ensure compliance with financial regulations and reporting requirements across multiple
                  jurisdictions, maintaining the highest standards of financial integrity.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Financial Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Financial Approach</h2>
            <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              We adhere to core financial principles that guide our operations and ensure financial stability and
              integrity.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollAnimation animation="slide-right">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Our Financial Principles</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">
                      <span className="font-medium">Transparency:</span> We maintain clear, open financial
                      communications with all stakeholders.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">
                      <span className="font-medium">Integrity:</span> We uphold the highest ethical standards in all
                      financial dealings.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">
                      <span className="font-medium">Accuracy:</span> We ensure precision and correctness in all
                      financial transactions and reporting.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">
                      <span className="font-medium">Efficiency:</span> We optimize financial processes to maximize value
                      and minimize costs.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">
                      <span className="font-medium">Compliance:</span> We adhere to all applicable financial regulations
                      and reporting requirements.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">
                      <span className="font-medium">Risk Management:</span> We identify, assess, and mitigate financial
                      risks proactively.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-left">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Financial Security Measures</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">
                      <span className="font-medium">Secure Payment Systems:</span> We utilize advanced, secure payment
                      platforms for all transactions.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">
                      <span className="font-medium">Multi-level Verification:</span> We implement multiple verification
                      steps for all significant financial transactions.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">
                      <span className="font-medium">Data Encryption:</span> We protect financial data with advanced
                      encryption technologies.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">
                      <span className="font-medium">Regular Audits:</span> We conduct periodic internal and external
                      audits to ensure financial integrity.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">
                      <span className="font-medium">Segregation of Duties:</span> We maintain appropriate separation of
                      financial responsibilities.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700">
                      <span className="font-medium">Continuous Monitoring:</span> We implement ongoing surveillance of
                      financial activities to detect and prevent irregularities.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-8 text-center">Payment Methods We Support</h2>
            <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              We offer flexible payment options to accommodate the diverse needs of our global clientele.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ScrollAnimation animation="slide-up" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/letterofcredit.png?height=200&width=200"
                    alt="Letter of Credit"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">Letter of Credit</h3>
                <p className="text-sm text-gray-700">Secure documentary payment method for international trade</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/wiretransfer.png?height=200&width=200"
                    alt="Wire Transfer"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">Wire Transfer</h3>
                <p className="text-sm text-gray-700">Direct electronic funds transfer between bank accounts</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/documentarycollection.png?height=200&width=200"
                    alt="Documentary Collection"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">Documentary Collection</h3>
                <p className="text-sm text-gray-700">Bank-facilitated document exchange for payment</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image
                    src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/openaccount.png?height=200&width=200"
                    alt="Open Account"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">Open Account</h3>
                <p className="text-sm text-gray-700">Credit-based payment for established business relationships</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation animation="fade">
            <h2 className="text-3xl font-bold mb-6">Financial Clarity for Your Textile Business</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Partner with our Accounts & Finance Department for transparent, secure, and efficient financial management
              of your textile transactions.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Our Finance Team
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
