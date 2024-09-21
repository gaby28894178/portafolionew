
import  './globals.css'


import NavBart from '@/components/navBar/NavBart';
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body >
        <main>
          <NavBart/>
          <h2></h2>
          {children}
        </main>
        
      </body>
    </html>
  );
}