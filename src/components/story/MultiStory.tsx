import React from "react"

import { MultiStoryProps } from "../../types/types.ts"

const MultiStory: React.FC<MultiStoryProps> = ({ title, children }) => {
  return (
    <section className="story size-1">
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        {children}
      </div>
    </section>
  )
}

export default MultiStory