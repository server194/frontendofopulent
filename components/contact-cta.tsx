import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ContactCta() {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Collaborate?</h2>
        <p className="text-gray-300 mb-8 text-lg">
          Whether you're looking for premium textiles for your business or interested in a long-term partnership, our
          team is ready to assist you with tailored solutions that meet your specific requirements.
        </p>
        <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  )
}
