import Link from 'next/link';
import style from './users.module.css';



const NavBart = () => {
  return (
    <div className={`${style.div1} h-14 bg-gradient-to-r from-sky-500 to-indigo-500`}>
      <div className={style.container}>
        <span className={style.circle}>I</span>
        <span className={style.circle2}>T</span>
      </div>
      <div className={`flex justify-center space-x-4 ${style.nav_btn}`}>
        <Link className={style.nav} href="/">Home</Link>
        <Link className={style.nav} href="/cursos">Cursos</Link>
        <Link className={style.nav} href="/about">About</Link>
        <Link className={style.nav} href="/proyecto">Proyectos</Link>
        <Link className={style.nav} href="/contacto">Contacto</Link>
      </div>
      
      <div>
 
      </div>
    </div>
  );
};

export default NavBart;
