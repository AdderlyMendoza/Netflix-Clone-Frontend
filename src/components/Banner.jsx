import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";

function Banner() {
    return (

        <div className="flex items-center h-full px-16 mb-20">
            <div className="flex-1 text-white space-y-2">
                <h1 className="text-5xl font-bold">La casa de papel</h1>
                <p className="text-md font-medium">Un misterioso hombre conocido como "El Profesor" ha pasado toda su vida planeando el mayor de los atracos de la historia: entrar en la Fábrica Nacional de Moneda y Timbre e imprimir 2400 millones de euros.</p>
                <div className="flex space-x-2">
                    <div className="flex px-4 py-2 bg-white text-black hover:bg-black/50 hover:text-white items-center space-x-1">
                        <FaPlay />
                        <h1 className="font-semibold">Play</h1>
                    </div>
                    <div className="flex px-4 py-2 bg-white/50 hover:bg-black/50 items-center space-x-1">
                        <h1 className="font-semibold">Más información</h1>
                        <IoInformationCircle className="text-2xl" />
                    </div>
                </div>
            </div>
            
            <div className="flex-1">
            </div>
        </div>

    );
}

export default Banner;