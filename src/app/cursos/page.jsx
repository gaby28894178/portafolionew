import React from 'react'
import Card from "@/components/card/card";


  
const technologies = [
  { imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png", caption: "HTML" },
  { imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/250px-CSS3_logo_and_wordmark.svg.png", caption: "CSS" },
  { imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbwEPrxX7mPm2vZYzEXMcnVClUfFHpVVQyug&s", caption: "Tailwind CSS" },
  { imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/250px-Bootstrap_logo.svg.png", caption: "Bootstrap" },
  { imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/320px-Unofficial_JavaScript_logo_2.svg.png", caption: "JavaScript" },
  { imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZqZkpMyiN2uSuT7GAf6JSkJ44YsZqoQHdw&s", caption: "Python" },
  { imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-aTrBq-3N4t5iJFdQLsDQHbWA1leBTD8Qzw&s", caption: "Flask" },
  { imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfwSdXKlV59MMakovn5FMr02-xSB5pg-mbkQ&s", caption: "Vue" },
  { imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwytxtyGrf_Q1qJeBVTmEUhyPqY7yc9Bf64A&s", caption: "React" },
  { imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQeZqY1tA2oY-THWle1dDuI1kOsfK4_9sQtA&s", caption: "Next.js" },
  { imgURL: "https://info.netcommerce.mx/wp-content/uploads/2023/08/representaciones-experiencia-usuario-diseno-interfaz-edited-1-scaled.jpg", caption: "UI/UX" },
  { imgURL: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_251be2af3ae607c45c14e816eaa1cf41/postgresql.png", caption: "PostgreSQL" },
  { imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzaOgExWgEMUm6h4k4zB1b230vaEa-BpdVtQ&s", caption: "MySQL" },
];



const page = () => {
  return (
    <div className="">
      {technologies.map((tech) => (
        <Card key={tech.caption} imgURL={tech.imgURL} caption={tech.caption} />
      ))}
    </div>
    )
  }
  
  export default page
