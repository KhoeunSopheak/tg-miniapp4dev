"use client"

import { useState } from "react"
import { ChevronRight, Hand } from "lucide-react"
import { cn } from "../lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"

export default function FitnessApp() {
  const [activeTab, setActiveTab] = useState("beginner")

  const days = [
    { day: "22", date: "22" },
    { day: "23", date: "23" },
    { day: "24", date: "24", active: true },
    { day: "25", date: "25" },
    { day: "26", date: "26" },
    { day: "27", date: "27" },
    { day: "28", date: "28" },
    { day: "01", date: "01" },
    { day: "02", date: "02" },
  ]

  const workouts = [
    {
      title: "ABS BEGINNER",
      duration: "20 MINS",
      exercises: "16 EXERCISES",
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
      category: "beginner",
    },
    {
      title: "ABS BEGINNER",
      duration: "20 MINS",
      exercises: "16 EXERCISES",
      image: "https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "beginner",
    },
    {
      title: "ABS BEGINNER",
      duration: "20 MINS",
      exercises: "16 EXERCISES",
      image: "https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "beginner",
    },
    {
      title: "ABS BEGINNER",
      duration: "20 MINS",
      exercises: "16 EXERCISES",
      image: "/placeholder.svg?height=200&width=400",
      category: "intermediate",
    },
  ]

  return (
      <div className="w-full h-auto bg-black text-white rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 flex justify-between items-center">
          <span className="text-gray-400">Home</span>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
        </div>

        <div className="px-4 pb-20">
          {/* User greeting */}
          <div className="flex items-center gap-2 mb-4">
            <Hand className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            <span className="text-xl font-bold">Alisa</span>
          </div>

          {/* Weekly goal tracker */}
          <div className="bg-white rounded-2xl p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-black">Weekly gaol</span>
              <div className="flex items-center gap-1">
                <span className="text-green-500">1/7</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="flex justify-between">
              {days.map((day, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex flex-col items-center justify-center w-8 h-8 rounded-full",
                    day.active ? "bg-green-500 text-black" : "text-gray-400",
                  )}
                >
                  <span className="text-xs">{day.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Difficulty tabs */}
          <div className="border-b border-zinc-800 mb-6">
            <div className="flex justify-between">
              <button
                onClick={() => setActiveTab("beginner")}
                className={cn(
                  "pb-2 text-sm font-medium",
                  activeTab === "beginner" ? "border-b-2 border-white text-white" : "text-gray-400",
                )}
              >
                Beginner
              </button>
              <button
                onClick={() => setActiveTab("intermediate")}
                className={cn(
                  "pb-2 text-sm font-medium",
                  activeTab === "intermediate" ? "border-b-2 border-white text-white" : "text-gray-400",
                )}
              >
                Intermediate
              </button>
              <button
                onClick={() => setActiveTab("advance")}
                className={cn(
                  "pb-2 text-sm font-medium",
                  activeTab === "advance" ? "border-b-2 border-white text-white" : "text-gray-400",
                )}
              >
                Advance
              </button>
            </div>
          </div>

          {/* Workout cards */}
          <div className="space-y-4">
            {activeTab === "beginner" && (
              <>
                {workouts
                  .filter((workout) => workout.category === "beginner")
                  .map((workout, index) => (
                    <WorkoutCard key={index} workout={workout} />
                  ))}
              </>
            )}

            {activeTab === "intermediate" && (
              <>
                <div className="text-gray-400 mb-2">Intermediate</div>
                {workouts
                  .filter((workout) => workout.category === "intermediate")
                  .map((workout, index) => (
                    <WorkoutCard key={index} workout={workout} />
                  ))}
              </>
            )}

            {activeTab === "advance" && <div className="text-gray-400 mb-2">No advanced workouts available yet</div>}
          </div>
        </div>
      </div>
  )
}

interface Workout {
  title: string
  duration: string
  exercises: string
  image: string
  category: string
}

function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <div className="relative rounded-xl overflow-hidden h-24 md:h-32">
      <img src={workout.image || "/placeholder.svg"} alt={workout.title} className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-between">
        <div className="font-bold text-lg">{workout.title}</div>
        <div className="text-xs text-gray-300">
          {workout.duration} • {workout.exercises}
        </div>
      </div>
    </div>
  )
}

