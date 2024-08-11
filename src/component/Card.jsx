import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      dragElastic={0.1}
      className="relative w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white overflow-hidden py-10 px-8 flex-shrink-0"
    >
      <FaRegFileLines />
      <p className="leading-right mt-5 text-sm font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <FaDownload size=".7em" color="white" />
            ) : (
              <IoMdCloseCircle />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColour === "bg-green-600"
                ? "bg-blue-600"
                : "bg-red-600"
            } flex items-center justify-center`}
          >
            <h3 className="test-sm font-semibold"> {data.tag.tagTitle} </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
