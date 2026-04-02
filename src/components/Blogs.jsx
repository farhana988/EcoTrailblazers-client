// import React from 'react';

import { Link, useLoaderData } from "react-router-dom";
import Blog from "./Blog";
import Heading from "./Heading";

const Blogs = () => {
  const { blogData } = useLoaderData();

  return (
    <div>
      <Heading
        title={"Blogs"}
        subtitle={
          "Insightful articles on eco-conscious travel, sustainability tips, and adventure stories from the field. It provides inspiration and practical advice for travelers looking to explore the world responsibly while preserving its natural beauty."
        }
      ></Heading>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {blogData.slice(0, 5).map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <button className="btn btn-sm bg-primary text-white mt-5 hover:text-black">
          <Link to="/allBlogs"> Show More</Link>
        </button>
      </div>
    </div>
  );
};

export default Blogs;
