import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Slider from "../slider/Slider";
import Sidebar from "../sidebar/Sidebar";
import ContactModal from "../popup/ContactModal";
import CalculatorSection from "../calculator/CalculatorSection"

function Home() {
  const [isOpen, setIsOpen] = useState(true);

  
  return (
    <>
      <div className="flex flex-col">
        <Navbar />

        <div className="border-2 p-5 mt-16">
          <h1>Title/SubTitle & Icon Text Section</h1>
        </div>

        <div className="border-2 p-5">
          <h1>Call Us Section</h1>
        </div>
        <div>
        <Slider />
        
        </div>
        <Sidebar/>
        <CalculatorSection/> 
        <div className="border-2 p-5">
          <h1>Calculator Section</h1>
          <div>
            <h1>Calculator type</h1>
          </div>
          
          <div className="flex">
            <div className=" border-2 p-20 w-[50%]">
              <h1>Calculator Fields</h1>
            </div>
            <div className="border-2 p-20 w-[50%]">
              <h1>Results</h1>
            </div>
          </div>
        </div>

        <div className="border-2 p-5">
          <h1>SIP Benifits Section</h1>
        </div>

        <div className="border-2 p-5">
          <h1>FAQ Section</h1>
        </div>

        <div className="border-2 p-5">
          <h1>About us & Contact us</h1>
        </div>

        <Footer />
        
        <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
}

export default Home;
