import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import React, { useEffect, useState } from "react"

import options from "../types/ParticlesOptions"

const Hero: React.FC = () => {
  const [init, setInit] = useState(false)

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
      options={options}
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