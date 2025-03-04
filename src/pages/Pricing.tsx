import React, { useState } from "react";


const SubscriptionPlan: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState("yearly");

  return (
    <div className=" w-full h-full mx-auto p-6 bg-black text-white">
      <div className="">


        {/* Title */}
        <h2 className="text-green-500 text-xl font-semibold text-center mb-8">
          Choose Your Plan
        </h2>
      </div>
      

      {/* Yearly Plan */}
      <div
        className={`flex items-center justify-between p-4 rounded-lg mb-3 cursor-pointer ${
          selectedPlan === "yearly" ? "bg-gray-800" : "bg-gray-900"
        }`}
        onClick={() => setSelectedPlan("yearly")}
      >
        <input
          type="radio"
          name="plan"
          checked={selectedPlan === "yearly"}
          readOnly
          className="accent-green-500"
        />
        <div className="flex-1 ml-3">
          <p className="font-semibold">Yearly</p>
          <p className="text-sm text-gray-400">+ Save 50%</p>
          <p className="text-sm text-gray-400">+ Get 7 Days Free</p>
        </div>
        <p className="text-lg font-bold">$60</p>
      </div>

      {/* 3 Months Plan */}
      <div
        className={`flex items-center justify-between p-4 rounded-lg mb-3 cursor-pointer ${
          selectedPlan === "3months" ? "bg-gray-800" : "bg-gray-900"
        }`}
        onClick={() => setSelectedPlan("3months")}
      >
        <input
          type="radio"
          name="plan"
          checked={selectedPlan === "3months"}
          readOnly
          className="accent-green-500"
        />
        <div className="flex-1 ml-3">
          <p className="font-semibold">3 Months</p>
          <p className="text-sm text-gray-400">+ Save 20%</p>
          <p className="text-sm text-gray-400">+ Get 3 Days Free</p>
        </div>
        <p className="text-lg font-bold">$24</p>
      </div>

      {/* 1 Month Plan */}
      <div
        className={`flex items-center justify-between p-4 rounded-lg mb-3 cursor-pointer ${
          selectedPlan === "1month" ? "bg-gray-800" : "bg-gray-900"
        }`}
        onClick={() => setSelectedPlan("1month")}
      >
        <input
          type="radio"
          name="plan"
          checked={selectedPlan === "1month"}
          readOnly
          className="accent-green-500"
        />
        <div className="flex-1 ml-3">
          <p className="font-semibold">1 Month</p>
          <p className="text-sm text-gray-400">+ Save 10%</p>
        </div>
        <p className="text-lg font-bold">$8.4</p>
      </div>

      {/* Purchase Button */}
      <button className="w-full py-3 bg-green-500 text-white rounded-lg text-lg font-semibold mt-4">
        Continue to Purchase
      </button>

      {/* Info Text */}
      <p className="text-xs text-center text-gray-400 mt-4">
        If you choose to purchase a subscription, payment will be charged to
        your account, and your account will be charged within 24 hours.
      </p>

      {/* Terms and Conditions */}
      <p className="text-xs text-center text-green-500 mt-2 underline cursor-pointer">
        Terms and Conditions / Privacy Policy
      </p>
    </div>
  );
};
export default SubscriptionPlan;