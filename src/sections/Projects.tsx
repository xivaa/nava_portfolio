import { useState } from "react";
import { PROJECTS } from "../constats/index";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import HabitTracker from "../components/HabitTracker";
import MauiQuality from "../components/MauiQuality";
import MacbookScene from "../components/Macbook";
import { SectionProps } from "../constats/types";

const Projects = ({sectionRef}: SectionProps) => {
  const [selectedProject, setSelectedProject] = useState(0);
  const wordsToHighlight = ['ruby', 'rails', 'react', 'native', 'firebase', 'database', 'javascript', 'css', 'tailwind', 'vite', 'threejs']

  const handleProjectChange = (direction: string) => {
    if (direction === 'next') {
      setSelectedProject((prev) => (prev + 1) % PROJECTS.length);
    } else {
      setSelectedProject((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    }
  }

  const highlightWords = (paragraph: string) => {
    return paragraph.split(' ').map((word, index) => {
      const cleanWord = word.replace(/[.,!?]/g, ''); 
      if (wordsToHighlight.includes(cleanWord.toLowerCase())) {
        return (
          <span key={index} style={{ color: '#7dcf89' }}>
            {word.toUpperCase()}{' '}
          </span>
        );
      }

      return <span key={index}>{word} </span>;
    });
  };

  return (      
        <section ref={sectionRef} className="w-screen h-screen md:h-screen flex flex-col items-center justify-center lg:justify-end relative overflow-hidden p-3">
            <div className="mb-6 w-[90%] sm:w-full flex items-center justify-center">
                <p className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-7xl sm:tracking-widest truncate mb-3 md:mb-0" >
                PROJECTS
                </p>
            </div>
            <div className="w-[90vw] lg:max-w-[80vw] h-auto xl:h-[75vh] xl:flex-row flex flex-col items-center justify-center min-h-[75vh] ">
                <div className="glass-btn flex flex-col md:flex-row items-start justify-center w-full h-full min-h-[75vh]">
                    <div className="h-[400px] md:h-full w-full md:w-1/2 flex justify-center items-center">
                        {
                            PROJECTS[selectedProject].index === 0 ? (
                                <HabitTracker />
                            ) : PROJECTS[selectedProject].index === 1 ? (
                                <MauiQuality />
                            ) : (
                                <MacbookScene />
                            )
                        }
                    </div>
                    <div className="w-full md:max-w-[45%] md:h-full p-2.5 lg:p-9 pb-[50%] sm:pb-0 ">
                        <h1 className="font-mono text-lg sm:text-3xl md:text-4xl" style={{color: '#7dcf89'}}>{PROJECTS[selectedProject].title.toUpperCase()}</h1>

                        <p className="text-justify md:max-w-[81%] max-w-[90%] md:relative md:top-[12%] text-base">{highlightWords(PROJECTS[selectedProject].description)}</p>

                        <div className="absolute bottom-3 right-3 md:bottom-8 md:right-[10%] flex flex-row justifty-center items-center" >
                            <button onClick={() => handleProjectChange('prev')} className="mr-3 focus:outline-none bg-transparent hover:border-emerald-400"><IoIosArrowRoundBack size={'4.2vw'}/></button>
                            <button onClick={() => handleProjectChange('next')} className="bg-transparent focus:outline-none hover:border-emerald-400"><IoIosArrowRoundForward className="" size={'4.2vw'}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
            
export default Projects;