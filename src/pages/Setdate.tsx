"use client"

import { useState } from "react"
import { ArrowLeft, Calendar } from "lucide-react"
import { cn } from "../lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Button } from "../components/ui/button"

const DAYS_OF_WEEK = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]

export default function WeeklyGoal() {
  const [selectedDays, setSelectedDays] = useState<number>(7)
  const [firstDay, setFirstDay] = useState<string>("SATURDAY")

  const handleDaySelect = (day: number) => {
    setSelectedDays(day)
  }

  const handleSave = () => {
    window.history.back()
    console.log({
      weeklyTrainingDays: selectedDays,
      firstDayOfWeek: firstDay,
    })
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-start">
          <button
            className="p-2 -ml-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Title and Description */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold">Set your weekly gaol</h1>
            <p className="text-gray-400 text-sm sm:text-base">
              We recommend training at least 3 days weekly for a better result.
            </p>
          </div>

          {/* Weekly Training Days */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>Weekly training days</span>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((day) => (
                <button
                  key={day}
                  onClick={() => handleDaySelect(day)}
                  className={cn(
                    "h-12 rounded-xl text-lg font-medium transition-colors",
                    "hover:bg-green-600/20",
                    "focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black",
                    selectedDays === day ? "bg-green-500 text-black" : "bg-white/10 text-white",
                  )}
                >
                  {day}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[5, 6, 7].map((day) => (
                <button
                  key={day}
                  onClick={() => handleDaySelect(day)}
                  className={cn(
                    "h-12 rounded-xl text-lg font-medium transition-colors",
                    "hover:bg-green-600/20",
                    "focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black",
                    selectedDays === day ? "bg-green-500 text-black" : "bg-white/10 text-white",
                  )}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* First Day Selector */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>First day of week</span>
            </div>
            <Select value={firstDay} onValueChange={setFirstDay}>
              <SelectTrigger className="w-full h-12 bg-white/10 border-0 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black">
                <SelectValue placeholder="Select first day" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white rounded-md shadow-lg">
                {DAYS_OF_WEEK.map((day) => (
                  <SelectItem
                    key={day}
                    value={day}
                    className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-md"
                  >
                    {day}
                  </SelectItem>
                ))}
              </SelectContent>

            </Select>
          </div>

          {/* Save Button */}
          <Button
            onClick={handleSave}
            className={cn(
              "w-full h-12 text-base font-medium",
              "bg-green-500 hover:bg-green-600",
              "text-black",
              "transition-colors",
              "mt-8",
            )}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}

