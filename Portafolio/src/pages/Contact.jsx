import React from 'react'

 export const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-[#d1d1d1] to-[#b5b0be] h-screen text-center ">
     <h1 className="text-6xl  pt-7  space-y-2 text-[#028090] font-limelight hover:text-[#2e2e2e]  transition-colors">
     Contáctame
      </h1>
      <h3 className=" pb-1 font-serif text-4xl pt-4 text-[#911A99]">
        ¿Quieres que trabajemos juntos?
      </h3>



      {/* Contenido del formulario */}
      <div className="container absolute w-1/3 p-6 rounded-lg text-centerborder-none drop-shadow-2xl left-[28vw]">
        <form >
          
          
          <p className="mb-2 ml-12 font-serif text-lg text-left">Nombre</p>
          <div className="relative mb-5 w-80">
            
          <i className="absolute text-gray-500 transform -translate-y-1/2 fa-solid fa-user left-14 top-1/2"></i>
          <input
           
            type="text"
            name="nombre"
            placeholder="Escribe tu nombre..."

            className="p-3 pl-12 border w-[32vw] ml-9 rounded-2xl"
          / >
            </div>
            
          
          <p className="mb-2 ml-12 font-serif text-lg text-left">Email</p>
          <div className="relative mb-5 w-80">
          <i className="absolute text-gray-500 transform -translate-y-1/2 fa-solid fa-envelope left-14 top-1/2"></i>
          <input
            type="email"
            name="email"
            placeholder="Escribe tu correo electronico..."
           
            className="p-3 pl-12 border w-[32vw] ml-9 rounded-2xl"
          />
          </div>
          
          <p className="mb-2 ml-12 font-serif text-lg text-left">Asunto</p>
          <div className="relative mb-5 w-80">
          <i className="absolute text-gray-500 transform -translate-y-1/2 fa-solid fa-book left-14 top-1/2"></i>
          <input
            type="text"
            name="asunto"
            placeholder="Asunto ..."
            className="p-3 pl-12 border w-[32vw] ml-9 rounded-2xl "
          />
            </div>
        
         
          <div className="w-24 p-2 mt-4 font-bold transition ease-in-out border-none rounded-md shadow-md cursor-pointer bg-[#028090] hover:text-white hover:drop-shadow-lg ml-48 mb-7 font-limelight">
          <input type="submit"/>
          </div>
        </form>
     
      </div>
    </div>

  )
}


