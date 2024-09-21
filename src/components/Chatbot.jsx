// components/Chatbot.jsx
import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0); // Para manejar el flujo de conversación

  const handleSend = () => {
    if (!input) return;                             

    // Agregar el mensaje del usuario
    setMessages((prev) => [...prev, { text: `Tú: ${input}`, sender: 'user' }]);

    if (step === 0) {
      // Guardar el nombre del usuario y saludar
      setMessages((prev) => [
        ...prev,
        { text: `Robot: ¡Hola ${input}! ¿Cómo te gustaría contactarme?`, sender: 'bot' },
        { text: 'Robot: Elige una opción: 1). Correo 2). Teléfono 3). WhatsApp', sender: 'bot' },
      ]);
      setStep(1);
    } else if (step === 1) {
      // Manejar la respuesta del menú
      switch (input) {
        case '1':
          setMessages((prev) => [
            ...prev,
            { text: 'Robot: Puedes enviarme un correo a: gabgabrielligabriel@gmail.com', sender: 'bot' },
          ]);
          break;
        case '2':
          setMessages((prev) => [
            ...prev,
            { text: 'Robot: Puedes contactarme al número: +54 11 21674227', sender: 'bot' },
          ]);
          break;
        case '3':
          setMessages((prev) => [
            ...prev,
            { text: 'Robot: Aquí está mi WhatsApp: ', sender: 'bot' },
            { text: <a href="https://wa.me/1121674227?text=Hola%2C%20me%20interesa%20contactarte%20por%20tu%20trabajo" target="_blank" rel="noopener noreferrer">Enlace a WhatsApp</a>, sender: 'bot' },
          ]);
          break;
        default:
          setMessages((prev) => [
            ...prev,
            { text: 'Robot: Por favor, elige una opción válida: 1. Correo, 2. Teléfono, 3. WhatsApp.', sender: 'bot' },
          ]);
      }
    }

    // Limpiar el campo de entrada
    setInput('');
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">👋👋👋🤖👋👋👋<box-icon name='group' ></box-icon></div>
      <div className="chatbot-body">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender}>
              {typeof msg.text === 'string' ? msg.text : msg.text}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={step === 0 ? "Escribe tu nombre..." : "Selecciona una opción..."}
        />
        <button onClick={handleSend}>Enviar</button>
      </div>

      <style jsx>{`
        .chatbot {
          position: fixed;
          right: 20px;
          bottom: 20px;
          width: 300px;
          background: #fff;
          border: 1px solid #ccc;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
        }

        .chatbot-header {
          background: #007bff;
          color: white;
          padding: 10px;
          text-align: center;
          border-radius: 10px 10px 0 0;
        }

        .chatbot-body {
          padding: 10px;
        }

        .messages {
          max-height: 200px;
          overflow-y: auto;
          margin-bottom: 10px;
        }

        input[type="text"] {
          width: calc(100% - 60px);
          padding: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        button {
          padding: 5px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin: 0.3em;
        }

        button:hover {
          background: #0056b3;
        }

        .user {
          text-align: right;
          color: blue;
        }

        .bot {
          text-align: left;
          color: green;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
