import { IconBrandLinkedin, IconBrandGithub, IconBrandFacebook, IconMail } from "@tabler/icons-react"
import React from "react"

const SocialLinks: React.FC = () => {
  return (
    <section className="social-links-wrapper">
      <a href="https://www.linkedin.com/in/robertozunica/" target="_blank">
        <IconBrandLinkedin stroke={2} />
      </a>
      <a href="https://github.com/sudoShiba" target="_blank">
        <IconBrandGithub />
      </a>
      <a href="https://www.facebook.com/robertozunica06/" target="_blank">
        <IconBrandFacebook />
      </a>
      <a href="mailto:me@robertozunica.dev" target="_blank">
        <IconMail />
      </a>
    </section>
  )
}

export default SocialLinks