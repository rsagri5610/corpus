import React from "react";
import SchoolIcon from "@mui/icons-material/School";

function CalculatorTypeCard({ typeName }) {
    
  return (
    <div
      className=""
      onClick={() => {
        alert("cal work");
      }}
    >
      <div className="w-full max-w-xs md:max-w-md bg-gray-300 rounded-2xl mt-7 text-black font-semibold mx-auto p-4 hover:bg-[#341439] hover:text-amber-50 cursor-pointer">
        <div className="flex justify-center items-center space-x-2 flex-wrap">
          <SchoolIcon
            className="text-gray-400 w-12 h-12 sm:w-14 sm:h-14"
            style={{ fontSize: "50px" }}
          />
          <div className="text-center sm:text-lg lg:text-xl">
            <p className="text-lg">Child Education</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CalculatorTypeCard;
