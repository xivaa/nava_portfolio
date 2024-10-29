import { CiMail, CiMapPin } from "react-icons/ci";
import AstronautScene from "../components/Astronaut";
import { CONTACT } from "../constats/index";
import { PiGithubLogoThin } from "react-icons/pi";

const Contact = ({contactRef}) => {

  return (
    <section ref={contactRef} className="w-screen h-screen md:h-screen flex flex-col items-center justify-center lg:justify-end p-3 relative overflow-hidden">
      <div className='mb-6 w-full flex items-center justify-center'>
        <p className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-7xl sm:tracking-widest truncate mb-3 md:mb-0" >
          {CONTACT.title}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center w-[90vw] lg:w-[80vw] h-[75vh] z-1">
        <div className="glass-btn flex flex-col md:flex-row items-center justify-between w-full h-full p-3 overflow-hidden" >
          <div className="contact-info flex flex-col items-center  sm:items-start justify-center ">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-2 ">
              <p className="flex items-center gap-2 text-xs sm:text-base">
                <CiMail /> {CONTACT.email}
              </p>
              <p className="flex items-center gap-2 text-xs sm:text-base">
                <PiGithubLogoThin /> {CONTACT.github}
              </p>
              <p className="flex items-center gap-2 text-xs sm:text-base">
                <CiMapPin /> {CONTACT.location}
              </p>
            </div>
          </div>
          <div className="h-full mt-3 md:mt-0 w-full md:w-[80%] flex justify-center items-center overflow-hidden" style={{borderRadius: 12}}>
            <AstronautScene />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
