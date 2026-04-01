// import React from 'react'

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ singleData }) {
  const { adventure_title, image, eco_friendly_features, id } = singleData;
  return (
    <div className="card card-compact shadow-xl bg-white rounded-md">
      <figure>
        <img className="w-full h-40 " src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base">{adventure_title}</h2>

        <ul className="list-disc pl-4 gap-0.5 flex flex-col flex-grow">
          {eco_friendly_features.map((feature, index) => (
            <li key={index} className="text-xs text-gray-700">
              {feature}
            </li>
          ))}
        </ul>

        <div className="card-actions justify-end">
          <button className="btn bg-primary text-white btn-sm hover:text-black">
            <Link to={`/details/${id}`}>Explore</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  singleData: PropTypes.object,
};

export default Card;
