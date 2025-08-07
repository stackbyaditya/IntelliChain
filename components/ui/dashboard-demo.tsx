"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { 
  Package, 
  Truck, 
  MapPin, 
  Clock, 
  CheckCircle,
  AlertCircle,
  TrendingUp,
  BarChart3,
  Zap,
  Shield,
  Bell,
  Search,
  Download,
  RefreshCw,
  Star,
  Activity,
  Target,
  Gauge
} from "lucide-react"

interface DashboardDemoProps extends React.HTMLAttributes<HTMLDivElement> {}

const mockShipments = [
  {
    id: "IC001",
    from: "MSME Alpha - Okhla",
    to: "Warehouse Beta - Patparganj", 
    status: "In Transit",
    progress: 75,
    eta: "2:30 PM",
    driver: "Rajesh Kumar",
    vehicle: "DL-8C-1234",
    priority: "High",
    weight: "2.5 tons",
    distance: "12.4 km",
    cost: "₹850",
    lastUpdate: "2 mins ago",
    currentLocation: "Crossing Yamuna Bridge"
  },
  {
    id: "IC002", 
    from: "MSME Gamma - Mayapuri",
    to: "Client Delta - Narela",
    status: "Delivered",
    progress: 100,
    eta: "Completed",
    driver: "Amit Singh", 
    vehicle: "DL-3C-5678",
    priority: "Medium",
    weight: "1.8 tons",
    distance: "18.7 km",
    cost: "₹1,200",
    lastUpdate: "1 hour ago",
    currentLocation: "Delivered Successfully"
  }
]

const recentActivities = [
  { time: "1 min ago", action: "IC001 crossed Yamuna Bridge - On schedule", type: "success" },
  { time: "3 mins ago", action: "Route optimized for IC003 - 15% time saved", type: "success" },
  { time: "5 mins ago", action: "New shipment IC007 created by MSME Delta", type: "info" },
  { time: "8 mins ago", action: "Traffic alert: Minor delay on Ring Road", type: "warning" }
]

