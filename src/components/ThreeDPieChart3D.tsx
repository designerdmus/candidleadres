import { motion } from "framer-motion"
import pieChart3dImg from "@/imports/pie-chart-3d-transparent.png"

export default function ThreeDPieChart3D({ size = 220 }: { size?: number }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative cursor-pointer select-none inline-flex items-center justify-center w-full"
      style={{ maxWidth: size }}
    >
      {/* Soft Ambient Radial Backlight Glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none opacity-80"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.25) 0%, rgba(37, 99, 235, 0.15) 50%, transparent 75%)",
          filter: "blur(30px)",
        }}
      />

      {/* Floating 3D Pie Chart Graphic Asset */}
      <motion.img
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        src={pieChart3dImg}
        alt="3D Extruded Pie Chart"
        className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_20px_45px_rgba(0,10,35,0.6)]"
        style={{
          filter: "brightness(1.05) contrast(1.05)",
        }}
      />
    </motion.div>
  )
}
