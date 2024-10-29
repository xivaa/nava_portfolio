import { Aboutme } from "../constats/index";
import ThrophyScene from "../components/Thropy";

const About = ({aboutRef}) => {
    const wordsToStyle = ['passionate', 'creating', 'solutions', 'challenges', 'impact', 'balance', 'coding', 'focused', 'development', 'python', 'react', 'typescript', 'mexico', 'city' ];
  
    const highlightWords = (paragraph) => {
      return paragraph.split(' ').map((word, index) => {
        const cleanWord = word.replace(/[.,!?]/g, ''); 
        if (wordsToStyle.includes(cleanWord.toLowerCase())) {
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
        <section ref={aboutRef} className=" w-screen min-h-screen h-auto md:h-screen flex flex-col items-center lg:pb-[60px] xl:pb-0 justify-center lg:justify-end relative p-3">
            <div className='mb-6 w-full flex items-center justify-center'>
            <p className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-7xl sm:tracking-widest truncate mb-3 md:mb-0" >
                    {Aboutme.title}
                </p>
            </div>
        
            <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:max-w-[80vw] h-auto md:h-[75vh] z-1">
                <div className="glass-btn flex flex-col md:flex-row items-center w-[90vw] h-full p-3">
                    <div className="h-[200px] md:h-full w-full md:w-1/3 flex justify-center items-center">
                        <ThrophyScene />
                    </div>
                    <div className="p-3 md:max-w-[66%] h-auto md:max-h-[100%]" >
                        <p className="font-sans text-justify text-sm sm:text-base md:text-lg lg:text-xl" style={{ lineHeight: 2, maxWidth: '99%' }}>
                            {highlightWords(Aboutme.first_paragraph)}
                        </p>
            
                        <br/>
            
                        <p className="font-sans text-justify text-sm sm:text-base md:text-lg lg:text-xl" style={{ lineHeight: 2, maxWidth: '99%' }}>
                            {highlightWords(Aboutme.second_paragraph)}
                        </p>
            
                        <br/>
            
                        <p className="font-sans text-justify text-sm sm:text-base md:text-lg lg:text-xl" style={{ lineHeight: 2, maxWidth: '99%' }}>
                            {highlightWords(Aboutme.third_paragraph)}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
  };
  
  export default About;
  