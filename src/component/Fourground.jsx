import React, { useRef } from "react";
import Card from "./Card.jsx";
const Fourground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "Youtube",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColour: "bg-green-600",
      },
    },
    {
      desc: "Youtube",
      filesize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColour: "bg-blue-600",
      },
    },
    {
      desc: "Youtube",
      filesize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColour: "bg-green-600",
      },
    },
    {
      desc: "Youtube",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColour: "bg-red-600",
      },
    }
  ];

  return (
    <div ref={ref} className="fixed top-0 p-5 left-0 z-[3] w-full h-full flex gap-10 flex-wrap">
     {data.map((item , index) => (
       <Card data={item} reference={ref} />
     ))}
    </div>
  );
};

export default Fourground;
