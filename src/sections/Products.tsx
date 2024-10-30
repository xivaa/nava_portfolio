import { EXPERIENCE } from "../constats/index.tsx";
import { ProductCardProps, SectionProps } from "../constats/types.tsx";

const ProductCard = ({ title, year, description }: ProductCardProps) => {
    const wordsToHighlight = ['full-stack', 'developer', 'harvardx\'s', 'Metricas', 'startup', 'bootcamp', 'ruby', 'on', 'rails', 'python', 'react', 'native', 'sql', 'c', 'aws', 'firebase', 'javascript', 'apis' ]
    const jr = 'jr'

    const highlightWords = (paragraph: string) => {
        return paragraph.split(' ').map((word, index) => {
            const cleanWord = word.replace(/[.,'!?]/g, ''); 
            if (wordsToHighlight.includes(cleanWord.toLowerCase())) {
                return (
                    <span key={index} style={{ color: '#7dcf89' }}>
                        {word.toUpperCase()}{' '}
                    </span>
                );
            } else if (cleanWord.toLowerCase() === jr) {
                return (
                    <span key={index} style={{ fontSize: 15 }}>
                        {word}{' '}
                    </span>
                );
            }
            return <span key={index}>{word} </span>;
        });
    };

    return (
        <div className="product-card xl:hover:w-[40%] w-[90%] lg:w-[80vw] h-auto min-h-full xl:w-[25%] lg:h-full py-3 px-0 xl:px-3">
            <div className="glass-filter h-full w-full">
                <h1 className="font-mono text-lg sm:text-3xl md:text-4xl">{highlightWords(title)}</h1>
                <br/>
                <p className="text-justify xl:absolute xl:top-1/3 xl:left-3 max-w-[87%] xl:max-h-[50%] overflow-hidden">{highlightWords(description)}</p>
                <div className="w-[87%] xl:flex-row items-end justify-end p-6 xl:fixed xl:bottom-3">
                    <p className="text-end" style={{fontSize: 12, color: 'lightcyan'}}>{year}</p>
                </div>
            </div>
        </div>
    );
  };
  

const Products = ({sectionRef}: SectionProps) => {

    return (
        <section ref={sectionRef} className="w-screen min-h-screen h-auto xl:h-screen flex flex-col items-center justify-center lg:justify-end relative overflow-hidden">
            <div className="mt-6 mb-6 w-[90%] sm:w-full flex items-center justify-center">
                <p className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-7xl sm:tracking-widest truncate" >
                EXPERIENCE
                </p>
            </div>
            <div className="w-full xl:max-w-[80vw] h-auto xl:h-[75vh] xl:flex-row flex flex-col items-center justify-between">
                {EXPERIENCE.map((product, index) => (
                    <ProductCard key={index} title={product.title} year={product.year} description={product.description} />
                ))}
            </div>
        </section>
    )
}

export default Products;