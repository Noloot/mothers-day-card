import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImage] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function handleImageUpload(event) {
    const files = Array.from(event.target.files);

    const imageUrls = files.map((file) => URL.createObjectURL(file));

    setImage(imageUrls);
    setCurrentImageIndex(0);
  }

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  const currentBackground =
    images.length > 0 ? images[currentImageIndex] : null;

  return (
    <main 
      className="page"
      style={
        currentBackground
          ? { backgroundImage: `url(${currentBackground})` }
          : {} 
      }
    >
      <section className={`card ${isOpen ? "open" : ""}`}>
        <div className="card-front">
          <div className="front-content">
            <h1>Happy Mother&apos;s Day</h1>
            <p>With love, always</p>
          </div>
        </div>

        <div className="card-inside">
          <h2>Happy Mothers&apos;s Day</h2>
          <p>
            Thank you for your love, patiece, strength, and everything you do.
            You are appreciated more than words can say
          </p>

          <label className="upload-btn">
            Upload Photos
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
            />
          </label>
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