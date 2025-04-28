import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import React, { useEffect, useState } from "react"

import { getParticlesOptions } from "../types/ParticlesOptions"

const Hero: React.FC = () => {
  const [init, setInit] = useState(false)
  const [isLightMode, setIsLightMode] = useState(() =>
    window.matchMedia("(prefers-color-scheme: light)").matches
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)")

    const handleChange = () => {
      setIsLightMode(mediaQuery.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  return (init &&
    <div className="hero-wrapper">
      <Particles
        id="tsparticles"
        options={getParticlesOptions(isLightMode)}
        className="particles-background"
      />
      <section className="hero">
        <h1>Roberto Zunica</h1>
        <h3>Computer Science student @ KU Leuven</h3>
      </section>
    </div>
  )
}

export default Hero