import React from 'react';
// import batman from '../assets/fotos/batman.png'


// export const Carrusell = ({ blog }) => {
function Carrusell({ blog }) {

  // console.log(blog.imagen)

  return (

    <div className='h-full w-[400px] m-2 flex-shrink-0 cursor-pointer'>
      <div className='overflow-hidden mb-4 relative h-[250px]'>
        {/* <img src={`/imgs/blogpost${blog.id}.avif`} alt={blog.title} /> */}
        <img src={`fotos/${blog.imagen}`} alt={blog.title} />
        <span className='absolute top-3 left-4 border border-blue-200 text-xs rounded-xl px-4 py-2 font-semibold capitalize bg-blue-100'>
          {blog.category}
        </span>
      </div>
    </div>

  );

};

export default Carrusell;