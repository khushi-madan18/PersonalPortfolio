import Particles from './Particles';

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0 bg-black">
    <div className="fixed inset-0 z-0 bg-black">
        <Particles
            particleColors={['#ffffff', '#FC8EAC', '#3f3f46']}
            particleCount={2000}
            particleSpread={40}
            speed={0.2}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            particleHoverFactor={2}
            alphaParticles={false}
            disableRotation={false}
        />
    </div>
    </div>
  );
};

export default Background3D;
