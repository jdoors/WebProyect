import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import blanquito from "./img/blanquito.jpg";
import clarito from "./img/clarito.jpg";
import firu from "./img/firu.jpg";
import marron from "./img/marron.jpg";
import michi from "./img/michi.jpg";
import mini from "./img/mini.jpg";
import negro from "./img/negro.jpg";
import obero from "./img/obero.jpg";
import tigre from "./img/tigre.jpg";
import ton from "./img/ton.jpg";

export default function CarouselComponent() {
  return (
      <div className="h-auto mx-auto my-24 w-[600px]">
          <h2 className="flex justify-center mt-6 mb-4 ml-4 text-3xl font-semibold text-orange-500 uppercase">Nuestras Mascotas</h2>

          <div>
          <Carousel infiniteLoop useKeyboardArrows autoPlay>
              <div>
                  <img src={blanquito} alt="gato" />
              </div>
              <div>
                  <img src={clarito} alt="gato" />
              </div>
              <div>
                  <img src={firu} alt="gato" />
              </div>
              <div>
                  <img src={marron} alt="gato" />
              </div>
              <div>
                  <img src={michi} alt="perro" />
              </div>
              <div>
                  <img src={mini} alt="perro" />
              </div>
              <div>
                  <img src={negro} alt="perro" />
              </div>
              <div>
                  <img src={obero} alt="perro" />
              </div>
              <div>
                  <img src={tigre} alt="perro" />
              </div>
              <div>
                  <img src={ton} alt="perro" />
              </div>
          </Carousel>
          </div>
      </div>
  );
}