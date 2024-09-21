// components/Carousel.jsx
'use client';

import { useState } from 'react';
import data from '../../public/jason/data.json';
import styles from './Carrucel.module.css'; // Asegúrate de que la ruta sea correcta

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  if (data.length === 0) return <p>Cargando...</p>;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200 p-4">
      <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md w-full overflow-hidden">
        <div className="flex justify-center mb-4">
          <img
            className={styles.img_carrucel} // Aplica la clase CSS
            src={data[currentIndex].imgURL}
            alt={data[currentIndex].caption}
          />
        </div>
       
        <div className="flex justify-between mt-4">
          <button onClick={prevImage}className={styles.prevbtn}>
            &#9664; {/* Flecha izquierda */}
          </button>
          <button onClick={nextImage} className={styles.nexbtn}>
            &#9654; {/* Flecha derecha */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
