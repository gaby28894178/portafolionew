// About
"use client";
import Carousel from '../../components/carrucel/Carrucel'

import AutoText from "..//../components/textosolo/TextoSolo"
import style from './about.module.css'



const page = () => {


  return (
    <div className={style.conten}>
     
         <AutoText />
        <Carousel />
      </div>
    
  )
}

export default page