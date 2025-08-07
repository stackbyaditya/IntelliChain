"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { 
  Package, 
  Truck, 
  MapPin, 
  Clock, 
  CheckCircle,
  TrendingUp,
  BarChart3,
  Zap,
  Shield,
  Bell,
  Activity,
  Target,
  Gauge,
  ArrowRight,
  Play,
  Eye
} from "lucide-react"

interface DashboardSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardSection({ className, ...props }: DashboardSectionProps) {
  return (
    <section className={cn("py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900", className)} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full text-sm font-semibold text-purple-700 dark:text-purple-300 mb-6 border border-purple-200/50 dark:border-purple-800/50">
            <Activity className="w-4 h-4 mr-2" />
            Live Dashboard Preview
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 dark:from-gray-100 dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent mb-6">
            Real-Time Logistics Intelligence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Experience the power of AI-driven logistics management with live tracking, predictive analytics, and intelligent route optimization across Delhi's industrial hubs.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-3xl rounded-3xl"></div>
          
          {/* Main Dashboard Container */}
          <div className="relative bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-800/50 shadow-2xl overflow-hidden">
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-white/90 to-gray-50/90 dark:from-gray-950/90 dark:to-gray-900/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 p-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-2xl shadow-xl">
                      <Truck className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                      IntelliChain Dashboard
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                      Okhla Industrial Area • Live Demo
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button className="relative p-2 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-all duration-200">
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-xs flex items-center justify-center text-white font-bold">3</span>
                  </button>
                  
                  <div className="flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 rounded-xl p-2 backdrop-blur-sm">
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Aditya Kumar</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">MSME Alpha Owner</div>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      AK
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards Preview */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="group bg-gradient-to-br from-white/70 to-blue-50/70 dark:from-gray-800/70 dark:to-blue-950/20 backdrop-blur-xl p-4 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                        <Package className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Active Shipments</p>
                        <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">18</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-green-600 dark:text-green-400 flex items-center font-medium">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +7 from yesterday
                    </div>
                    <div className="text-xs text-blue-600 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full font-bold">LIVE</div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-white/70 to-green-50/70 dark:from-gray-800/70 dark:to-green-950/20 backdrop-blur-xl p-4 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl shadow-lg">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Cost Saved</p>
                        <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">₹15.2K</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-green-600 dark:text-green-400 font-medium">52% reduction</div>
                    <div className="text-xs text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full font-bold">+18%</div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-white/70 to-purple-50/70 dark:from-gray-800/70 dark:to-purple-950/20 backdrop-blur-xl p-4 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Avg Delivery</p>
                        <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">3.2h</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-green-600 dark:text-green-400 flex items-center font-medium">
                      <Zap className="w-3 h-3 mr-1" />
                      48% faster
                    </div>
                    <div className="text-xs text-purple-600 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-full font-bold">OPTIMIZED</div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-white/70 to-orange-50/70 dark:from-gray-800/70 dark:to-orange-950/20 backdrop-blur-xl p-4 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-lg">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Success Rate</p>
                        <p className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">99.4%</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-green-600 dark:text-green-400 flex items-center font-medium">
                      <Shield className="w-3 h-3 mr-1" />
                      +4.2% improvement
                    </div>
                    <div className="text-xs text-orange-600 bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded-full font-bold">EXCELLENT</div>
                  </div>
                </div>
              </div>

              {/* Live Tracking Preview */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Tracking Panel */}
                <div className="lg:col-span-2">
                  <div className="bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center">
                        <Activity className="w-5 h-5 mr-2 text-purple-600" />
                        Live Shipment Tracking
                      </h4>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-600 dark:text-green-400 font-medium">3 active</span>
                      </div>
                    </div>

                    {/* Sample Shipment Cards */}
                    <div className="space-y-4">
                      <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">IC001</span>
                              <span className="px-2 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full">High Priority</span>
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              <div><span className="font-semibold text-green-600">From:</span> MSME Alpha - Okhla</div>
                              <div><span className="font-semibold text-blue-600">To:</span> Warehouse Beta - Patparganj</div>
                            </div>
                          </div>
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-xl">In Transit</span>
                        </div>
                        
                        <div className="mb-3">
                          <div className="flex justify-between text-sm mb-2">
                            <span>Progress</span>
                            <span className="font-bold">75%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center text-xs">
                          <div className="flex items-center text-gray-500">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                            ETA: 2:30 PM
                          </div>
                          <button className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold hover:shadow-lg transition-all">
                            Track Live
                          </button>
                        </div>
                      </div>

                      <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">IC002</span>
                              <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">Medium Priority</span>
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              <div><span className="font-semibold text-green-600">From:</span> MSME Gamma - Mayapuri</div>
                              <div><span className="font-semibold text-blue-600">To:</span> Client Delta - Narela</div>
                            </div>
                          </div>
                          <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-xl">Delivered</span>
                        </div>
                        
                        <div className="mb-3">
                          <div className="flex justify-between text-sm mb-2">
                            <span>Progress</span>
                            <span className="font-bold">100%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{ width: '100%' }}></div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center text-xs">
                          <div className="flex items-center text-gray-500">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            Completed: 1 hour ago
                          </div>
                          <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg font-bold">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Insights Sidebar */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-white/50 to-purple-50/50 dark:from-gray-800/50 dark:to-purple-950/20 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-4 backdrop-blur-sm">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center mb-4">
                      <Gauge className="w-5 h-5 mr-2 text-purple-600" />
                      AI Insights
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
                        <div className="flex items-start space-x-2">
                          <div className="p-1 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                            <TrendingUp className="w-3 h-3 text-white" />
                          </div>
                          <div className="text-xs flex-1">
                            <p className="font-bold text-blue-900 dark:text-blue-100 mb-1">Route Optimization</p>
                            <p className="text-blue-700 dark:text-blue-300">3 shipments can be pooled for 25% savings</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
                        <div className="flex items-start space-x-2">
                          <div className="p-1 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg">
                            <Clock className="w-3 h-3 text-white" />
                          </div>
                          <div className="text-xs flex-1">
                            <p className="font-bold text-green-900 dark:text-green-100 mb-1">Peak Hours</p>
                            <p className="text-green-700 dark:text-green-300">Best delivery window: 2-4 PM today</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-white/50 to-green-50/50 dark:from-gray-800/50 dark:to-green-950/20 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-4 backdrop-blur-sm">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center mb-4">
                      <Target className="w-5 h-5 mr-2 text-green-600" />
                      Quick Actions
                    </h4>
                    
