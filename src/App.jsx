import { useState } from 'react';
import Header from './components/Header';
import Carrusell from './components/Carrusell';
import Banner from './components/Banner';
import banner from './assets/casa-de-papel.jpeg';

function App() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${banner})` }}>
        <Header />
        <Banner />
        <Carrusell />
      </div>
    </div>
  );
}

export default App;
