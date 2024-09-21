// pages/page.jsx
'use client'

import React from 'react';
import Card from "@/components/card/card";
import styles from "./proyecto.module.css"; 
import Image from 'next/image';

const technologies = [
  { imgURL: "https://live.staticflickr.com/65535/54009085672_4a450b0217_m.jpg ",caption:"App CLima" },

  { imgURL: "https://live.staticflickr.com/65535/54009988156_5e6dd200c3_m.jpg", caption: "Hoteleria Reservas " },
  { imgURL: "https://live.staticflickr.com/65535/54010213718_79f771527f_m.jpg", caption: "PELICULAS" },
  
  { imgURL: "https://live.staticflickr.com/65535/54010314844_461db5c077_m.jpg", caption: "BarberShop" },
  { imgURL: "https://live.staticflickr.com/65535/54009085632_a2cd0515fa_m.jpg", caption: "Pokedex" },
  { imgURL: "https://live.staticflickr.com/65535/54010213723_714b3d91df_m.jpg", caption: "Muestra de productos" },

];

const Page = () => {
  return (
    <div className={styles.container}>
        {technologies.map((tech) => (
        <Card key={tech.caption} imgURL={tech.imgURL} caption={tech.caption}>
          <Image src={tech.imgURL} alt={tech.caption} width={500} height={500} />
        </Card>
      ))}
    </div>
  );
};

export default Page;


