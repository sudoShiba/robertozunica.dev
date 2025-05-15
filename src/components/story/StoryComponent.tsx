import React from "react"

import { StoryComponentProps } from "../../types/types.ts"

const StoryComponent: React.FC<StoryComponentProps> = ({ title, subtitle, date, children, size, image}) => {
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
        {image && <img src={image} alt={title} />}
        <aside>{children}</aside>
      </div>
    </section>
  )
}

export default StoryComponent