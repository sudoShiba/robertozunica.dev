import { IconBrandLinkedin, IconBrandGithub, IconBrandFacebook, IconBrandDiscord, IconMail, IconBrandBluesky, IconBrandItch } from "@tabler/icons-react"
import React from "react"

const SocialLinks: React.FC = () => {
  return (
    <section className="social-links-wrapper">
      <a href="https://t.robertozunica.dev/r/linkedin" target="_blank">
        <IconBrandLinkedin stroke={2} />
      </a>
      <a href="https://t.robertozunica.dev/r/github" target="_blank">
        <IconBrandGithub />
      </a>
      <a href="https://t.robertozunica.dev/r/discorduser" target="_blank">
        <IconBrandDiscord />
      </a>
      <a href="https://t.robertozunica.dev/r/itch">
        <IconBrandItch />
      </a>
      <a href="https://t.robertozunica.dev/r/bluesky" target="_blank">
        <IconBrandBluesky />
      </a>
      <a href="https://t.robertozunica.dev/r/facebook" target="_blank">
        <IconBrandFacebook />
      </a>
      <a href="mailto:me@robertozunica.dev" target="_blank">
        <IconMail />
      </a>
    </section>
  )
}

export default SocialLinks