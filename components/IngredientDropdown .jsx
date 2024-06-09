import React, { useState } from 'react';

const IngredientDropdown = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`border border-gray-700 rounded-lg overflow-hidden ${
        data.status === 'good'
          ? 'bg-green-500'
          : data.status === 'neutral'
          ? 'bg-yellow-500'
          : 'bg-red-500'
      }`}
    >
      <div className="p-4 flex justify-between items-center cursor-pointer" onClick={toggleExpand}>
        <h2 className="text-lg sm:text-xl font-medium text-white">{data.name}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isExpanded && (
       <div className="p-4 bg-slate-900 text-gray-300">
       <div className="mb-4">
         <p className="text-lg font-medium mb-2">Description</p>
         <p>{data.description}</p>
       </div>

       {data.recommended &&
       <div>

         <p className="text-lg font-medium mb-2">Recommended Quantity</p>
         <div className="flex items-center">
           <div className="bg-gray-800 rounded-full p-2 mr-2">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5 text-green-400"
               viewBox="0 0 20 20"
               fill="currentColor"
             >
               <path
                 fillRule="evenodd"
                 d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                 clipRule="evenodd"
               />
             </svg>
           </div>
           <p>{data.recommended}</p>
         </div>
       </div>
}
     </div>
      )}
    </div>
  );
};

export default IngredientDropdown