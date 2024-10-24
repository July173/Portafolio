import React,{ useState } from "react";
import {Informacion} from '../informacion/projects'
import BGimage from '../assets/imagen/beutyGlow.jpeg'
import BSimage from '../assets/imagen/bingo.jpeg'
import PFimage from '../assets/imagen/porfolio.jpeg'

const getImage=(imageName)=>{
  const images={
    BG: BGimage,
    BS: BSimage,
    PF: PFimage
  };
  return images[imageName];
}
export const Projects= () =>{

const [project]= useState(Informacion)


  return (
    <div className="bg-gradient-to-b from-[#d1d1d1] to-[#b5b0be] h-screen ">
      <h1 className="text-6xl p-16 pt-7 pb-3 space-y-2 text-[#028090] font-limelight hover:text-[#2e2e2e] transition-colors">
        Proyectos
      </h1>
        <section className="flex justify-center ">
          {project.map(proj => (
            <div className="border-black border-2 p-5 m-5 w-96  rounded-md bg-gray-400 shadow-lg hover:border-[#028090]" key={proj.id} >
              <div className=" border-none "> <img src={getImage(proj.img)} alt="" className="rounded-lg" /></div>
              <div className="text-center">
              <h3 className="text-2xl font-limelight p-3 hover:text-[#028090]">{proj.title}</h3>
              <p className="font-serif ">{proj.description}</p>
              <p className="font-bold mt-3">{proj.tecnologias}</p>
              </div>
            </div>
          ))}
        </section>

    </div>
  );
};
