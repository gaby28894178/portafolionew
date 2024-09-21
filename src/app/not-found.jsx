"use client";

import imgerror from "../public/img-componentes/5203299.jpg";
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


export default function NotFound() {
  return (
    <>
      <Head>
        <link rel="preload" href="/img-componentes/5203299.jpg" as="image" />
      </Head>
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <Link href='/' passHref className="mb-4 text-blue-500 hover:underline">
 Regresar a la página de inicio
        </Link>
        <Image  
          src={imgerror}
          width={250}
          height={250}
          alt="Imagen de error 404"
          sizes="(min-width: 808px) 50vw, 100vw"
          className="rounded shadow-lg"
          priority
        />
        <h1 className="mt-4 text-xl font-bold">Error 404: Página no encontrada</h1>
      </div>
    </>
  );
}

