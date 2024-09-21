"use client"

import Chatbot from '@/components/Chatbot';
import style from  '../globals.css'

const page = () => {
  return (
    <div>
      <h2  className='parrafo' >Hola! 👋 <img className='roboto1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOVT2JVnhImpifzZkj7cmXmzlfsMLc4ki7g&s'/><p  className='parrafo' >¡Bienvenido a mi chatbot! Estoy aquí para ayudarte y aclarar cualquier duda que puedas tener sobre mis servicios y proyectos.

Este asistente virtual te guiará a través de diferentes opciones para que puedas contactarme de la manera que prefieras. Ya sea que necesites información sobre mis trabajos anteriores, quieras discutir un proyecto específico o simplemente desees conocer más sobre mis habilidades y servicios, ¡estoy aquí para ayudarte!

Si decides contactarme, podrás hacerlo a través de mi correo electrónico, por teléfono, o incluso por WhatsApp. Simplemente selecciona la opción que más te convenga, y te proporcionaré los detalles necesarios para que podamos comunicarnos de manera efectiva.

Gracias por tu interés, y espero poder conversar contigo pronto. ¡Empecemos! </p></h2>
        
        <Chatbot/>
    </div>
  )
}

export default page
