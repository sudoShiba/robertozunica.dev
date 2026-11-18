import React, { useState } from "react"

import "./story.css"
import { story } from "../../data/story.ts"
import { ColumnKey, columnMap, Columns, StoryItem } from "../../types/types.ts"

import MultiStory from "./MultiStory.tsx"
import MultiStoryItem from "./MultiStoryItem.tsx"
import RichText from "./RichText.tsx"
import Site from "./Site.tsx"
import Slider from "./Slider.tsx"
import StoryComponent from "./StoryComponent.tsx"

const getColumnFromUrl = (): Columns => {
  const params = new URLSearchParams(window.location.search)
  const col = params.get("column") as ColumnKey | null

  if (col && col in columnMap)
    return columnMap[col]

  return "col-2" // Default to "col-2" if no valid column is found
}

const renderItem = (item: StoryItem) => {
  const sites = item.sites.map((url) => <Site key={url} url={url} />)

  if (item.type === "multi")
    return (
      <MultiStory key={item.title} title={item.title}>
        {item.items.map((sub) => (
          <MultiStoryItem key={sub.title} title={sub.title} date={sub.date}>
            <RichText text={sub.text} />
          </MultiStoryItem>
        ))}
        {sites}
      </MultiStory>
    )

  return (
    <StoryComponent
      key={item.title}
      title={item.title}
      subtitle={item.subtitle}
      date={item.date}
      size={item.size}
      image={item.image}
      caption={item.caption}
    >
      <p>
        <RichText text={item.text} />
      </p>
      {sites}
    </StoryComponent>
  )
}

const Story: React.FC = () => {
  const [visibleColumn, setVisibleColumn] = useState<Columns>("col-2")

  React.useEffect(() => {
    setVisibleColumn(getColumnFromUrl())
  }, [])

  const handleToggle = (column: Columns) => {
    setVisibleColumn(column)
  }

  return (
    <>
      <Slider
        handleToggle={handleToggle}
        visibleColumn={visibleColumn} />
      <article className="story-wrapper">
        {story[visibleColumn].map(renderItem)}
      </article>
    </>
  )
}

export default Story
