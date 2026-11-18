import { IconBrandLinkedin, IconBrandGithub, IconBrandDiscord, IconMail, IconFileCv } from "@tabler/icons-react"
import React from "react"

const SocialLinks: React.FC = () => {
  return (
    <section className="social-links-wrapper">
      <a href="https://t.robertozunica.dev/r/discorduser" target="_blank">
        <IconBrandDiscord />
      </a>
      <a href="https://t.robertozunica.dev/r/linkedin" target="_blank">
        <IconBrandLinkedin stroke={2} />
      </a>
      <a href="https://t.robertozunica.dev/r/github" target="_blank">
        <IconBrandGithub />
      </a>
      <a href="mailto:me@robertozunica.dev" target="_blank">
        <IconMail />
      </a>
      <a href="/assets/curriculumvitae.pdf" target="_blank" title="CV" aria-label="CV">
        <IconFileCv />
      </a>
    </section>
  )
}

export default SocialLinks