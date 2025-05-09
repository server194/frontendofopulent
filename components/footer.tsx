import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HWiM2yMsIL1iQuRa2g7dbwMUmEPz5B.png"
                alt="Opulent Group of Companies"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-600 mb-4">
              Established in 1992, Opulent Group of Companies provides buying agency services for textile products from
              Pakistan, India, Vietnam, Indonesia, and Uzbekistan.
            </p>
          </div>

          <div className="sm:mt-0 mt-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-primary">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-gray-600 hover:text-primary">
                  Departments
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary">
                  Let's Connect
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-8 sm:mt-0">
            <h3 className="text-lg font-semibold mb-4">Pakistan | Head Office</h3>
            <address className="not-italic text-gray-600 space-y-2">
              <p className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary shrink-0 mt-1" />
                <span>38-Babar Block, New Garden Town, Lahore - Pakistan</span>
              </p>
              <p className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-primary shrink-0 mt-1" />
                <span>
                  +92 (42) 35886391 | 35832031
                  <br />
                  +92 (42) 35861743 | 35867026
                  <br />
                  +92 (42) 35839304 | 35862784
                </span>
              </p>
              <p className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-primary shrink-0 mt-1" />
                <span>
                  info@opulent-elite.com
                  <br />
                  yarn@opulent-elite.com
                  <br />
                  sales@opulent-elite.com
                </span>
              </p>
            </address>
          </div>

          <div className="mt-8 sm:mt-0">
            <h3 className="text-lg font-semibold mb-4">International Offices</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-primary">China | Shaoxing</h4>
                <p className="text-gray-600 text-sm">
                  Room 603, Haizhou International Business Building, Keqiao District, Shaoxing City, Zhejiang Province,
                  China
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  0086 • 151 • 67028828
                  <br />
                  0092 • 322 • 8866633
                  <br />
                  ahmadbashir104@hotmail.com
                </p>
              </div>
              <div>
                <h4 className="font-medium text-primary">Vietnam</h4>
                <p className="text-gray-600 text-sm">Rm 413, B15, Dai Kim – Dinh Cong, Hoang Mai, Ha Noi. Vietnam</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            © Copyrights {new Date().getFullYear()}, Opulent Group of Companies | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
