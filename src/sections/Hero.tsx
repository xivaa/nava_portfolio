import { useState, useEffect } from "react";
import SunScene from "../components/SunScene";
import { SectionProps } from "../constats/types";

const Hero = ({sectionRef}: SectionProps) => {
    const [isWatch, setIsWatch] = useState(window.innerWidth < 351);
  
    useEffect(() => {
        const handleResize = () => {
            setIsWatch(window.innerWidth < 351);
        };
        
        window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return (
        <section ref={sectionRef} className="w-screen h-screen flex flex-col items-center justify-center relative z-1 ">
            <div className="flex flex-row items-center justify-center overflow-hidden rounded-xl w-[90%] lg:w-[80vw] h-[75vh]  border border-gray-800" style={{boxShadow: '0 9px 21px rgba(24, 90, 123, 0.3)'}}>
                <div className="w-full h-full">
                    <SunScene />
                </div>                    
            </div>              
            {
                isWatch ? (
                    <div className="glass-btn flex flex-col items-start justify-center mt-[10%] w-[90%] h-[20%] z-3 p-3">
                        <p className="text-emerald-400 text-center text-justify " style={{ letterSpacing: 1 , fontSize: 21 }}>
                            Hey, I'm Alfonso
                        </p>
                        <p className="text-slate-100 text-center text-justify" style={{ letterSpacing: 1 , fontSize: 12 }}>
                            using the most disruptive technologies i create digital solutions for real life problems
                        </p>
                    </div>
                ) : (null)
            }
        </section>
    );
}

export default Hero;
    