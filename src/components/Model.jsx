import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Model = ({ model }) => {

  const [isSubscribed, setIsSubscribed] = useState(false);

  function subscribeHandler () {
    setIsSubscribed(true);

    toast.success(`Added ${model.title} To the cart!`)

  }

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-white group">

      {/* Top Section */}
      <div className="relative bg-gray-200 flex justify-center items-center h-44 overflow-hidden">

        {/* Popular Badge */}
        {model.status && (
          <div
            className={`absolute top-3 right-3 text-white text-xs font-semibold px-3 py-1 rounded-full z-20
            ${model.status === "popular"
                ? "bg-red-500"
                : model.status === "favourite"
                  ? "bg-pink-500"
                  : model.status === "mostwanted"
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-500"
              }`}
          >
            {model.status === "popular" && "🔥 POPULAR"}
            {model.status === "favourite" && "❤️ FAVOURITE"}
            {model.status === "mostwanted" && "⭐ MOST WANTED"}
          </div>
        )}

        {/* Image */}
        <img
          src={model.image}
          alt={model.title}
          className="w-24 h-24 object-contain transition-transform duration-300 scale-120 group-hover:scale-135"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">
          {model.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 whitespace-pre-line">
          {model.description}
        </p>

        {/* Price */}
        {
          model.price ?
            <div className="text-2xl font-bold text-gray-900 mt-2">
              ${model.price}
              <span className="text-sm font-normal text-gray-500"> /month</span>
            </div>
            : <h2 className='font-bold text-2xl text-green-500'>Free</h2>
        }

        {/* Button */}
        <button 
          onClick={subscribeHandler}
          disabled = {isSubscribed}
          className={`btn mt-3 ${isSubscribed ? 'bg-green-600' : 'bg-red-600'} text-white py-3 rounded-xl font-semibold transition`}
          >
          {
            isSubscribed ?
              'Subscribed'
            : 'Subscribe Now'
          }
        </button>

      </div>
    </div>
  );
};

export default Model;