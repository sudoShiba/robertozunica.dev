import React from "react"

import { StoryComponentProps } from "../../types/types.ts"

const StoryComponent: React.FC<StoryComponentProps> = ({ title, subtitle, date, children, size, image, caption}) => {
  return (
    <section className={"story size-" + size}>
      <div>
        <h2>{title}</h2>
        <div>
          {subtitle && <h3>{subtitle}</h3>}
          {date && <h4>{date}</h4>}
        </div>
      </div>
      <div>
        {image && <figure>
          <img src={image} alt={title} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>}
        <aside>{children}</aside>
      </div>
    </section>
  )
}

export default StoryComponent