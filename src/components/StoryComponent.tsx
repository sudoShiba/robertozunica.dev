import React from "react"

import { StoryComponentProps } from "../types/types.ts"

const StoryComponent: React.FC<StoryComponentProps> = ({ title, children, size, image, icon}) => {
  return (
    <section className={"story size-" + size}>
      <div>
        {icon && <img src={icon} className="icon" alt={title} />}
        <h1>{title}</h1>
      </div>
      <div>
        {image && <img src={image} alt={title} />}
        <p>{children}</p>
      </div>
    </section>
  )
}

export default StoryComponent