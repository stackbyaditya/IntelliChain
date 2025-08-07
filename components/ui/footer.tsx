import * as React from "react"
import { cn } from "@/lib/utils"
import { Truck, Mail, Phone, MapPin } from "lucide-react"

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Footer({ className, ...props }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={cn("bg-gray-900 dark:bg-black text-white", className)}
      {...props}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">IntelliChain</span>
              </div>
              <p className="text-gray-400 text-sm">
                Revolutionizing last-mile logistics for Delhi's industrial hubs through AI-powered smart logistics solutions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Okhla Industrial Area, New Delhi</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>+91 [phone_number]</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>[email]@intellichain.com</span>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Solutions</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Route Optimization</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Load Pooling</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Real-time Tracking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emission Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Predictive Maintenance</a></li>
              </ul>
            </div>

            {/* Industrial Zones */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Coverage Areas</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Okhla Industrial Area</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Patparganj Industrial Area</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bawana Industrial Area</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Narela Industrial Area</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mayapuri Industrial Area</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Industrial Ideathon 2025</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-400">
                © {currentYear} IntelliChain. All rights reserved. Built for Industrial Ideathon 2025.
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}