// import React from 'react';

import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Heading from "./Heading";

import { MdTimer } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Details = () => {
  const {
    image,
    adventure_title,
    short_description,
    adventure_cost,
    booking_availability,
    location,
    duration,
    adventure_level,
    included_items,
    eco_friendly_features,
    max_group_size,
    special_instructions,
  } = useLoaderData();

  const [showModal, setShowModal] = useState(false);

  const handleTalkWithExpert = () => {
    const currentTime = new Date();

    const hours = currentTime.getHours();

    if (hours >= 10 && hours < 20) {
      window.open("https://meet.google.com/", "_blank");
    } else {
      setShowModal(true);
    }
  };
  return (
    <div className=" flex flex-col items-center justify-center bg-gray-100 py-10 ">
      <Heading
        title={" Details Page"}
        subtitle={
          "Provides in-depth information about each eco-adventure experience, including trip highlights, sustainability practices, pricing, and itinerary details. "
        }
      ></Heading>
      <div className="card card-compact shadow-2xl shadow-primary bg-white rounded-2xl overflow-hidden">
        <figure>
          <img
            className="w-full h-60 md:h-96 lg:h-[500px] object-cover"
            src={image}
            alt={adventure_title}
          />
        </figure>
        <div className="card-body ">
          <div className="space-y-3">
            <h2 className="text-2xl  font-bold text-gray-800">
              {adventure_title}
            </h2>
            <p className="text-sm text-gray-600">{short_description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 ">
            <div className="mt-6">
              <h3 className=" font-semibold text-gray-800">
                Adventure Details
              </h3>
              <ul className="space-y-0.5 mt-4 text-xs text-gray-600">
                <li>
                  <strong>Location:</strong> {location}
                </li>
                <li>
                  <strong>Duration:</strong> {duration}
                </li>
                <li>
                  <strong>Adventure Level:</strong> {adventure_level}
                </li>
                <li>
                  <strong>Cost:</strong> ${adventure_cost}
                </li>
                <li>
                  <strong>Booking Availability:</strong> {booking_availability}
                </li>
                <li>
                  <strong>Max Group Size:</strong> {max_group_size}
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className=" font-semibold text-gray-800">Included Items</h3>
              <ul className="list-disc pl-4 space-y-0.5 text-xs mt-4 text-gray-600">
                {included_items.map((item, index) => (
                  <li key={index}> {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2">
            <div className="mt-6">
              <h3 className="font-semibold text-gray-800">
                Eco-Friendly Features
              </h3>
              <ul className="list-disc pl-4 space-y-0.5 mt-4 text-xs text-gray-600">
                {eco_friendly_features.map((feature, index) => (
                  <li key={index}> {feature}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-800">
                Special Instructions
              </h3>
              <ul className="list-disc pl-6 space-y-0.5 text-xs mt-4 text-gray-600">
                {special_instructions.map((instruction, index) => (
                  <li key={index}> {instruction}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card-actions justify-end mt-6">
            <button
              onClick={handleTalkWithExpert}
              className=" btn btn-sm bg-primary text-white hover:text-black"
            >
              Talk with Expert
            </button>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal modal-open bg-green-50">
            <div className="modal-box text-center relative py-10">
              {/* 🔴 Cross Icon Top Right */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
              >
                <RxCross2 />
              </button>
              <div
                className="text-5xl text-primary left-16 top-12 absolute animate__animated 
            animate__infinite animate__wobble animate__slower "
              >
                <MdTimer />
              </div>
              <h2 className="text-2xl font-bold my-4 text-black">
                Consultation Hours
              </h2>
              <p className="text-slate-500 px-6 py-2 text-sm">
                Our experts are available from 10:00 AM to 8:00 PM. Please come
                back during these hours for a consultation.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
