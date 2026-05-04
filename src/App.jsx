import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="page">
      <section className={`card ${isOpen ? "open" : ""}`}>
        <div className="card-front">
          <h1>Happ Mothers&apos;s Day</h1>
          <p>With love, always</p>

          <button onClick={() => setIsOpen(true)}>
            OPEN
          </button>
        </div>

        <div className="card-inside">
          <h2>Happy Mothers&apos;s Day</h2>
          <p>
            Thank you for your love, patiece, strength, and everything you do.
            You are appreciated more than words can say
          </p>
        </div>
      </section>
    </main>
  )
}

export default App;