export function DashboardDemo({ className, ...props }: DashboardDemoProps) {
  const [selectedFilter, setSelectedFilter] = React.useState("all")
  const [searchTerm, setSearchTerm] = React.useState("")
  const [isRefreshing, setIsRefreshing] = React.useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 2000)
  }

  const filteredShipments = mockShipments.filter(shipment => {
    const matchesFilter = selectedFilter === "all" || shipment.status.toLowerCase().includes(selectedFilter.toLowerCase())
    const matchesSearch = shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         shipment.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         shipment.to.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className={cn("min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900", className)} {...props}>
      {/* Enhanced Header with Gradient */}
      <header className="bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-2xl shadow-xl">
                  <Truck className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                  IntelliChain Dashboard
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Okhla Industrial Area - Live Demo
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleRefresh}
                className="p-3 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-all duration-200 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-xl"
                disabled={isRefreshing}
              >
                <RefreshCw className={cn("w-5 h-5", isRefreshing && "animate-spin")} />
              </button>
              
              <button className="relative p-3 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-all duration-200 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-xl">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-xs flex items-center justify-center text-white font-bold shadow-lg">3</span>
              </button>
              
              <div className="flex items-center space-x-3 bg-white/50 dark:bg-gray-800/50 rounded-2xl p-2 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Aditya Kumar
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    MSME Alpha Owner
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                  AK
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Stats Cards with Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="group bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl p-6 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg group-hover:shadow-blue-500/25 transition-shadow">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Shipments</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">15</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-green-600 dark:text-green-400 flex items-center font-medium">
                <TrendingUp className="w-4 h-4 mr-1" />
                +5 from yesterday
              </div>
              <div className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">Live</div>
            </div>
          </div>

          <div className="group bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl p-6 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl shadow-lg group-hover:shadow-green-500/25 transition-shadow">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Cost Saved</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">₹12,850</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                48% reduction this month
              </div>
              <div className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">+12%</div>
            </div>
          </div>

          <div className="group bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl p-6 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg group-hover:shadow-purple-500/25 transition-shadow">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg Delivery Time</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">3.8h</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-green-600 dark:text-green-400 flex items-center font-medium">
                <Zap className="w-4 h-4 mr-1" />
                42% faster than before
              </div>
              <div className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">Optimized</div>
            </div>
          </div>

          <div className="group bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl p-6 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-lg group-hover:shadow-orange-500/25 transition-shadow">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Success Rate</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">99.2%</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-green-600 dark:text-green-400 flex items-center font-medium">
                <Shield className="w-4 h-4 mr-1" />
                +3.1% improvement
              </div>
              <div className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">Excellent</div>
            </div>
          </div>
        </div> 
       {/* Enhanced Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enhanced Shipment Tracking */}
          <div className="lg:col-span-2">
            <div className="bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-xl">
              {/* Enhanced Header with Filters */}
              <div className="p-6 border-b border-gray-200/50 dark:border-gray-800/50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center">
                      <Activity className="w-5 h-5 mr-2 text-purple-600" />
                      Live Shipment Tracking
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {filteredShipments.length} active shipments • Real-time updates
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search shipments..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300/50 dark:border-gray-600/50 rounded-xl text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                      />
                    </div>
                    
                    <select
                      value={selectedFilter}
                      onChange={(e) => setSelectedFilter(e.target.value)}
                      className="px-3 py-2 border border-gray-300/50 dark:border-gray-600/50 rounded-xl text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                    >
                      <option value="all">All Status</option>
                      <option value="transit">In Transit</option>
                      <option value="pending">Pending</option>
                      <option value="delivered">Delivered</option>
                    </select>
                    
                    <button className="p-2 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 border border-gray-300/50 dark:border-gray-600/50 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Shipment List */}
              <div className="p-6">
                <div className="space-y-6">
                  {filteredShipments.map((shipment) => (
                    <div key={shipment.id} className="group bg-gradient-to-r from-white/50 to-gray-50/50 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-3">
                            <div className="text-xl font-bold text-gray-900 dark:text-gray-100 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                              {shipment.id}
                            </div>
                            <div className={cn(
                              "px-3 py-1 rounded-full text-xs font-bold shadow-sm",
                              shipment.priority === "High" && "bg-gradient-to-r from-red-500 to-pink-500 text-white",
                              shipment.priority === "Medium" && "bg-gradient-to-r from-yellow-500 to-orange-500 text-white",
                              shipment.priority === "Low" && "bg-gradient-to-r from-gray-500 to-gray-600 text-white"
                            )}>
                              {shipment.priority} Priority
                            </div>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={cn("w-3 h-3", i < 4 ? "text-yellow-400 fill-current" : "text-gray-300")} />
                              ))}
                            </div>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                              <span className="font-semibold text-green-600 dark:text-green-400 mr-2">From:</span> 
                              {shipment.from}
                            </div>
                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                              <span className="font-semibold text-blue-600 dark:text-blue-400 mr-2">To:</span> 
                              {shipment.to}
                            </div>
                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                              <MapPin className="w-4 h-4 mr-2 text-purple-500" />
                              <span className="font-medium">Current:</span> 
                              <span className="ml-1 text-purple-600 dark:text-purple-400 font-medium">{shipment.currentLocation}</span>
                            </div>
                          </div>
                        </div>
                        <div className={cn(
                          "px-4 py-2 rounded-xl text-sm font-bold shadow-lg",
                          shipment.status === "Delivered" && "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
                          shipment.status === "In Transit" && "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
                          shipment.status === "Pickup Pending" && "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                        )}>
                          {shipment.status}
                        </div>
                      </div>
                      
                      {/* Enhanced Progress Bar */}
                      <div className="mb-6">
                        <div className="flex justify-between text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                          <span>Delivery Progress</span>
                          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">{shipment.progress}%</span>
                        </div>
                        <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                          <div 
                            className={cn(
                              "h-4 rounded-full transition-all duration-1000 relative overflow-hidden",
                              shipment.status === "Delivered" ? "bg-gradient-to-r from-green-500 to-emerald-500" :
                              shipment.status === "In Transit" ? "bg-gradient-to-r from-blue-500 to-cyan-500" :
                              "bg-gradient-to-r from-purple-600 to-pink-500"
                            )}
                            style={{ width: `${shipment.progress}%` }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Details Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-3 backdrop-blur-sm">
                          <div className="flex items-center space-x-2 mb-1">
                            <Truck className="w-4 h-4 text-blue-500" />
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Driver</span>
                          </div>
                          <div className="font-bold text-gray-900 dark:text-gray-100">{shipment.driver}</div>
                          <div className="text-xs text-gray-500">{shipment.vehicle}</div>
                        </div>
                        <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-3 backdrop-blur-sm">
                          <div className="flex items-center space-x-2 mb-1">
                            <Clock className="w-4 h-4 text-green-500" />
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">ETA</span>
                          </div>
                          <div className="font-bold text-gray-900 dark:text-gray-100">{shipment.eta}</div>
                          <div className="text-xs text-green-600">On time</div>
                        </div>
                        <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-3 backdrop-blur-sm">
                          <div className="flex items-center space-x-2 mb-1">
                            <MapPin className="w-4 h-4 text-purple-500" />
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Distance</span>
                          </div>
                          <div className="font-bold text-gray-900 dark:text-gray-100">{shipment.distance}</div>
                          <div className="text-xs text-gray-500">{shipment.weight}</div>
                        </div>
                        <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-3 backdrop-blur-sm">
                          <div className="flex items-center space-x-2 mb-1">
                            <Package className="w-4 h-4 text-orange-500" />
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Cost</span>
                          </div>
                          <div className="font-bold text-gray-900 dark:text-gray-100">{shipment.cost}</div>
                          <div className="text-xs text-green-600">Optimized</div>
                        </div>
                      </div>
                      
                      {/* Footer */}
                      <div className="flex justify-between items-center pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                        <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                          Last updated: {shipment.lastUpdate}
                        </div>
                        <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-xs font-bold hover:shadow-lg transition-all duration-200 hover:scale-105">
                          Track Live
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>          {
/* Enhanced Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                <Target className="w-5 h-5 mr-2 text-purple-600" />
                Quick Actions
              </h3>
              <div className="space-y-4">
                <button className="w-full group flex items-center space-x-4 p-4 text-left bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30 transition-all duration-300 border border-purple-200/50 dark:border-purple-800/50 hover:shadow-lg hover:scale-105">
                  <div className="p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg shadow-lg group-hover:shadow-purple-500/25">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-gray-100">Create New Shipment</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Book with AI optimization</div>
                  </div>
                </button>
                
                <button className="w-full group flex items-center space-x-4 p-4 text-left bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 transition-all duration-300 border border-blue-200/50 dark:border-blue-800/50 hover:shadow-lg hover:scale-105">
                  <div className="p-2 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg shadow-lg group-hover:shadow-blue-500/25">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-gray-100">Find Shared Routes</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Save up to 40% costs</div>
                  </div>
                </button>
                
                <button className="w-full group flex items-center space-x-4 p-4 text-left bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl hover:from-green-100 hover:to-emerald-100 dark:hover:from-green-900/30 dark:hover:to-emerald-900/30 transition-all duration-300 border border-green-200/50 dark:border-green-800/50 hover:shadow-lg hover:scale-105">
                  <div className="p-2 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg shadow-lg group-hover:shadow-green-500/25">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-gray-100">View Analytics</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Performance insights</div>
                  </div>
                </button>
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center">
                  <Gauge className="w-5 h-5 mr-2 text-purple-600" />
                  AI Insights
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">Active</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="group p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200/50 dark:border-blue-800/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-lg">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-sm flex-1">
                      <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">Route Optimization</p>
                      <p className="text-blue-700 dark:text-blue-300 mb-3">3 shipments can be pooled for 25% cost savings</p>
                      <button className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-bold bg-blue-100 dark:bg-blue-800/50 px-3 py-1 rounded-full hover:bg-blue-200 dark:hover:bg-blue-700/50 transition-all">
                        Apply suggestion →
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="group p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border border-green-200/50 dark:border-green-800/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg shadow-lg">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-sm flex-1">
                      <p className="font-bold text-green-900 dark:text-green-100 mb-2">Peak Hours</p>
                      <p className="text-green-700 dark:text-green-300 mb-3">Best delivery window: 2-4 PM today</p>
                      <button className="text-xs text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 font-bold bg-green-100 dark:bg-green-800/50 px-3 py-1 rounded-full hover:bg-green-200 dark:hover:bg-green-700/50 transition-all">
                        Schedule now →
                      </button>
                    </div>
                  </div>
                </div>

                <div className="group p-4 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl border border-orange-200/50 dark:border-orange-800/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg shadow-lg">
                      <AlertCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-sm flex-1">
                      <p className="font-bold text-orange-900 dark:text-orange-100 mb-2">Traffic Alert</p>
                      <p className="text-orange-700 dark:text-orange-300 mb-3">Heavy traffic on NH-24. Consider alternate route</p>
                      <button className="text-xs text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-200 font-bold bg-orange-100 dark:bg-orange-800/50 px-3 py-1 rounded-full hover:bg-orange-200 dark:hover:bg-orange-700/50 transition-all">
                        View alternatives →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                <Activity className="w-5 h-5 mr-2 text-purple-600" />
                Recent Activities
              </h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-gray-50/50 hover:to-purple-50/50 dark:hover:from-gray-800/50 dark:hover:to-purple-900/20 transition-all duration-300 group">
                    <div className={cn(
                      "w-3 h-3 rounded-full mt-2 shadow-lg",
                      activity.type === "success" && "bg-gradient-to-r from-green-500 to-emerald-500",
                      activity.type === "info" && "bg-gradient-to-r from-blue-500 to-cyan-500",
                      activity.type === "warning" && "bg-gradient-to-r from-orange-500 to-red-500"
                    )}>
                      <div className={cn(
                        "w-full h-full rounded-full animate-ping opacity-75",
                        activity.type === "success" && "bg-green-500",
                        activity.type === "info" && "bg-blue-500",
                        activity.type === "warning" && "bg-orange-500"
                      )}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 dark:text-gray-100 font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {activity.action}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 text-sm text-white font-bold bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                View all activities →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}