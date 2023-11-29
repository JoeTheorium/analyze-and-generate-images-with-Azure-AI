import React, { useState } from "react";

const App = () => {
  const [imageUrl, setImageUrl] = useState("");

  const handleImageAnalysis = () => {
    // Lógica para analizar la imagen
    console.log("Análisis de imagen");
  };

  const handleImageGeneration = () => {
    // Lógica para generar la imagen
    console.log("Generación de imagen");
  };

  return (
    <div>
      <h1>Computer Vision App</h1>

      <label>
        Insert URL or type prompt:
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter URL to analyze or textual prompt to generate an image"
        />
      </label>

      <br />

      <button onClick={handleImageAnalysis}>Analyze</button>
      <button onClick={handleImageGeneration}>Generate</button>
    </div>
  );
};

export default App;