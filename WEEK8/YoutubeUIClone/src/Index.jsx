import React from "react";
import Card from "./Components/Card/Card";
import image from "./Components/Card/thumbnail.jpeg";
import icon from "./Components/Card/icon.jpeg";
import Top from "./Components/TopBar/Top";

const card_data = [
  {
    title: "shaun the Sheep | Ep-1",
    time: "1:00am",
    views: "10k views",
    channel: "Nickelodeon",
  },
  {
    title: "shaun the Sheep | Ep-2",
    time: "1:00am",
    views: "10k views",
    channel: "Nickelodeon",
  },
  {
    title: "shaun the Sheep | Ep-3",
    time: "1:00am",
    views: "10k views",
    channel: "Nickelodeon",
  },
  {
    title: "shaun the Sheep | Ep-4",
    time: "1:00am",
    views: "10k views",
    channel: "Nickelodeon",
  },
  {
    title: "shaun the Sheep | Ep-5",
    time: "1:00am",
    views: "10k views",
    channel: "Nickelodeon",
  },
];

export default function Index() {
  return (
    <>
      <div className="topbar"><Top/></div>
      <div className=" cards bg-gray-950 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1">
        {card_data.map((carddata) => (
          <div>
            <Card
              image={image}
              title={carddata.title}
              time={carddata.time}
              views={carddata.views}
              channel={carddata.channel}
              icon={icon}
            />
          </div>
        ))}
      </div>
    </>
  );
}
