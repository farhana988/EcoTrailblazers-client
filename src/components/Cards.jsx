import { Link, useLoaderData } from "react-router-dom";
import Card from "./Card";
import Heading from "./Heading";

const Cards = () => {
  const { cardData } = useLoaderData();

  return (
    <div>
      <Heading
        title={"Adventure Experiences"}
        subtitle={
          "Highlights a curated list of eco-friendly travel activities, including mountain treks, ocean dives, and safaris, each focusing on sustainability and conservation. Detailed information on each experience includes itineraries, sustainability practices, and the environmental impact, ensuring responsible and memorable adventures."
        }
      ></Heading>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {cardData.slice(0, 5).map((singleData) => (
          <Card key={singleData.id} singleData={singleData}></Card>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <Link
          to={"/allAdventures"}
          className="
             btn bg-primary btn-sm text-white mt-5 hover:text-black"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default Cards;
