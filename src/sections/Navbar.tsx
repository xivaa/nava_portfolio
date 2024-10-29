import { useState, useRef, useEffect } from 'react';
import { NAV_TABS } from '../constats/index';
import { CiMenuBurger } from 'react-icons/ci';
import { IoIosClose } from 'react-icons/io';
import { gsap } from 'gsap';

export const Navbar = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [isOpen, setIsOpen] = useState(false);
  const navItems = useRef([]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);

    if (navItems.current.length > 0) {
        // Animate the selected button
        gsap.to(navItems.current[activeIndex], {
          scale: 1.12,
          duration: 0.3,
          ease: 'power3.out',
          color: '#7dcf89',
        });
  
        navItems.current.forEach((item, index) => {
          if (index !== activeIndex) {
            gsap.to(item, {
              scale: 1,
              duration: 0.3,
              ease: 'power3.out',
              color: '#fff',
            });
          }
        });
      }

    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex]);

  return (
    <div>
      {isMobile ? (
        <>
          <button onClick={() => setIsOpen(!isOpen)} className="fixed z-10 mt-2 ml-2 p-2 text-white focus:outline-none bg-black bg-opacity-75">
            {isOpen ? <IoIosClose /> : <CiMenuBurger />}
          </button>
          {isOpen && (
            <div className="fixed bg-black z-10 flex flex-col items-start justify-center p-3 rounded-xl mt-[12%] ml-2">
              {NAV_TABS.map((tab, index) => (
                <button key={index} onClick={() => {
                //   setActiveIndex(index);
                //   console.log(activeIndex);
                  sections[index].current.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }} className='p-4 text-white text-xs bg-transparent focus:outline-none'>{tab.title}</button>
              ))}
            </div>
          )}
        </>
      ) : (
        <nav className="flex justify-between items-center mx-auto mt-2 p-6 rounded-full" style={{ width: '80vw', height: '5rem', position: 'fixed', top: 0, zIndex: 2, left: '10%', backgroundColor: 'rgba(0, 0, 0, 0.3)', boxShadow: ' 0 4px 6px rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(15px)' }}>
        {NAV_TABS.map((tab, index) => (
          <button key={index} ref={el => (navItems.current[index] = el)} onClick={() => { setActiveIndex(index); console.log(activeIndex); sections[index].current.scrollIntoView({ behavior: 'smooth' }); }} className={`p-1 sm:p-2 text-xs rounded-full bg-transparent hover:border-emerald-400 focus:outline-none truncate ${activeIndex === index ? 'active' : ''}`} style={{ transition: 'background-color 0.3s ease', maxWidth: (100 / 5) - 3 + '%', overflow: 'hidden'}}>
          { tab.title }
          </button>
        ))}
        </nav>
      )}
    </div>
  );
};

export default Navbar;
