import React from "react"

import { RichTextProps } from "../../types/types.ts"

const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g

// Renders text with [label](url) links
const RichText: React.FC<RichTextProps> = ({ text }) => {
  const parts: React.ReactNode[] = []
  let last = 0

  for (const match of text.matchAll(linkPattern)) {
    const index = match.index ?? 0
    parts.push(text.slice(last, index))
    parts.push(<a key={index} href={match[2]} target="_blank">{match[1]}</a>)
    last = index + match[0].length
  }
  parts.push(text.slice(last))

  return <>{parts}</>
}

export default RichText
