import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-700 max-w-3xl">We believe that customer satisfaction is our achievement</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Opulent Group of Companies</h2>
              <p className="text-gray-700 mb-4">
                Opulent Group of Companies was established in 1992 with the aim to provide buying agency services to
                international customers for the procurement of textile products from Pakistan, India Vietnam, Indonesia
                and Uzbekistan, as well as in domestic market. We believe to encourage innovation, value long–term
                development of talents and provide services as professionals.
              </p>
              <p className="text-gray-700 mb-4">
                Opulent Group of Companies is a reflection of commitment, dedication and team spirit of its management
                and employees. The tradition of quality in services and emphasis on customer satisfaction run unbroken
                since its inception.
              </p>
              <p className="text-gray-700">
                The world is fast becoming a smaller place, communicating to the remotes parts of the world is now
                possible with a simple click of a mouse. Accessibility to global resource is now essential to the
                survival of every business. We manage the sourcing requirements of our clients by introducing them
                industry best suppliers, managing competitive prices and assuring quality and last but not least timely
                deliveries.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/1CBEF75E-F461-4041-A1AF-A7E636125BD1-2.jpeg?height=800&width=1200"
                alt="Opulent House"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-80 py-3 px-4 text-white font-medium">
                Opulent House
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Global Presence</h2>
          <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Presently we are in strong business relations with customers in Korea, Malaysia, Indonesia, Hong Kong,
            Japan, China, Taiwan, Singapore, Sri Lanka, Thailand, Turkey, Germany, Honduras, Guatemala, Bangladesh,
            Italy, Portugal, Spain, Belgium, Estonia and USA.
          </p>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/ChatGPT%20Image%20Apr%2017%2C%202025%20at%2010_09_08%20PM.png?height=800&width=1200"
              alt="Global Presence Map"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quality Management */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/qualitydep.png?height=800&width=1200"
                alt="Quality Management System"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Quality Management System</h2>
              <p className="text-gray-700 mb-4">
                Quality and customer satisfaction are our essential and inducing tenets, never to be compromised for
                short term expedicy. Our inception we have embarked on a continuous growth and improvement strategy.
              </p>
              <p className="text-gray-700 mb-4">
                The renewed confidence of our customers is our pride. We are ISO certified company, having proper
                process of documentation in order to avoid any delay in communication.
              </p>
              <p className="text-gray-700 mb-6">
                Hard efforts of Management Representative ensures great working environment. Internal and Annual audits
                with regular meetings are on always top agenda to empower team spirit in order to have excellence in our
                services.
              </p>

              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Quality Policy</h3>
                <p className="text-gray-700 italic">
                  "Providing the most excellent services through our best pre-shipment inspection and continual
                  improvement of our Quality Management System for customer satisfaction."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Environment */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Working Environment</h2>
          <p className="text-xl font-medium text-primary mb-4">
            We view ourselves as extended family, promoting a culture of human development.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Opulent provides open and friendly atmosphere for its employees as we believe that its good key to increase
            employees work potential, mutual understandings, co operative behavior, to develop family like relations and
            to enjoy friendly and healthy environment.
          </p>
        </div>
      </section>
    </main>
  )
}
