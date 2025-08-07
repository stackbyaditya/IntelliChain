import * as React from "react"
import { cn } from "@/lib/utils"
import { 
  Package, 
  Navigation, 
  Truck, 
  CheckCircle,
  ArrowRight
} from "lucide-react"

interface HowItWorksProps extends React.HTMLAttributes<HTMLDivElement> {}

const steps = [
  {
    icon: Package,
    title: "Book Your Shipment",
    description: "MSMEs create shipment requests through our intuitive dashboard with pickup and delivery details.",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/20"
  },
  {
    icon: Navigation,
    title: "AI Route Optimization",
    description: "Our AI analyzes traffic, distance, and load compatibility to suggest optimal shared routes.",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/20"
  },
  {
    icon: Truck,
    title: "Transporter Assignment",
    description: "Verified transporters accept consolidated loads and begin pickup from multiple MSMEs.",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/20"
  },
  {
    icon: CheckCircle,
    title: "Real-time Tracking",
    description: "All stakeholders track shipments live with IoT sensors and automated delivery confirmations.",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-900/20"
  }
]

export function HowItWorks({ className, ...props }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
      className={cn("py-24 bg-gray-50 dark:bg-gray-900", className)}
      {...props}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              How IntelliChain Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Simple, efficient, and intelligent logistics workflow designed for Delhi's industrial ecosystem.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 transform -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="bg-white dark:bg-gray-950 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 relative z-10">
                    {/* Step Number */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className={cn(
                      "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg",
                      step.bgColor
                    )}>
                      <step.icon className={cn("h-6 w-6", step.color)} />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-4 mb-4">
                      <ArrowRight className="w-6 h-6 text-gray-400 dark:text-gray-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Demo CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Ready to Experience IntelliChain?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Join the pilot program in Okhla Industrial Area and see how AI-powered logistics can transform your business operations.
              </p>
              <button className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-200">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
    </section>
  )
}