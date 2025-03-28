import React, { useState } from "react";
import CalculatorTypeCard from "./CalculatorTypeCard";
import SipCalculator from "./SipCalculator";

function CalculatorSection() {
  const [selectedCalculator, setSelectedCalculator] = useState("");

  return (
    <div className="p-6">
      <h2 className="w-full">Tools & Calculators</h2>

      {/* Calculator Type Cards */}
      <div className="flex flex-wrap justify-center md:justify-center gap-4">
        <CalculatorTypeCard />
        <CalculatorTypeCard />
        <CalculatorTypeCard />
        <CalculatorTypeCard />
        <CalculatorTypeCard />
      </div>
      <div>
        <SipCalculator/>
      </div>
    </div>
  );
}

export default CalculatorSection;
