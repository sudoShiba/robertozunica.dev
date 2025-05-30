import { ISourceOptions } from "@tsparticles/engine"

export const getParticlesOptions = (isLightMode: boolean): ISourceOptions => ({
  background: {
    color: isLightMode ? "#ffffff" : "#242424"
  },
  fullScreen: {
    enable: true
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
        parallax: {
          enable: true,
          force: 20,
          smooth: 50
        }
      },
      resize: {
        enable: true,
        delay: 0
      }
    },
    modes: {
      push: {
        quantity: 4
      },
      repulse: {
        distance: 100,
        duration: 10
      }
    }
  },
  particles: {
    color: {
      value: isLightMode ? "#213547" : "#ffffff"
    },
    links: {
      color: isLightMode ? "#213547" : "#ffffff",
      enable: true,
      frequency: 0.75,
      consent: true,
      opacity: 0.5,
      width: 1,
      triangles: {
        enable: true,
        opacity: 0.01,
        frequency: 0.75
      }
    },
    move: {
      enable: true,
      speed: 2,
      random: true
    },
    collisions: {
      enable: false
    },
    number: {
      value: 200,
      density: {
        enable: true,
        height: 1000,
        width: 2000
      }
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 0, max: 3 }
    }
  },
  detectRetina: true
})