                    <div className="space-y-2">
                      <button className="w-full flex items-center space-x-2 p-2 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg hover:from-purple-100 hover:to-pink-100 transition-all text-left">
                        <div className="p-1 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg">
                          <Package className="w-3 h-3 text-white" />
                        </div>
                        <div className="text-xs">
                          <div className="font-bold text-gray-900 dark:text-gray-100">New Shipment</div>
                          <div className="text-gray-500">AI optimization</div>
                        </div>
                      </button>
                      
                      <button className="w-full flex items-center space-x-2 p-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg hover:from-blue-100 hover:to-cyan-100 transition-all text-left">
                        <div className="p-1 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg">
                          <MapPin className="w-3 h-3 text-white" />
                        </div>
                        <div className="text-xs">
                          <div className="font-bold text-gray-900 dark:text-gray-100">Shared Routes</div>
                          <div className="text-gray-500">Save 40% costs</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-8 opacity-0 hover:opacity-100 transition-all duration-500 group">
              <div className="text-center">
                <Link 
                  href="/demo"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 group"
                >
                  <Eye className="w-6 h-6" />
                  <span className="text-lg">Explore Full Dashboard</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-white/80 text-sm mt-3 font-medium">
                  Experience real-time logistics intelligence
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-xl mb-6 group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Real-Time Tracking</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Monitor every shipment with live GPS tracking, predictive ETAs, and instant status updates across Delhi's industrial zones.
            </p>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-xl mb-6 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110">
              <Gauge className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">AI-Powered Insights</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Get intelligent recommendations for route optimization, cost savings, and delivery time improvements powered by machine learning.
            </p>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-xl mb-6 group-hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Performance Analytics</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Comprehensive analytics dashboard with cost tracking, delivery performance metrics, and business intelligence insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}