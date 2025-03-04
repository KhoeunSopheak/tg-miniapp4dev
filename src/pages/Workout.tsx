"use client"

import { useState } from "react"
import { Play } from "lucide-react"

const exercises = [
  {
    id: 1,
    title: "Lose body fat one",
    duration: "20s",
    image: "https://balancefitness.com/wp-content/uploads/2019/03/six-pack-abs.jpg",
    video: "https://youtu.be/6LqqeBtFn9M?si=RH1HgU-AZYf6NK7x",
  },
  {
    id: 2,
    title: "Banded Squat",
    duration: "20s",
    image: "https://i.ytimg.com/vi/HzRwKt2NLQ8/maxresdefault.jpg",
    video: "https://youtu.be/ZqNYnqdjxGw?si=kyJmgUMdGbWSUx0K",
  },
  {
    id: 3,
    title: "Back muscles",
    duration: "20s",
    image:
      "https://hips.hearstapps.com/menshealth-uk/main/thumbs/34966/bigback.jpg",
    video: "https://youtu.be/gcNh17Ckjgg?si=uHFLPnzysR6pKeXt",
  },
  {
    id: 4,
    title: "Hand muscles",
    duration: "20s",
    image: "https://media.istockphoto.com/id/1256980364/photo/sport-injury-pain-health-concept-of-strong-man-with-big-muscles-body-holding-his-painful.jpg?s=612x612&w=0&k=20&c=jmSXMOV9dzclly6Knt35Tsdu-N76Ci4k0RAteeHFEYI=",
    video: "https://youtu.be/rmdn5X_KLkY?si=ZaLY1oOizHI3vVrZ",
  },
  {
    id: 5,
    title: "Chest muscles",
    duration: "20s",
    image:
      "https://i.ytimg.com/vi/ZyjQar-XgBc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBO4Bt6AIPb_-Us0oglkySLSRcsfg",
    video: "https://youtu.be/p73bjNGgsuA?si=9A8rZ6XxSRfKmGCL",
  },
]

export default function Workout() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  // Function to extract YouTube video ID
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  return (
    <div className="min-h-screen w-full bg-black text-white mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="pb-3 p-3">
        <div className="relative overflow-hidden bg-black">
          <div className="relative h-60 w-full">
            <img
              src="https://phantom-marca.unidadeditorial.es/47d16b4c50d24d2010d04fa45a0966bb/resize/828/f/jpg/assets/multimedia/imagenes/2022/02/08/16443258478254.jpg"
              alt="Person working out with weights"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center p-6">
              <h1 className="text-2xl font-bold flex items-start text-white">ABS BEGINNER</h1>
              <p className="text-white text-sm flex items-start">20 MINS * 16 EXERCISES</p>
            </div>
          </div>
        </div>
      </div>

      {/* Exercise Cards */}
      <div className="space-y-6">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="rounded-xl overflow-hidden border border-gray-800 bg-[#111] p-4">
            <h1 className="text-1xl font-bold text-white my-4 -mt-0.5">
              {exercise.title} * {exercise.duration}
            </h1>
            <div className="relative">
              <img
                src={exercise.image || "/placeholder.svg"}
                alt={exercise.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <button
                onClick={() => setSelectedVideo(exercise.video)}
                className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded-lg"
              >
                <div className="bg-primary/90 rounded-full p-3">
                  <Play className="h-6 w-6 text-white" />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-3xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-0 text-white hover:text-primary"
              onClick={() => setSelectedVideo(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <span className="sr-only">Close</span>
            </button>
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo)}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}

