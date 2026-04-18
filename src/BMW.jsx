import "./App.css";

import React from "react";
import "./App.css";

function BMW() {
  const engineSpecs = [
    { label: "Engine Type", value: "4.0 L Naturally Aspirated V8 (P60B40)" },
    { label: "Power", value: "444–500+ hp (race spec)" },
    { label: "Torque", value: "480 Nm (approx)" },
    { label: "Redline", value: "8,000+ rpm" },
    { label: "Weight", value: "1,100 kg (race version)" },
    { label: "Drivetrain", value: "Rear-Wheel Drive (RWD)" },
  ];

  const performance = [
    "Top Speed: ~260 km/h",
    "0–100 km/h: ~4.0s",
    "Track-optimized acceleration",
    "High downforce stability",
    "Balanced race handling",
  ];

  const aeroFeatures = [
    "Wide-body aerodynamic kit",
    "Large rear wing",
    "Front splitter",
    "Ventilated hood",
    "Side cooling vents",
  ];

  const chassis = [
    "Reinforced E46 race chassis",
    "FIA-spec roll cage",
    "Lightweight stripped body",
    "Carbon reinforced panels",
  ];

  const handling = [
    "Race suspension tuning",
    "High-grip racing tires",
    "Hydraulic steering system",
    "Track-balanced setup",
  ];

  const transmission = [
    "6-speed sequential gearbox",
    "Fast-shift racing system",
    "Limited-slip differential",
  ];

  const interior = [
    "Minimal race cockpit",
    "Bucket racing seat",
    "Full roll cage",
    "Race steering wheel",
  ];

  const dimensions = [
    "Length: 4,490 mm",
    "Width: 1,920 mm",
    "Height: 1,370 mm",
    "Weight: ~1,100 kg",
  ];

  return (
    <div className="bmw-theme">
      <div className="container">

        <header className="hero bmw-hero">
          <h1>BMW M3 GTR</h1>
          <p>The legendary blue racing icon</p>
        </header>

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

        <section className="section performance">
          <h2>Performance</h2>
          <ul className="feature-list">
            {performance.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section aerodynamics">
          <h2>Aerodynamics</h2>
          <ul className="feature-list">
            {aeroFeatures.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section materials">
          <h2>Chassis</h2>
          <ul className="feature-list">
            {chassis.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section handling">
          <h2>Handling</h2>
          <ul className="feature-list">
            {handling.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section transmission">
          <h2>Transmission</h2>
          <ul className="feature-list">
            {transmission.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section interior">
          <h2>Interior</h2>
          <ul className="feature-list">
            {interior.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section dimensions">
          <h2>Dimensions</h2>
          <ul className="feature-list">
            {dimensions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <footer className="footer">
          <p>BMW M3 GTR — Pure Blue Racing Legend</p>
        </footer>

      </div>
    </div>
  );
}

export default BMW;