import React from "react"

import { MultiStoryItemProps } from "../../types/types.ts"

const MultiStoryItem: React.FC<MultiStoryItemProps> = ({ title, date, children }) => {
  return (
    <div className="multistoryitem">
      <span className="multistoryitem-dot"></span>
      <div>
        <h2>{title}</h2>
        {date && <h4>{date}</h4>}
      </div>
      {children}
    </div>
  )
}

export default MultiStoryItem