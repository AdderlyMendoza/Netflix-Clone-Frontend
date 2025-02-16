import React from "react";
import Header from '../components/Header';
import Carrusell from '../components/Carrusell';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { blogs } from '../assets/data.js';

function Main() {
  const carouselBlogs = [...blogs, ...blogs]; // Duplicamos los blogs para el efecto carrusel

  return (
    // w-[1500px] mx-auto para que siempre tenga un tamaño xd
    <div className='bg-black '>
      <Header />

      <div className="relative ">

        <Banner className="relative z-10 " />

        <div className="absolute -bottom-40 w-full z-20 bg-transparent pl-16">
          <div className="overflow-hidden w-full">

            <h1 className='text-white text-2xl font-bold'>Popular en Netflix</h1>

            <div className="flex whitespace-nowrap animate-scroll">
              {carouselBlogs.map((blog, index) => (
                <Carrusell blog={blog} key={index} />
              ))}
            </div>

          </div>
        </div>

      </div>

      <div className='h-full pt-50'>

        <div className="w-full z-20 bg-transparent pl-16">
          <div className="overflow-hidden w-full">

            <h1 className='text-white text-2xl font-bold'>Series</h1>

            <div className="flex whitespace-nowrap animate-scroll">
              {carouselBlogs.map((blog, index) => (
                <Carrusell blog={blog} key={index} />
              ))}
            </div>

          </div>
        </div>

      </div>


      <div className='pt-10'>

        <div className="w-full z-20 bg-transparent pl-16">
          <div className="overflow-hidden w-full">

            <h1 className='text-white text-2xl font-bold'>Películas</h1>

            <div className="flex whitespace-nowrap animate-scroll">
              {carouselBlogs.map((blog, index) => (
                <Carrusell blog={blog} key={index} />
              ))}
            </div>

          </div>
        </div>

      </div>


      <Footer />


    </div>
  );
}

export default Main;
