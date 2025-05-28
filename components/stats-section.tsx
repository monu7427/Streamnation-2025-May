import { TrendingUp, Users, Star, Zap } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Happy Customers",
      color: "text-blue-600",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Customer Rating",
      color: "text-yellow-600",
    },
    {
      icon: TrendingUp,
      value: "50+",
      label: "Premium Apps",
      color: "text-green-600",
    },
    {
      icon: Zap,
      value: "24/7",
      label: "Instant Support",
      color: "text-purple-600",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center`}>
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
