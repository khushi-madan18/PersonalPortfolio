import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export const Hero3D = () => {
    const { viewport } = useThree();

    return (
        <group position={[0, -viewport.height * 0.1, 0]}> 
            <Html center transform={false} className="w-screen flex justify-center items-center pointer-events-none">
                <div className="pointer-events-auto text-center z-10 p-6">
                     <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
                        Hi, I am <span className="text-[#FC8EAC]">Khushi</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                        <span className="text-white font-medium">Aspiring Software Engineer & Web Developer.</span> <br/>
                        Combining full-stack development skills with a competitive programming mindset to build efficient, immersive web experiences.
                    </p>
                </div>
            </Html>
        </group>
    );
};
