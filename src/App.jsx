import React from "react";
import "./App.css";

function App() {
  const engineSpecs = [
    { label: "Engine Type", value: "5.0 L Twin‑Turbo V8, Flat-Plane Crank, Dry-Sump" },
    { label: "Power (Gasoline)", value: "1,280 hp @ 7800 rpm" },
    { label: "Power (E85)", value: "1,600 hp" },
    { label: "Torque", value: "1,000 Nm @ 2700–6170 rpm" },
    { label: "Redline", value: "8,500 rpm" },
    { label: "Boost Pressure", value: "1.7 bar (2.2 bar on E85)" },
    { label: "Engine Weight", value: "189 kg" },
    { label: "Cooling", value: "Twin radiators with high-flow fans and intercoolers" },
  ];

  const performance = [
    "Top Speed: Claimed over 531 km/h (330 mph) – fastest Jesko Absolut",
    "0–100 km/h: 2.8s",
    "0–200 km/h: 6.7s",
    "0–300 km/h: 14.5s",
    "0–400 km/h: 36s",
    "Top-speed optimized with low-drag body",
  ];

  // ... aeroFeatures, chassis, handling, transmission, interior, dimensions arrays remain unchanged

  const aeroFeatures = [
    "Rear hood fins for high-speed stability",
    "Long tail to reduce drag",
    "Dished rear wheels & smooth underbody panels",
    "Front underbody flaps for optimal downforce",
    "Active rear spoiler with speed-sensitive adjustment",
    "Drag coefficient: 0.278 Cd (ultra-low for hypercar)",
  ];

  const chassis = [
    "Carbon fiber monocoque with aluminum honeycomb inserts",
    "Integrated safety cell with FIA-level crash protection",
    "Pre-preg carbon/kevlar body panels",
    "Adjustable rear suspension geometry",
    "Carbon sport bucket seats with Alcantara trim",
    "Lightweight titanium subframes",
  ];

  const handling = [
    "Koenigsegg Triplex suspension at rear for high-speed stability",
    "Power-assisted rack-and-pinion steering",
    "Electronically adjustable gas-hydraulic shocks",
    "Ceramic composite brakes with multi-piston calipers",
    "Active traction & stability control",
    "Electronics-assisted launch control",
  ];

  const transmission = [
    "9-speed Koenigsegg Light Speed Transmission (LST)",
    "Koenigsegg Electronic Differential (KED)",
    "Shift times: 20–30 milliseconds per gear",
    "Single-clutch design with instantaneous gear changes",
    "Fully adaptive torque distribution",
  ];

  const interior = [
    "Minimalist cockpit with digital display cluster",
    "Luxury Alcantara and leather finishes",
    "Carbon fiber steering wheel with integrated controls",
    "Customizable infotainment and telemetry readouts",
    "Track-inspired bucket seats",
    "Lightweight adjustable pedals",
  ];

  const dimensions = [
    "Length: 4,845 mm",
    "Width: 2,030 mm",
    "Height: 1,210 mm",
    "Wheelbase: 2,700 mm",
    "Dry weight: 1,290 kg",
    "Fuel tank: 100 L lightweight carbon-fiber tank",
  ];

  return (

<div>
      <div className="video-background">
        <iframe
          src="https://www.youtube.com/embed/6xY_LQzTyus?autoplay=1&mute=1&controls=0&loop=1&playlist=6xY_LQzTyus"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Background Video"
        ></iframe>
      </div>

     
      <div className="content">
        
        <div style={{ height: "200vh" }}>
    <div className="container">
      {/* HERO */}
      <header className="hero">
        <div className="overlay">
          <h1>Koenigsegg Jesko Absolut</h1>
          <p>The perfection of Hypercar Engineering & Speed</p>
        </div>
      </header>

      {/* ENGINE */}
      <section className="section specs">
        <h2>Engine & Power</h2>
        <div className="spec-grid">
          {engineSpecs.map((item, i) => (
            <div className="spec-card" key={i}>
              <h3>{item.label}</h3>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="section performance">
        <h2>Performance Numbers</h2>
        <ul className="feature-list">
          {performance.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* AERODYNAMICS */}
      <section className="section aerodynamics">
        <h2>Aerodynamics & Speed Design</h2>
        <ul className="feature-list">
          {aeroFeatures.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* CHASSIS */}
      <section className="section materials">
        <h2>Chassis & Construction</h2>
        <ul className="feature-list">
          {chassis.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* HANDLING */}
      <section className="section handling">
        <h2>Handling & Suspension</h2>
        <ul className="feature-list">
          {handling.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* TRANSMISSION */}
      <section className="section transmission">
        <h2>Transmission & Drivetrain</h2>
        <ul className="feature-list">
          {transmission.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* INTERIOR */}
      <section className="section interior">
        <h2>Interior & Cockpit</h2>
        <ul className="feature-list">
          {interior.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* DIMENSIONS */}
      <section className="section dimensions">
        <h2>Dimensions & Weight</h2>
        <ul className="feature-list">
          {dimensions.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* BUTTONS */}
      <section className="section explore">
        <h2>Explore More</h2>
        <div className="links">
          <a
            href="https://www.3dtuning.com/en-US/tuning/koenigsegg/jesko/2.door.targa.top.2020"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Inspect in 3D</button>
          </a>

          <a
            href="https://configurator.loop-studio.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Customize</button>
          </a>

          <a
            href="https://www.ultimatespecs.com/car-specs/Koenigsegg/12134/Koenigsegg-Jesko-Absolut.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Ultimate Specs</button>
          </a>

           <a
            href="https://www.youtube.com/watch?v=nuBnP_GH_20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>record beating speed video</button>
          </a>


        </div>
      </section>
      {/* FOOTER */}
      <footer className="footer">
        <p>Koenigsegg Jesko Absolut — Engineering Masterpiece & Record-Breaking Hypercar</p>
      </footer>
        </div>
      </div>
      </div>

    


      
    </div>
  );
}

export default App;