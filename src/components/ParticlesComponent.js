import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const ParticlesComponent = () => {
  const init = useCallback(async (engine) => {
    await loadFull(engine)
  }, []);

  return (
    <Particles 
      init={init}
      options={{
        background: {
            color: {
                value: "#342719",
            },
            opacity: 0,
        },
        fullScreen: {
            enable: true,
            zIndex: 2
        },
        style: {
            position: "absolute"
        },
        fpsLimit: 121,
        interactivity: {
            detectsOn: "canvas",
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: {
                  enable: true,
                }
            },
            modes: {
                grab: {
                    distance: 401,
                    size: 41,
                    duration: 3,
                    opacity: 9,
                    speed: 4
                },
                bubble: {
                  distance: 401,
                  duration: 3,
                  opacity: 9,
                  size: 41,
                },
                push: {
                    quantity: 5,
                },
                repulse: {
                    distance: 201,
                    duration: 1.4,
                },
                trail: {
                  delay: 2,
                  quantity: 2,
                }
            },
        },
        particles: {
            color: {
                value: "#ffffff",
                opacity: 0.5
            },
            links: {
                color: "#ffffff",
                distance: 151,
                enable: true,
                opacity: 0.5,
                width: 2
            },
            collisions: {
                enable: true,
            },
            move: {
              angle: {
                offset: 1,
                value: 26,
              },
                direction: "top",
                enable: true,
                outModes: {
                    default: "out",
                },
                random: false,
                speed: 1.25,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 1001,
                },
                value: 40,
            },
            opacity: {
                random: false,
                value: 1.5,
                anim: {
                    enable: false,
                    speed: 2,
                    opacity_min: 1.1,
                    sync: false
                }
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 1,
                    color: "#000001",
                    opacity: 0.5
                },
                polygon: {
                    nb_sides: 6
                }
            },
            size: {
                value: { min: 2, max: 5 },
            },
            twinkle: {
              particles: {
                enable: true,
                frequency: .6,
                opacity: 0.5
              }
            },
        },
        detectRetina: true}}
    />
  )
};

export default ParticlesComponent;
