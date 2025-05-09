import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            For more information and details please contact us, we have our offices on following locations.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Full Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1">
                      Company
                    </label>
                    <Input id="company" placeholder="Your company" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone
                    </label>
                    <Input id="phone" placeholder="Your phone number" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>

                <Button type="submit" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Our Offices</h2>

              <div className="space-y-8">
                {/* Pakistan Office */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-4">Pakistan | Head Office</h3>
                  <div className="space-y-3">
                    <div className="flex">
                      <MapPin className="h-5 w-5 text-gray-600 mr-3 shrink-0 mt-1" />
                      <p className="text-gray-700">
                        Opulent International
                        <br />
                        38-Babar Block, New Garden Town, Lahore - Pakistan
                      </p>
                    </div>
                    <div className="flex">
                      <Phone className="h-5 w-5 text-gray-600 mr-3 shrink-0 mt-1" />
                      <p className="text-gray-700">
                        +92 (42) 35886391 | 35832031
                        <br />
                        +92 (42) 35861743 | 35867026
                        <br />
                        +92 (42) 35839304 | 35862784
                      </p>
                    </div>
                    <div className="flex">
                      <Mail className="h-5 w-5 text-gray-600 mr-3 shrink-0 mt-1" />
                      <p className="text-gray-700">
                        info@opulent-elite.com
                        <br />
                        yarn@opulent-elite.com
                        <br />
                        sales@opulent-elite.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* China Office */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-4">China | Shaoxing</h3>
                  <div className="space-y-3">
                    <div className="flex">
                      <MapPin className="h-5 w-5 text-gray-600 mr-3 shrink-0 mt-1" />
                      <p className="text-gray-700">
                        Opulent Textiles (Pvt.) Limited
                        <br />
                        Room 603, Haizhou International Business Building, Keqiao District, Shaoxing City, Zhejiang
                        Province, China
                      </p>
                    </div>
                    <div className="flex">
                      <Phone className="h-5 w-5 text-gray-600 mr-3 shrink-0 mt-1" />
                      <p className="text-gray-700">
                        0086 • 151 • 67028828
                        <br />
                        0092 • 322 • 8866633
                      </p>
                    </div>
                    <div className="flex">
                      <Mail className="h-5 w-5 text-gray-600 mr-3 shrink-0 mt-1" />
                      <p className="text-gray-700">ahmadbashir104@hotmail.com</p>
                    </div>
                  </div>
                </div>

                {/* Vietnam Office */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-4">Vietnam</h3>
                  <div className="space-y-3">
                    <div className="flex">
                      <MapPin className="h-5 w-5 text-gray-600 mr-3 shrink-0 mt-1" />
                      <p className="text-gray-700">
                        Opulent Textiles (Private) Limited.
                        <br />
                        Rm 413, B15, Dai Kim – Dinh Cong, Hoang Mai, Ha Noi. Vietnam
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.877125309672!2d74.3242872!3d31.500061100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919046e40550213%3A0xcf7c004e09ad9b1e!2sOpulent%20International!5e0!3m2!1sen!2s!4v1744988489250!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  )
}
