import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const departments = [
  {
    id: "global-market",
    title: "Global Market",
    description:
      "As international business has enormous potential for our yarn and fabric, we have established a dedicated department to handle global market operations. Our team works closely with international clients to understand their specific requirements and source the best products from manufacturers across Asia.",
    image: "https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/GlobalDepartment.png?height=600&width=800",
  },
  {
    id: "domestic-market",
    title: "Domestic Market",
    description:
      "Great potential due to continuously increasing woven industry and export. Our domestic market department focuses on serving local businesses with high-quality textile products, leveraging our extensive network of manufacturers and suppliers within Pakistan.",
    image: "https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/DomesticDep.png?height=600&width=800",
  },
  {
    id: "quality-control",
    title: "Quality Control",
    description:
      '"No compromise on quality" is the basic and main agenda of our quality control department. Our dedicated team ensures that all products meet international standards and client specifications through rigorous inspection and testing processes.',
    image: "https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/qualitydep.png?height=600&width=800",
  },
  {
    id: "exports",
    title: "Exports",
    description:
      "Ready to provide up-to-date productions status and shipment details anytime. Our exports department handles all aspects of international shipping, documentation, and logistics to ensure smooth delivery of products to clients worldwide.",
    image: "https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/ExportsDep.png?height=600&width=800",
  },
  {
    id: "accounts-finance",
    title: "Accounts | Finance",
    description:
      "Aim to serve the needs of our customers and build value for our clients. Our accounts and finance department ensures transparent financial transactions, timely payments, and comprehensive financial reporting for both our company and our clients.",
    image: "https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/accountsdep.png?height=600&width=800",
  },
]

export default function DepartmentsPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Departments</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Opulent Group of Companies is a reflection of commitment, dedication and team spirit of its management and
            employees.
          </p>
        </div>
      </section>

      {/* Departments List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {departments.map((department, index) => (
              <div
                key={department.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-3xl font-bold mb-4">{department.title}</h2>
                  <p className="text-gray-700 mb-6">{department.description}</p>
                  <Link
                    href={`/departments/${department.id}`}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    More Detail <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div
                  className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={department.image || "/placeholder.svg"}
                    alt={department.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our success is built on the expertise, dedication, and collaborative spirit of our team members across all
              departments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Team Member" fill className="object-cover" />
                </div>
                <div className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 -mt-16 border-4 border-white relative z-10 bg-white">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Team Member"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">Team Member Name</h3>
                  <p className="text-primary mb-3">Department Head</p>
                  <p className="text-gray-600">
                    Brief description of the team member's expertise and role within the company.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
