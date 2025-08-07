import * as React from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface AICardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  icon: LucideIcon
  metrics?: {
    label: string
    value: string
    change?: string
  }
  gradient?: string
}

export function AICard({ className, title, description, icon: Icon, metrics, gradient = "from-purple-500 to-pink-500", ...props }: AICardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20",
        className
      )}
      {...props}
    >
        {/* Background gradient on hover */}
        <div className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-5",
          `bg-gradient-to-br ${gradient}`
        )} />
        
        {/* Icon */}
        <div className={cn(
          "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br",
          gradient,
          "text-white"
        )}>
          <Icon className="h-6 w-6" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>

          {/* Metrics */}
          {metrics && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  {metrics.label}
                </span>
                {metrics.change && (
                  <span className="text-xs text-green-600 dark:text-green-400">
                    {metrics.change}
                  </span>
                )}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {metrics.value}
              </div>
            </div>
          )}
        </div>

        {/* Hover effect border */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
             style={{ 
               background: `linear-gradient(white, white) padding-box, linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153)) border-box`,
               backgroundClip: 'padding-box, border-box'
             }} />
    </div>
  )
}