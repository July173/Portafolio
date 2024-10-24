import React, { useState } from "react";
import { skills } from "../informacion/habilidades";

export const Skills = () => {
  const [habilidades] = useState(skills);
  return (
    <div className="bg-gradient-to-b from-[#d1d1d1] to-[#b5b0be] h-screen ">
      <h1 className="text-6xl p-16 pt-7 pb-9 space-y-2 text-[#028090] font-limelight hover:text-[#911A99] transition-colors">
        Habilidades
      </h1>
      <section className="flex justify-center">
        {habilidades.map((skill) => (
          <div
            className="text-white  border-red-900 border-2 p-5 m-5 w-96 rounded-md bg-[#A03737] hover:shadow-2xl  hover: shadow-white"
            key={skill.id}
          >
            <div className="text-center">
              <h3 className="text-2xl font-limelight p-3 hover:text-[#028090]">
                {skill.title}
              </h3>
              <p className="font-serif hover:text-black ">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </section>
      <h1 className="text-6xl p-16 pt-7 pb-9 space-y-2 text-[#028090] font-limelight hover:text-[#911A99] transition-colors">
              Tecnologias 
            </h1>
    </div>
  );
};
