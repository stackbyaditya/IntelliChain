import * as React from "react"
import { cn } from "@/lib/utils"
import { AICard } from "./ai-card"
import { 
  Navigation, 
  Truck, 
  MapPin, 
  Leaf, 
  Settings,
  BarChart3
} from "lucide-react"

interface AISectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: string
}

const aiTools = [
  {
    title: "Route Optimization",
    description: "AI-powered dynamic routing that adapts to Delhi traffic patterns, road conditions, and delivery priorities in real-time.",
    icon: Navigation,
    gradient: "from-blue-500 to-cyan-500",
    metrics: {
      label: "Average Time Saved",
      value: "35%",
      change: "+12% this month"
    }
  },
  {
    title: "Load Pooling",
    description: "Smart consolidation of shipments from multiple MSMEs to optimize vehicle capacity and reduce per-unit delivery costs.",
    icon: Truck,
    gradient: "from-green-500 to-emerald-500",
    metrics: {
      label: "Cost Reduction",
      value: "42%",
      change: "+8% efficiency"
    }
  },
  {
    title: "Real-Time Tracking",
    description: "IoT-enabled monitoring with live updates on vehicle location, delivery status, and estimated arrival times.",
    icon: MapPin,
    gradient: "from-purple-500 to-pink-500",
    metrics: {
      label: "Tracking Accuracy",
      value: "99.2%",
      change: "Real-time updates"
    }
  },
  {
    title: "Emission Analytics",
    description: "Environmental impact tracking with carbon footprint analysis and green delivery route suggestions for sustainable logistics.",
    icon: Leaf,
    gradient: "from-orange-500 to-red-500",
    metrics: {
      label: "CO2 Reduction",
      value: "28%",
      change: "+15% vs last quarter"
    }
  },
  {
    title: "Predictive Maintenance",
    description: "AI-driven vehicle health monitoring to prevent breakdowns and optimize fleet performance across industrial zones.",
    icon: Settings,
    gradient: "from-indigo-500 to-purple-500",
    metrics: {
      label: "Downtime Reduced",
      value: "67%",
      change: "Proactive alerts"
    }
  },
  {
    title: "Demand Forecasting",
    description: "Machine learning algorithms predict delivery demand patterns to optimize resource allocation and capacity planning.",
    icon: BarChart3,
    gradient: "from-teal-500 to-blue-500",
    metrics: {
      label: "Forecast Accuracy",
      value: "94%",
      change: "+6% improvement"
    }
  }
]

export function AISection({ 
  className, 
  title = "AI-Powered Logistics Intelligence",
  subtitle = "Advanced algorithms solving complex supply chain challenges across Delhi's industrial ecosystem",
  ...props 
}: AISectionProps) {
  return (
    <section
      className={cn("py-24 bg-gray-50 dark:bg-gray-900", className)}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* AI Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiTools.map((tool, index) => (
            <AICard
              key={index}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              gradient={tool.gradient}
              metrics={tool.metrics}
              className="transform transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              3,000+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              MSMEs Connected
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              500+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Active Transporters
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              50+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Micro-Warehouses
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              24/7
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Real-time Support
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}