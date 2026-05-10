import { useEffect, useState } from "react";
import "./App.css";
import photo1 from "./assets/mom-photos/photo1.jpg";
import photo2 from "./assets/mom-photos/photo2.jpg";
import photo3 from "./assets/mom-photos/photo3.jpg";
import photo4 from "./assets/mom-photos/photo4.jpg";
import photo5 from "./assets/mom-photos/photo5.jpg";
import photo6 from "./assets/mom-photos/photo6.jpg";
import photo7 from "./assets/mom-photos/photo7.jpg";
import photo8 from "./assets/mom-photos/photo8.jpg";

const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8]

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // const [images, setImage] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // function handleImageUpload(event) {
  //   const files = Array.from(event.target.files);

  //   const imageUrls = files.map((file) => URL.createObjectURL(file));

  //   setImage(imageUrls);
  //   setCurrentImageIndex(0);
  // }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentBackground = images[currentImageIndex];

  return (
    <main 
      className="page"
      style={{ backgroundImage: `url(${currentBackground})` }}
    >
      <div className="overlay"></div>

      <section className={`card ${isOpen ? "open" : ""}`}>
        <div className="card-front">
          <div className="cover-side cover-front">
            <div className="front-content">
              <h1>Happy Mother&apos;s Day</h1>
              <p>With love, always</p>
            </div>
          </div>

          <div className="cover-side cover-back">
            <img src={currentBackground} alt="Family memory" />
          </div>
        </div>

        <div className="card-inside">
          <h2>Happy Mother&apos;s Day</h2>
          <p>
            Thank you for you love, patience, strength, and everything you do.
            You are appreciated more than words can say.
          </p>
        </div>
      </section>
      
      {/* Button to flip the card */}
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "CLOSE" : "OPEN"}
      </button>
    </main>
  )
}

export default App;