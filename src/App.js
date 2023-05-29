import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

import Header from './components/Home/Header';
import Title from './components/Home/Title';
import Experiences from './components/Home/Experiences';
import Skills from './components/Home/Skills';
import Projects from './components/Home/Projects';
import Footer from './components/Home/Footer';
import './App.scss';

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div id='App'>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#00020a',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'bubble',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 83.916,
                size: 1,
                duration: 3,
                opacity: 1,
                speed: 3,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 20,
                duration: 0.4,
              },
            },
          },
          particles: {
            collisions: {
              enable: false,
            },
            color: {
              value: '#fcf5e7',
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: '#fcf5e7',
              opacity: 0.4,
              width: 1,
            },
            move: {
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
              bounce: false,
              directions: 'none',
              enable: true,
              outModes: {
                default: 'out',
              },
              random: true,
              speed: 0.2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 789.1476,
              },
              value: 355,
            },
            opacity: {
              value: 0.489, // { min: 0.1, max: 0.5 },
              random: false,
              anim: {
                enable: true,
                speed: 0.2,
                opacity_min: 0,
                sync: false,
              },
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#fcf5e7',
              },
            },
            size: {
              value: 2, // { min: 0.5, max: 4 },
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0,
                sync: false,
              },
            },
          },
          detectRetina: true,
        }}
      />

      <div style={{ zIndex: 999 }}>
        <Header />
        <Title />
        <Experiences />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default App;
