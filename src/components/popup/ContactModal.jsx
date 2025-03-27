import { useState } from "react";

const ContactModal = ({isOpen, setIsOpen}) => {

  return (
    <div className="flex items-center justify-center bg-gray-400">
      
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center ">
          <div className="bg-[#341439] p-6 rounded-lg shadow-lg w-96">
          <h2 className="font-bold text-2xl justify-self-end cursor-pointer" onClick={()=>{setIsOpen(false)}}>X</h2>
            <h2 className="text-2xl font-semibold text-center mb-4">
              Contact Us
            </h2>
            
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                ></textarea>
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactModal;
