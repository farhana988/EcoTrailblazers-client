/* eslint-disable react/prop-types */

import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Blog = ({ blog }) => {
  const { image, title, excerpt } = blog;
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="flex justify-center ">
      <div className="card bg-base-100 shadow-xl flex flex-col">
        <figure className="flex-shrink-0">
          <img src={image} alt={title} className="h-52 w-full " />
        </figure>
        <div className="card-body p-3 flex-1 flex flex-col justify-between">
          <h2 className="card-title text-base">{title}</h2>
          <p className="text-xs text-gray-500">
            {isExpanded ? excerpt : excerpt.slice(0, 80) + "..."}
          </p>

          <div className="card-actions justify-end">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="shadow-2xl shadow-primary border-2 rounded-2xl px-4 flex items-center
              gap-3 text-sm"
            >
              {isExpanded ? "Show Less" : "Read More"}
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
