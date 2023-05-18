import React from "react";

const RowCard = () => {
    return (
        <div className="w-full h-64 bg-white shadow-md rounded-md">
          <div className="flex">
            {/* Card Image (Half of card space) */}
            <div className="w-1/2">
              <img
                className="h-64 w-full object-cover"
                src="https://via.placeholder.com/300"
                alt="Card Image"
              />
            </div>
    
            {/* Card Content (Header, Description, Button) */}
            <div className="w-1/2  p-4">
              <h2 className="text-xl font-semibold mb-2">Card Header</h2>
              <p className="text-gray-600 mb-4">
                Card Description goes here. It can be multiple lines long and will
                wrap accordingly.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Button
              </button>
            </div>
          </div>
        </div>
      );
};

export default RowCard;