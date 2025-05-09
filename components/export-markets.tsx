import { Globe } from "lucide-react"

const markets = [
  { region: "Europe", countries: ["Germany", "France", "Italy", "UK", "Spain"] },
  { region: "North America", countries: ["USA", "Canada"] },
  { region: "Asia", countries: ["Japan", "South Korea", "China", "UAE", "Saudi Arabia"] },
  { region: "Australia & Oceania", countries: ["Australia", "New Zealand"] },
]

export function ExportMarkets() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Global Presence</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {markets.map((market, index) => (
            <div key={index} className="border p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6" />
                <h3 className="text-xl font-semibold">{market.region}</h3>
              </div>
              <ul className="space-y-2">
                {market.countries.map((country, idx) => (
                  <li key={idx} className="text-gray-600">
                    {country}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-medium mb-4">Exporting Quality Textiles to Over 30 Countries</p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our global network ensures that Opulent International's premium textiles reach customers worldwide,
            maintaining the highest standards of quality and service across all markets.
          </p>
        </div>
      </div>
    </section>
  )
}
