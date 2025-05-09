import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const departments = [
  {
    id: "global-market",
    name: "Global Market",
    description: "As international business has enormous potential for our yarn and fabric...",
    image: "https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/GlobalDepartment.png?height=400&width=600",
  },
  {
    id: "domestic-market",
    name: "Domestic Market",
    description: "Great potential due to continuously increasing woven industry and export.",
    image: "https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/DomesticDep.png?height=400&width=600",
  },
  {
    id: "quality-control",
    name: "Quality Control",
    description: '"No compromise on quality" is the basic and main agenda of our quality...',
    image: "https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/qualitydep.png?height=400&width=600",
  },
  {
    id: "exports",
    name: "Exports",
    description: "Ready to provide up-to-date productions status and shipment details anytime...",
    image: "https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/ExportsDep.png?height=400&width=600",
  },
  {
    id: "accounts-finance",
    name: "Accounts | Finance",
    description: "Aim to serve the needs of our customers and build value for our clients...",
    image: "https://pub-65d7ecaa57d143c3a65c53b4610c7ad8.r2.dev/accountsdep.png?height=400&width=600",
  },
]

export function DepartmentsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Departments</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Opulent Group of Companies is a reflection of commitment, dedication and team spirit of its management and
              employees.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((department, index) => (
            <ScrollAnimation key={department.id} animation="slide-up" delay={index * 0.1}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={department.image || "/placeholder.svg"}
                    alt={department.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{department.name}</h3>
                  <p className="text-gray-600 mb-4">{department.description}</p>
                  <Link
                    href={`/departments/${department.id}`}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    More Detail <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
