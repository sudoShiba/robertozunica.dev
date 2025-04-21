import { IconWorld } from "@tabler/icons-react"
import React from "react"

interface SiteProps {
    url: string;
}

const Site: React.FC<SiteProps> = ({ url }) => {
  return (
    <a href={url} target="_blank" className="site">
      <IconWorld size={20} />
      <span>
        {url.replace(/^(https?:\/\/)/, "").length > 20
          ? `${url.replace(/^(https?:\/\/)/, "").slice(0, 20)}...`
          : url.replace(/^(https?:\/\/)/, "")}</span>
    </a>
  )
}

export default Site