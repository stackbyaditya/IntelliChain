import * as React from "react"
import { cn } from "@/lib/utils"
import { 
  Zap, 
  Shield, 
  Globe, 
  Clock, 
  TrendingUp,
  Users
} from "lucide-react"

interface FeaturesSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "Reduce delivery times by up to 35% with AI-optimized routing across Delhi's industrial zones.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "End-to-end encryption and real-time monitoring ensure your shipments are always protected.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Globe,
    title: "Multi-Zone Coverage",
    description: "Seamless operations across Okhla, Patparganj, Bawana, Narela, and Mayapuri industrial areas.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    description: "Round-the-clock logistics support with automated scheduling and real-time updates.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    title: "Cost Optimization",
    description: "Reduce logistics costs by up to 42% through intelligent load pooling and route sharing.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Users,
    title: "MSME Focused",
    description: "Designed specifically for small and medium enterprises with affordable, scalable solutions.",
    gradient: "from-teal-500 to-blue-500"
  }
]

export function FeaturesSection({ className, ...props }: FeaturesSectionProps) {
  return (
    <section
      id="features"
      className={cn("py-24 bg-white dark:bg-gray-950", className)}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Why Choose IntelliChain?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Built for Delhi's industrial ecosystem, our platform addresses the unique challenges faced by MSMEs in last-mile logistics.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className={cn(
                "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br text-white",
                feature.gradient
              )}>
                <feature.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}