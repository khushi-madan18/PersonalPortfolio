import { ScrollControls, Scroll, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Hero3D } from './Hero3D';
import { About3D } from './About3D';
import { Skills3D } from './Skills3D';
import { Projects3D } from './Projects3D';
import { Contact3D } from './Contact3D';

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <ScrollControls pages={4} damping={0.25}>
        <Scroll>
            <Hero3D />
            <Skills3D />
            <Projects3D />
            <Contact3D />
        </Scroll>
      </ScrollControls>

      <EffectComposer>
        <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} intensity={1.5} />
      </EffectComposer>
    </>
  );
};
