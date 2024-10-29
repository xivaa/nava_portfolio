import { useEffect } from 'react';
import gsap from 'gsap';

function Carousel() {

    useEffect(() => {
        const rows = document.querySelectorAll('.moving-row');
    
        rows.forEach((row, index) => {
          const speed = 9 * 2; // Each row moves at a different speed
          gsap.to(row, {
            y: '-=21%', // Move the row vertically up by 100% of its height
            duration: speed, // Control the speed of the animation
            repeat: -1, // Infinite loop
            yoyo: true, // Make it bounce back
          });
        });
      }, []);

  return (
    <div className="carousel-grid">
        <div className="carousel-row">
            <div className="moving-row">
                <img src="assets/PHOTO-2024-09-18-21-15-47.jpg" alt="2" className="carousel-img" />
                <img src="assets/PHOTO-2024-09-18-21-15-47 4.jpg" alt="3" className="carousel-img" />
                <img src="assets/PHOTO-2024-09-18-21-15-47 3.jpg" alt="4" className="carousel-img" />
            </div>
        </div>
        <div className="carousel-row">
            <div className="moving-row">
                <img src="assets/PHOTO-2024-09-18-21-15-47 2.jpg" alt="5" className="carousel-img" />
                <img src="assets/PHOTO-2024-09-14-10-15-24.jpg" alt="6" className="carousel-img" />
                <img src="assets/giorgio-trovato-5TXz228u4eo-unsplash.jpg" alt="8" className="carousel-img" />
                <img src="assets/luke-mckeown-nlyWZtWTzCo-unsplash.jpg" alt="7" className="carousel-img" />
                <img src="assets/logo_maui_quality-01.png" alt="8" className="carousel-img" />

            </div>
        </div>
        <div className="carousel-row">
            <div className="moving-row">
                <img src="assets/clean_carpet.jpg" alt="8" className="carousel-img" />
                <img src="assets/clean_glass.jpg" alt="8" className="carousel-img" />
                <img src="assets/clean_sofa.jpg" alt="8" className="carousel-img" />
                <img src="assets/aaron-huber-G7sE2S4Lab4-unsplash.jpg" alt="8" className="carousel-img" />
            </div>
        </div>
    </div>
  );
}

export default Carousel;
