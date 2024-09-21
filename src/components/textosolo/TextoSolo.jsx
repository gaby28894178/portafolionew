'use client';
import React, { useState, useEffect } from 'react';

import {contenTexto,card,div} from './textoSolo.module.css'

function AutoText() {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const message = 'Hola, soy Gabriel Gabriel, programador full stack con conocimientos en: HTML CSS TAILWIND  BOOTSTRAP JAVASCRIPT PYTHON FLASK VUE REACT NEXT.js UI/UX POSTGRESQL MYSQL Estoy apasionado por crear aplicaciones web dinámicas y funcionales, combinando un sólido diseño con una experiencia de usuario intuitiva...... ';

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < message.length) {
                setText((prev) => prev + message[index]);
                setIndex((prev) => prev + 1);
            } else {
                // Reiniciar el texto y el índice
                setText('');
                setIndex(0);
            }
        }, 300);

        return () => clearInterval(interval);
    }, [index, message]);

    return <div className={`${contenTexto} ${div} ${card} `}>{text}</div>;
}

export default AutoText;
