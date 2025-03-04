export default function Promotion() {
  return (
    <div className="w-full  mx-auto text-white rounded-xl overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="p-4 pb-2 flex justify-start">
        <h2 className="text-[#5C9C31] text-xl font-medium">Promotion</h2>
      </div>

      {/* Main Promotion Card */}
      <div className="px-4 pb-3 p-3">
        <div className="relative rounded-xl overflow-hidden bg-black">
          <div className="relative h-56 w-full">
            <img
              src="https://i.pinimg.com/736x/2b/f0/e0/2bf0e06f26135c159a64591c817f639e.jpg"
              alt="Person working out with weights"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className=" inset-0 flex flex-col justify-between p-4">
        <div className="flex justify-between items-center">
          <span className="text-[#5C9C31] font-medium">Active</span>
          <button className="text-[#5C9C31] text-sm flex items-center">
            View more
          </button>
        </div>
      </div>

      {/* Promotion Cards */}
      <div className="px-4 space-y-3 grid sm:grid-cols-2 gap-5">
        {/* Body Shaping Card */}
        <div className="flex rounded-xl overflow-hidden bg-black border border-gray-300">
          <div className="w-1/3 flex items-center justify-center p-2">
            <span className="text-[#5C9C31] text-xs font-bold text-center">
              BODY
              <br />
              SHAPING
            </span>
          </div>
          <div className="w-1/3 bg-[#5C9C31] flex flex-col items-center justify-center p-2">
            <span className="text-white text-xs font-bold">DISCOUNT</span>
            <span className="text-white text-3xl font-bold">50%</span>
            <span className="text-white text-xs font-bold">
              FOR NEW
              <br />
              MEMBER
            </span>
          </div>
          <div className="w-1/3 relative">
            <img
              src="https://img.freepik.com/free-psd/gym-fitness-social-media-banner-template_106176-545.jpg"
              alt="Body shaping exercise"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Promotion Cards */}
        <div className="flex rounded-xl overflow-hidden bg-black border border-gray-300">
          <div className="w-1/3 flex items-center justify-center p-2">
            <span className="text-[#5C9C31] text-xs font-bold text-center">
              FITNESS
              <br />
              GYM
            </span>
          </div>
          <div className="w-1/3 bg-[#5C9C31] flex flex-col items-center justify-center p-2">
            <span className="text-white text-xs font-bold">DISCOUNT</span>
            <span className="text-white text-3xl font-bold">70%</span>
            <span className="text-white text-xs font-bold">
              ONLY THIS
              <br />
              MONTH
            </span>
          </div>
          <div className="w-1/3 relative">
            <img
              src="https://img.freepik.com/premium-psd/gym-fitness-social-media-post-banner-template_301521-185.jpg"
              alt="Body shaping exercise"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Promotion Cards */}
        <div className="flex rounded-xl overflow-hidden bg-black border border-gray-300">
          <div className="w-1/3 flex items-center justify-center p-2">
            <span className="text-[#5C9C31] text-xs font-bold text-center">
              FITNESS
              <br />
              SHAPING
            </span>
          </div>
          <div className="w-1/3 bg-[#5C9C31] flex flex-col items-center justify-center p-2">
            <span className="text-white text-xs font-bold">DISCOUNT</span>
            <span className="text-white text-3xl font-bold">60%</span>
            <span className="text-white text-xs font-bold">
              FOR NEW
              <br />
              MEMBER
            </span>
          </div>
          <div className="w-1/3 relative">
            <img
              src="https://img.freepik.com/premium-psd/gym-fitness-social-media-post-banner-square-flyer-template-facebook-cover-template_550280-373.jpg"
              alt="Body shaping exercise"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
