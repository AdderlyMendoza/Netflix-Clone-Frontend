import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import logoNetflix from '../assets/logoNetflix.png'

function Header() {
    return (
        <header className="absolute z-10 flex justify-between items-center py-4 px-16 w-full">

            {/* <div className="text-3xl font-bold text-red-700"> */}
            <div>
                {/* NETFLIX */}
                <img src={logoNetflix} alt="" width={140} />
            </div>

            <nav>
                <ul className="flex text-white">
                    <li><a href="#" className="p-2 hover:bg-black/50">Home</a></li>
                    <li><a href="#" className="p-2 hover:bg-black/50">Familia</a></li>
                    <li><a href="#" className="p-2 hover:bg-black/50">Nosotros</a></li>
                </ul>
            </nav>

            <div className="flex space-x-4 text-white text-2xl justify-center items-center cursor-pointer">
                <IoIosSearch />
                <IoIosNotificationsOutline />
                <div className="bg-blue-500 text-white text-lg p-2 rounded-xl">
                    U_U
                </div>
            </div>

        </header>
    )
}

export default Header;