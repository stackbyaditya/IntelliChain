import * as React from "react"
import { cn } from "@/lib/utils"
import { Package, MapPin, BarChart3, ArrowRight } from "lucide-react"

interface QuickActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

const quickActions = [
  {
    icon: Package,
    title: "Create New Shipment",
    description: "Book a new delivery with smart route optimization",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    hoverColor: "hover:bg-purple-100 dark:hover:bg-purple-900/30"
  },
  {
    icon: MapPin,
    title: "Find Shared Routes",
    description: "Discover cost-effective shared delivery options",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    hoverColor: "hover:bg-blue-100 dark:hover:bg-blue-900/30"
  },
  {
    icon: BarChart3,
    title: "View Analytics",
    description: "Track performance and cost savings insights",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    hoverColor: "hover:bg-green-100 dark:hover:bg-green-900/30"
  }
]

export function QuickActions({ className, ...props }: QuickActionsProps) {
  return (
    <section
      className={cn("py-16 bg-white dark:bg-gray-950", className)}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Quick Actions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get started with IntelliChain's core features in just a few clicks
          </p>
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className={cn(
                "group relative p-6 text-left rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105",
                action.bgColor,
                action.hoverColor
              )}
            >
              {/* Icon */}
              <div className={cn(
                "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg",
                action.bgColor.replace('50', '100').replace('900/20', '800/30')
              )}>
                <action.icon className={cn("h-6 w-6", action.color)} />
              </div>

              {/* Content */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {action.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {action.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-end">
                <ArrowRight className={cn(
                  "w-5 h-5 transition-transform duration-300 group-hover:translate-x-1",
                  action.color
                )} />
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-gray-800/50" />
            </button>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-200 dark:border-purple-800">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Ready to optimize your logistics?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Join 3,000+ MSMEs already using IntelliChain
              </p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-200 whitespace-nowrap">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}