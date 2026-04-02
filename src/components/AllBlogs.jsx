import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";
import Heading from "./Heading";

const AllBlogs = () => {
  const data = useLoaderData();

  return (
    <div className="pt-5">
      <Heading
        title={"Blogs"}
        subtitle={
          "Insightful articles on eco-conscious travel, sustainability tips, and adventure stories from the field. It provides inspiration and practical advice for travelers looking to explore the world responsibly while preserving its natural beauty."
        }
      ></Heading>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {data.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
