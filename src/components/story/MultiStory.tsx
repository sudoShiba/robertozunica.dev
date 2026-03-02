import React from "react"

import { MultiStoryProps } from "../../types/types.ts"

const MultiStory: React.FC<MultiStoryProps> = ({ title, date, children }) => {
  return (
    <section className="story size-1">
      <div>
        <h2>{title}</h2>
        {date && <h4>{date}</h4>}
      </div>
      <div>
        {children}
      </div>
    </section>
  )
}

export default MultiStory