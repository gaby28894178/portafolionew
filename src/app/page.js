"use client"

import Card from '@/components/card/card';
import style from  './globals.css'
import Carousel from '@/components/carrucel/Carrucel';





export default function Home() {

 


  return (
    <div>
      <main className='parrafo'>
      <h2>Bienvenido a Mi Portafolio </h2>
      <p>
¡Hola! Soy Gabriel Gabrielli, un apasionado desarrollador con experiencia en una variedad de tecnologías. A lo largo de mi carrera, he trabajado con Python, JavaScript, CSS, Bootstrap, Tailwind, HTML, React, Material UI, UX y Vue.

Este portafolio es una vitrina de mis proyectos más destacados, donde aplico mis habilidades para crear soluciones innovadoras y funcionales. Me enfoco en combinar estética y usabilidad, asegurando que cada proyecto no solo sea atractivo, sino también intuitivo y fácil de usar.

Si tienes alguna pregunta o deseas colaborar, no dudes en contactarme. Estoy aquí para ayudarte a dar vida a tus ideas y llevar tus proyectos al siguiente nivel.

Explora mi trabajo y descubre cómo puedo contribuir a tu próximo proyecto.

</p>


      </main>
            <div className='carrucelfron'>
            <Carousel/>

            </div>
      <footer >
       
      </footer>
    </div>
  );
}
