import "./App.css";
import bgImage from "download.jpg";

function App() {
  return (
    <div className="container">

      {/* HERO WITH IMAGE BACKGROUND */}
      <header
        className="hero"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="overlay">
          <h1>Porsche 911 GT3 RS</h1>
          <p>Precision. Performance. Pure Motorsport DNA.</p>
        </div>
      </header>

      {/* باقي الموقع (sections) */}
      
    </div>
  );
}

export default App;