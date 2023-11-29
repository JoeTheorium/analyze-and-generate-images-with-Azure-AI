import React, { useState } from "react";

export const App = () => {
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
      <h1>Aplicación de Computer Vision</h1>

      <label>
        Dirección URL de la imagen:
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </label>

      <br />

      <button onClick={handleImageAnalysis}>Analizar Imagen</button>
      <button onClick={handleImageGeneration}>Generar Imagen</button>
    </div>
  );
};
