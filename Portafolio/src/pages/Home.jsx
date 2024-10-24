import React from "react";
import imagen from "../assets/imagen/home.png";

export const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#d1d1d1] to-[#b5b0be] h-screen">
      
      <h3 className="text-5xl p-10 pt-7 pb-1 font-serif ">
        Hola, <span className="text-[#911A99]">soy July Ramos</span>{" "}
      </h3>
      <h1 className="text-9xl p-10 pt-7 pb-9 space-y-2 text-[#028090] font-limelight hover:text-[#2e2e2e] transition-colors">
        Software <br />
        Developer
      </h1>
      <p className="text-2xl pl-10  font-serif">
        Con gran interés y pasión por estas tecnologías.
      </p>

      <div className="p-24  pt-3 flex space-x-28">
        <div className="flex flex-col items-center">
          <p className="text-2xl text-[#911A99] pl-10 pt-7 pb-2 font-serif font-semibold">
            Contácteme
          </p>
          <div className="text-5xl pt-1 space-x-6">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/July173"
            >
              <i class="fa-brands fa-github"></i>
            </a>{" "}
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl text-[#911A99] pl-10 pt-7 pb-2 font-serif font-semibold">
            Aprendiendo
          </p>
          <div className="text-5xl pt-1 space-x-6">
            <i className="fa-brands fa-php"></i>
            <i className="fa-brands fa-java"></i>
          </div>
        </div>
        <div className="top-14 absolute w-5/12 right-7  mr-5">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.freepik.es/vector-gratis/programador-trabajando-escritorio_5614133.htm#fromView=keyword&page=1&position=0&uuid=bdec2a1b-b5c1-435f-bfcf-4db1faab7ec2"
        >
          <img src={imagen} alt="imagen de portada" />
        </a>{" "}
        </div>
        
      </div>
      
    </div>
    
  );
};
