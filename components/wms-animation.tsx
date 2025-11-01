"use client"

import { motion } from "framer-motion"
import { Package, BarChart3, TrendingUp, Clock, Shield, Activity, Truck } from "lucide-react"

export function WMSAnimation() {
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const slideVariants = {
    animate: {
      x: [0, 10, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Pedidos Card */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-8 left-8 bg-white rounded-lg shadow-lg p-4 border border-purple-100"
        style={{ animationDelay: "0s" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <Package className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Pedidos Hoy</p>
            <motion.p
              className="text-2xl font-bold text-purple-600"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              247
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Métricas Dashboard */}
      <motion.div
        variants={slideVariants}
        animate="animate"
        className="absolute top-16 right-12 bg-white rounded-lg shadow-lg p-4 border border-blue-100"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <BarChart3 className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-gray-900">Métricas</span>
        </div>
        <div className="flex gap-2">
          {[40, 65, 80, 45, 90, 70].map((height, i) => (
            <motion.div
              key={i}
              className="w-3 bg-blue-500 rounded-t"
              style={{ height: `${height}%` }}
              animate={{ height: [`${height}%`, `${height + 10}%`, `${height}%`] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Evolución Chart */}
      <motion.div
        variants={pulseVariants}
        animate="animate"
        className="absolute top-48 left-16 bg-white rounded-lg shadow-lg p-4 border border-green-100"
        style={{ animationDelay: "1s" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="h-4 w-4 text-green-600" />
          <span className="text-sm font-medium text-gray-900">Evolución</span>
        </div>
        <div className="relative h-12 w-20">
          <svg className="w-full h-full" viewBox="0 0 80 48">
            <motion.path
              d="M 0 40 Q 20 20 40 25 T 80 15"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
          </svg>
        </div>
      </motion.div>

      {/* Rapidez Indicator */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-44 right-40 bg-white rounded-lg shadow-lg p-4 border border-orange-100"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-orange-600" />
          <div>
            <p className="text-xs text-gray-600">Tiempo Promedio</p>
            <motion.p
              className="text-lg font-bold text-orange-600"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              2.3s
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Transporte Card */}
      <motion.div
        variants={slideVariants}
        animate="animate"
        className="absolute top-64 right-16 bg-white rounded-lg shadow-lg p-4 border border-indigo-100"
        style={{ animationDelay: "2.2s" }}
      >
        <div className="flex items-center gap-2">
          <motion.div animate={{ x: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}>
            <Truck className="h-5 w-5 text-indigo-600" />
          </motion.div>
          <div>
            <p className="text-xs text-gray-600">En Tránsito</p>
            <motion.p
              className="text-lg font-bold text-indigo-600"
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              18
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Control Panel */}
      <motion.div
        variants={slideVariants}
        animate="animate"
        className="absolute bottom-16 left-24 bg-white rounded-lg shadow-lg p-4 border border-red-100"
        style={{ animationDelay: "2s" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Shield className="h-4 w-4 text-red-600" />
          <span className="text-sm font-medium text-gray-900">Control</span>
        </div>
        <div className="flex gap-2">
          <motion.div
            className="w-3 h-3 bg-green-500 rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="w-3 h-3 bg-yellow-500 rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
          />
          <motion.div
            className="w-3 h-3 bg-red-500 rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
          />
        </div>
      </motion.div>

      {/* Tablero Central */}
      <motion.div
        variants={pulseVariants}
        animate="animate"
        className="absolute bottom-8 right-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-4 text-white"
        style={{ animationDelay: "2.5s" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Activity className="h-5 w-5" />
          <span className="text-sm font-medium">Tablero WMS</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <motion.div
              className="text-lg font-bold"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              98.5%
            </motion.div>
            <div>Eficiencia</div>
          </div>
          <div>
            <motion.div
              className="text-lg font-bold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
            >
              24/7
            </motion.div>
            <div>Activo</div>
          </div>
        </div>
      </motion.div>

      {/* Background animated circles */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-purple-100 rounded-full opacity-20"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-32 left-32 w-24 h-24 bg-blue-100 rounded-full opacity-20"
        animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
      />
    </div>
  )
}
