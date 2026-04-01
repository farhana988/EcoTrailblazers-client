import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const AllAdventures = () => {
  const data = useLoaderData();
  return (
    <div className="pt-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {data.map((singleData) => (
          <Card key={singleData.id} singleData={singleData}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllAdventures;
