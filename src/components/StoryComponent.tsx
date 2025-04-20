import React from "react"

import { StoryComponentProps } from "../types/types.ts"

const StoryComponent: React.FC<StoryComponentProps> = ({ title, content, size, image }) => {
  return (
    <section className={"story size-" + size}>
      <h1>{title}</h1>
      <div>
        {image && <img src={image} alt={title} />}
        <p>{content}</p>
      </div>
    </section>
  )
}

export default StoryComponent