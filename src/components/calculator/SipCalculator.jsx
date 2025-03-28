import { useState } from "react";

export default function SipCalculator() {
  const [amount, setAmount] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  // SIP Calculation Formula
  const calculateSIP = () => {
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    const futureValue =
      amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

    return futureValue.toFixed(2);
  };

  return (
    <div className="flex flex-col md:flex-row p-2 gap-5 shadow-2xl">
      {/* Left Section - Input Fields */}
      <div className="w-full md:w-1/2 bg-gray-300 p-6 md:p-8 rounded-xl shadow-lg mb-6 md:mb-0">
        
        {/* Monthly Investment */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Monthly Investment: ₹{amount}</label>
          <input
            type="range"
            min="500"
            max="100000"
            step="500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full cursor-pointer accent-blue-500"
          />
        </div>

        {/* Expected Return Rate */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Expected Return Rate: {rate}%</label>
          <input
            type="range"
            min="1"
            max="20"
            step="0.5"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full cursor-pointer accent-blue-500"
          />
        </div>

        {/* Investment Duration */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Investment Duration: {years} Years</label>
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full cursor-pointer accent-blue-500"
          />
        </div>
      </div>

      {/* Right Section - Result */}
      <div className="w-full md:w-1/2 bg-gray-300 p-6 md:p-8 rounded-xl shadow-lg text-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-blue-700">Estimate Future Value:</h3>
        <p className="text-3xl sm:text-4xl font-bold text-blue-900 mt-4">₹{calculateSIP()}</p>

      </div>
    </div>
  );
}
