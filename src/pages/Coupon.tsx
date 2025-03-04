"use client"

import type React from "react"
import { useState } from "react"
import image from "../assets/pon2.jpg"

const Coupon: React.FC = () => {
  const [claimed, setClaimed] = useState(false)

  const handleClaim = () => {
    setClaimed(true)
    setTimeout(() => {
      setClaimed(false)
    }, 2000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white w-full max-w-md mx-auto">
      {/* Header */}
      <div className="p-4 pt-6 sm:pt-4">
        <h1 className="text-[#7CFC00] text-2xl font-bold">Hot Coupon</h1>
      </div>

      {/* Main Content - Positioned at the top */}
      <div className="flex flex-col items-center px-4 pt-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">FREE 7 DAYS</h2>
        <p className="text-sm text-gray-400 text-center mt-1">click it now to get free</p>

        {/* Coupon Card */}
        <div className="w-full max-w-xs mt-4 rounded-xl overflow-hidden border border-gray-800 shadow-lg">
          <div className="relative h-28 sm:h-32 bg-gradient-to-r from-gray-900 to-black">
            {/* Background image - more visible now */}
            <div className="absolute inset-0">
              <img
                src={image}
                alt="image"
                className="w-full h-full object-cover opacity-50"
              />
            </div>

            <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
              <p className="text-white font-bold mb-2">FREE CUPON</p>
              <button
                onClick={handleClaim}
                className="bg-[#7CFC00] hover:bg-[#5fb300] active:bg-[#4d9200] text-black font-medium py-2 px-6 rounded-full transition-all transform active:scale-95 touch-manipulation"
              >
                {claimed ? "Claimed!" : "Claim Now!"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Empty space to push content to top */}
      <div className="flex-1"></div>
    </div>
  )
}

export default Coupon