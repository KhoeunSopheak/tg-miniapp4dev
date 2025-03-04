import {
  Grid3x3,
  Download,
  Settings,
  Award,
  Heart,
  FileText,
  Dumbbell,
} from "lucide-react"

export default function Info() {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Background Image */}
      <div className="relative h-80">
        <img
          src="https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?q=80&w=2070&auto=format&fit=crop"
          alt="Manhattan Bridge"
          className="object-cover"
        />
      </div>

      {/* Profile Section */}
      <div className="relative -mt-16 px-6 pb-4">
        {/* Profile Picture */}
        <div className="relative">
          <div className="absolute -top-16 left-0 h-32 w-32 rounded-full border-4 border-green-500 overflow-hidden">
            <div className="h-full w-full bg-purple-300 flex items-center justify-center">
              <img
                src="https://i.pinimg.com/736x/61/28/51/612851730703526ac510dcbaca260117.jpg"
                alt="Profile"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -top-6 left-20 bg-yellow-300 p-2 rounded-md">
            <div className="text-black font-bold text-lg">1⚡</div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="mt-20">
          <h1 className="text-5xl font-bold mb-2">Alisa</h1>
          <div className="flex items-center gap-4 text-gray-300 mb-4">
            <div className="flex items-center gap-1">
              <Dumbbell className="h-4 w-4" />
              <span>Elevate</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-lg">📅</span>
              <span>Frebuary 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-lg">📍</span>
              <span>Cambodia, Phnom Penh</span>
            </div>
          </div>
          <p className="text-lg mb-8">
            Based in Phnom Penh Trying to maintain a healthy lifestyle despite my busy schedules 💪
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {/* Workouts */}
          <div className="flex flex-col items-center">
            <div className="relative h-24 w-24 mb-2">
              <div className="absolute inset-0 rounded-full border-4 border-purple-900/30"></div>
              <div
                className="absolute inset-0 rounded-full border-4 border-purple-500"
                style={{
                  clipPath:
                    "polygon(50% 50%, 50% 0%, 60% 0%, 70% 0%, 80% 0%, 90% 0%, 100% 0%, 100% 10%, 100% 20%, 100% 30%, 100% 40%, 100% 50%)",
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold">5</span>
              </div>
            </div>
            <span className="text-gray-400">Workouts</span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="relative h-24 w-24 mb-2">
              <div className="absolute inset-0 rounded-full border-4 border-blue-900/30"></div>
              <div
                className="absolute inset-0 rounded-full border-4 border-blue-500"
                style={{
                  clipPath:
                    "polygon(50% 50%, 50% 0%, 60% 0%, 70% 0%, 80% 0%, 90% 0%, 100% 0%, 100% 10%, 100% 20%, 100% 30%, 100% 40%, 100% 50%, 100% 60%, 100% 70%, 100% 80%, 100% 90%, 100% 100%, 90% 100%, 80% 100%, 70% 100%, 60% 100%, 50% 100%, 40% 100%, 30% 100%, 20% 100%, 10% 100%, 0% 100%, 0% 90%, 0% 80%, 0% 70%, 0% 60%, 0% 50%)",
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold">106</span>
              </div>
            </div>
            <span className="text-gray-400">Minutes</span>
          </div>

          {/* Calories */}
          <div className="flex flex-col items-center">
            <div className="relative h-24 w-24 mb-2">
              <div className="h-24 w-24 rounded-full overflow-hidden bg-gradient-to-b from-orange-500 to-yellow-500 flex items-center justify-center">
                <span className="text-3xl font-bold">0</span>
              </div>
            </div>
            <span className="text-gray-400">Calories</span>
          </div>

          {/* Cheers */}
          <div className="flex flex-col items-center">
            <div className="relative h-24 w-24 mb-2">
              <div className="absolute inset-0 rounded-full border-4 border-pink-900/30"></div>
              <div
                className="absolute inset-0 rounded-full border-4 border-pink-400"
                style={{
                  clipPath: "polygon(50% 50%, 50% 0%, 60% 0%, 70% 0%, 80% 0%, 90% 0%, 100% 0%, 100% 10%)",
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold">2</span>
              </div>
              <div className="absolute bottom-0 right-0 text-xl">👏</div>
            </div>
            <span className="text-gray-400">Cheers</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center mb-8">
      <button className="p-4">
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=https://your-link.com"
          alt="QR Code"
          className="h-32 w-32 object-cover border border-green-500"
        />
      </button>
    </div>
      </div>
    </div>
  )
}

