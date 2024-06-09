import React, { useState } from 'react';

const WarningDisclaimer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative  px-5">
      <div
        className="cursor-pointer hover:text-yellow-600 transition-colors flex items-center justify-center text-yellow-400"
        onClick={togglePopup}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <h1 className='text-sm font-extralight'>Warning click here to view</h1>
      </div>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className=" rounded-lg shadow-lg p-4 max-w-sm relative bg-yellow-300">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closePopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <p className="font-medium text-yellow-800">Important Notice</p>
            <p className="text-yellow-700">
              The information presented on this page is generated using advanced AI technology and provides a rough analysis based on the available data. While we strive for accuracy, the results may not always be precise or comprehensive. This tool is designed to offer a general overview and should not replace professional advice or detailed ingredient analysis. Users are encouraged to verify the information independently and consult experts for specific concerns regarding product ingredients this website is to know what ingrdents description
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WarningDisclaimer;