import { IconPuzzle, IconBook, IconBriefcase } from "@tabler/icons-react"
import React from "react"

import { SliderProps } from "../../types/types"

const Slider: React.FC<SliderProps> = ({ handleToggle, visibleColumn }) => {
  return (
    <div className="slider">
      <div
        className={`slider-highlight ${
          visibleColumn === "col-1"
            ? "left"
            : visibleColumn === "col-2"
              ? "center"
              : "right"
        }`}
      ></div>
      <button
        className={`slider-button ${visibleColumn === "col-1" ? "active" : ""}`}
        onClick={() => handleToggle("col-1")}
      >
        <IconBriefcase size={24} />
      </button>
      <button
        className={`slider-button ${visibleColumn === "col-2" ? "active" : ""}`}
        onClick={() => handleToggle("col-2")}
      >
        <IconBook size={24} />
      </button>
      <button
        className={`slider-button ${visibleColumn === "col-3" ? "active" : ""}`}
        onClick={() => handleToggle("col-3")}
      >
        <IconPuzzle size={24} />
      </button>
    </div>
  )
}

export default Slider