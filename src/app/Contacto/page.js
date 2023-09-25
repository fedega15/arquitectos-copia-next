import Image from "next/image";
import React from "react";
import "../../../styles/contacto.css";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    text: "Telefono de contacto y whatsapp: 3364689065" ,
    avatar: "/w2.png",
    link:"//wa.link/d08xt8"
  },
  {
    id: 1,
    text: "Mail de contacto: santiagosemino@ssaestudio.com ",
    avatar: "/w2.png",
    link:"//mailto:federico.galassi9@gmail.com    "
  },
];

const page = () => {
  return (
    <section id="testimonios">
      
      <div className="img-container">
        <h2>Nuestras oficinas </h2>
        <h1>Santa Fe 2144, 3D</h1>
        <a href="https://maps.app.goo.gl/3oR6RPvDhTtfmDm79">
          <Image src="/map.png" alt="sub" width={458} height={452} border={2} />
        </a>
      </div>
      <div className="slider">
        <h2>Informacion de contacto</h2>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="card">
            <div className="text">
              <Link  href={testimonial.link}  >
              {testimonial.text} <i className={testimonial.icon}></i>
              </Link>
              <strong>{testimonial.name} </strong>
            </div>

            <div className="avatar">
              <Image
                src={testimonial.avatar}
                alt="w1"
                width={488}
                height={482}
              />
            </div>
          </div>
        ))}
        <div> 
          <a href="https://www.instagram.com/fedegalassi_/" className="redes">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://wa.link/d08xt8" className="redes">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://www.instagram.com/fedegalassi_/" className="redes">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/fedegalassi_/" className="redes">
            <i className="fa-brands fa-facebook-messenger"></i>
          </a>
          <a href="https://maps.app.goo.gl/3oR6RPvDhTtfmDm79" className="redes">
            <i className="fa-solid fa-location-dot"></i>{" "}
          </a>
        </div> 
      </div>
    </section>
  );
};

export default page;
