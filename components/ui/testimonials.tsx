import * as React from "react"
import { cn } from "@/lib/utils"
import { Star, Quote } from "lucide-react"

interface TestimonialsProps extends React.HTMLAttributes<HTMLDivElement> {}

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Owner, Alpha Manufacturing",
    company: "Okhla Industrial Area",
    content: "IntelliChain reduced our delivery costs by 40% and improved our on-time delivery rate to 98%. The AI route optimization is incredible!",
    rating: 5,
    avatar: "RK"
  },
  {
    name: "Priya Sharma",
    role: "Logistics Manager, Beta Textiles",
    company: "Patparganj Industrial Area", 
    content: "The shared logistics platform helped us connect with other MSMEs and significantly reduce our transportation expenses. Highly recommended!",
    rating: 5,
    avatar: "PS"
  },
  {
    name: "Amit Singh",
    role: "Director, Gamma Electronics",
    company: "Mayapuri Industrial Area",
    content: "Real-time tracking and predictive maintenance features have transformed our supply chain operations. Customer satisfaction is at an all-time high.",
    rating: 5,
    avatar: "AS"
  }
]

const partners = [
  { name: "Delhi Industrial Development Corporation", logo: "DIDC" },
  { name: "MSME Development Institute", logo: "MSME" },
  { name: "Federation of Indian Chambers", logo: "FICCI" },
  { name: "Confederation of Indian Industry", logo: "CII" },
  { name: "Associated Chambers of Commerce", logo: "ASSOCHAM" },
  { name: "Export Promotion Council", logo: "EPC" }
]

export function Testimonials({ className, ...props }: TestimonialsProps) {
  return (
    <section
      className={cn("py-24 bg-gray-50 dark:bg-gray-900", className)}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Trusted by Delhi's Leading MSMEs
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            See how IntelliChain is transforming logistics across industrial hubs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-8">
            Supported by Leading Industrial Organizations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-xs mb-2 mx-auto">
                    {partner.logo}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                    {partner.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}