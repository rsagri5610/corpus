import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar/>

        <div className="border-2 p-5 mt-16">
          <h1>Title/SubTitle & Icon Text Section</h1>
        </div>

        <div className="border-2 p-5">
          <h1>Call Us Section</h1>
        </div>

        <div className="border-2 p-5">
          <h1>Invest Through Us Section</h1>
          <div className="border-2 p-15">
            <h1>Slider Section</h1>
            
          </div>
        </div>

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

        <Footer/>
      </div>
    </>
  );
}

export default Home;
