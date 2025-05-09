import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Opulent International</h2>
            <p className="text-gray-600 mb-6">
              Founded in 1995, Opulent International has established itself as Pakistan's premier textile exporter,
              delivering exceptional quality fabrics to markets worldwide. Our commitment to craftsmanship, innovation,
              and sustainability has earned us a reputation for excellence in the global textile industry.
            </p>
            <p className="text-gray-600 mb-8">
              With state-of-the-art manufacturing facilities and a team of skilled artisans, we blend traditional
              techniques with modern technology to create textiles that meet the highest international standards.
            </p>
            <Button asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/placeholder.svg?height=800&width=800"
              alt="Opulent International Factory"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
