import React from "react";

export const About = () => {
  return (
    <div className="bg-gradient-to-b from-[#d1d1d1] to-[#b5b0be] h-screen ">
      <h3 className="text-3xl p-10 pt-7 pb-1 font-limelight ">Sobre mi:</h3>
      <h3 className="text-8xl pl-10 pt-5 pb-5 space-y-2 text-[#028090] font-limelight hover:text-purple-800 transition-colors">
        Software Developer
      </h3>
      <div className="flex">
      <p className="text-3xl pl-10  font-serif w-4/6 space-x-5">
        Soy desarrolladora de software en proceso con experiencia en tecnologías
        como JavaScript, CSS y React, entre otras. Me considero responsable,
        dedicada y siempre con ganas de aprender más. Me apasiona crear
        soluciones innovadoras y eficientes que mejoren la experiencia del
        usuario. Disfruto colaborar en equipo y enfrentar nuevos desafíos para
        seguir creciendo profesionalmente. Siempre estoy dispuesta a adquirir
        nuevos conocimientos y mejorar mis habilidades.
      </p>
      <button className=" shadow-2xl border-none px-6 py-3 w-44 bg-[#7D09AB] h-16 font-semibold font-limelight text-4xl rounded-lg transition duration-300 ease-in-out  hover:bg-purple-700 mt-20 ml-20">CV</button>
      </div>
    </div>
  );
};
