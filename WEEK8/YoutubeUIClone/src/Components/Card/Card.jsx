import React from "react";



export default function Card(props) {
  return (
    <div className=" m-3 max-w-sm w-full rounded-xl bg-black   shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <img
        src={props.image}
        alt="thumbnail"
        className="w-full  h-48 "
      />
      <div className="p-4 h-32">
        <div className="flex flex-row  ">
          <div className="icon ">
            <img className="rounded-full w-10 mr-2 h-10" src={props.icon} alt="icon of yt channel" />
          </div>
          <div className="flex flex-col">
            <h3 className="   text-gray-100 line-clamp-2">
              {props.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1">{props.channel}</p>
            <div className="text-xs text-gray-400 ">
              {props.views} • {props.time}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
