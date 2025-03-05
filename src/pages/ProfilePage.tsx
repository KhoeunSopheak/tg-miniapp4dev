"use client"

import { useState } from "react"
import { ChevronRight, Hand } from "lucide-react"
import { cn } from "../lib/utils"
import { Avatar, AvatarImage } from "../components/ui/avatar"
import { useNavigate } from "react-router-dom";

export default function FitnessApp() {
  const [activeTab, setActiveTab] = useState("beginner")
  const navigate = useNavigate();

  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  
  // Get the total number of days in the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  // Calculate the range (4 days before and 4 days after today)
  const startDay = Math.max(1, currentDay - 4);
  const endDay = Math.min(daysInMonth, currentDay + 4);
  
  // Generate only the required days
  const days = Array.from({ length: endDay - startDay + 1 }, (_, index) => startDay + index);

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
      image: "https://t4.ftcdn.net/jpg/01/74/21/25/360_F_174212531_cerVf4uP6vinBWieBB46p2P5xVhnsNSK.jpg",
      category: "intermediate",
    },
    {
      title: "ABS BEGINNER",
      duration: "20 MINS",
      exercises: "16 EXERCISES",
      image: "https://freerangestock.com/sample/114350/women-doing-exercises-on-yoga-mats-in-a-gym.jpg",
      category: "advance",
    }
  ]

  return (
      <div className="w-full h-auto bg-black text-white rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 flex justify-between items-center">
          <span className="text-gray-400">Home</span>
          <Avatar className="h-16 w-16">
            <AvatarImage className="object-cover" sizes="50px" src="https://i.pinimg.com/736x/61/28/51/612851730703526ac510dcbaca260117.jpg" alt="User" />
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
              <button 
      className="flex items-center gap-1"
      onClick={() => navigate("/weeklygaol")}
    >
      <span className="text-green-500">1/7</span>
      <ChevronRight className="h-4 w-4 text-gray-400" />
    </button>
            </div>

            <div className="flex justify-between">
      {days.map((day) => (
        <div
          key={day}
          className={cn(
            "flex flex-col items-center justify-center w-8 h-8 rounded-full",
            day === currentDay ? "bg-green-500 text-black" : "text-gray-400"
          )}
        >
          <span className="text-xs">{day}</span>
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
                {workouts
                  .filter((workout) => workout.category === "intermediate")
                  .map((workout, index) => (
                    <WorkoutCard key={index} workout={workout} />
                  ))}
              </>
            )}

            {activeTab === "advance" && (
               <>
               {workouts
                 .filter((workout) => workout.category === "advance")
                 .map((workout, index) => (
                   <WorkoutCard key={index} workout={workout} />
                 ))}
             </>
            )}
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
    <a href="/workout" className="block">
    <div className="relative rounded-xl overflow-hidden h-24 md:h-32">
      <img src={workout.image || "/placeholder.svg"} alt={workout.title} className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-between">
        <div className="font-bold text-lg">{workout.title}</div>
        <div className="text-xs text-gray-300">
          {workout.duration} • {workout.exercises}
        </div>
      </div>
    </div>
    </a>
  )
}

