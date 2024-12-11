import React from 'react';

const Cards = ({ item }) => {
  return (
    <div className="group">
      <div className="border rounded-lg flex flex-col gap-4 items-center justify-center p-6 bg-gray-50 hover:bg-gray-800 transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl">
        <img 
          src={item.img} 
          alt={item.name} 
          className="w-80 h-48 object-contain rounded-md"
        />
        <h3 className="font-semibold text-lg text-gray-800 group-hover:text-yellow-400 transition duration-300 ease-in-out">
          {item.name}
        </h3>
        <p className="text-gray-600 text-sm group-hover:text-gray-200 line-clamp-3 transition duration-300 ease-in-out">
          {item.desc.length > 100 ? `${item.desc.substring(0, 100)}...` : item.desc}
        </p>
        <div className="flex justify-between items-center w-full gap-4 pt-4">
          <p className="font-bold text-gray-800 group-hover:text-gray-100 transition duration-300 ease-in-out">
            {item.price}
          </p>
          <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md hover:scale-105 hover:bg-yellow-300 transition-all duration-300 ease-in-out">
            Reserve agora
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
