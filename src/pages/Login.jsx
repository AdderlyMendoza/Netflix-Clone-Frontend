import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import introNetflix from '../assets/introNetflix.mp4'; // Asegúrate de tener la ruta correcta del video

import Header from '../components/Header.jsx'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [videoPlayed, setVideoPlayed] = useState(false); // Nuevo estado para manejar la reproducción del video
    const navigate = useNavigate();  // Hook para redirigir
    const videoRef = useRef(null); // Referencia para el video

    // Usuario y contraseña predefinidos
    const predefinedUsername = 'a';
    const predefinedPassword = 'a';

    // Manejar la finalización del video
    const handleVideoEnd = () => {
        setVideoPlayed(true); // Indicamos que el video ha sido reproducido
        navigate('/main'); // Redirigimos después de que el video termine
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === predefinedUsername && password === predefinedPassword) {
            setIsLoggedIn(true);
            setError('');
        } else {
            setError('Nombre de usuario o contraseña incorrectos');
        }
    };

    return (
        <div>
            {isLoggedIn && !videoPlayed ? ( // Solo mostrar el video si no se ha redirigido
                <video
                    ref={videoRef}
                    autoPlay
                    // loop
                    muted
                    className=" "
                    onEnded={handleVideoEnd} // Evento que dispara la redirección
                >
                    <source src={introNetflix} type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                </video>
            ) : (
                <>
                    <Header />
                    <div className='flex items-center justify-center min-h-screen bg-gray-900'>
                        <div className="bg-black/50 p-8 rounded-lg w-full sm:w-96">
                            <h2 className="text-4xl text-white mb-6 text-center">Iniciar sesión</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-white">Nombre de usuario</label>
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="w-full px-4 py-2 mt-2 text-lg rounded-md border focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-white">Contraseña</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-2 mt-2 text-lg rounded-md border focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 text-white"
                                        required
                                    />
                                </div>
                                {error && <p className="text-red-600 text-sm text-center">{error}</p>}
                                <button
                                    type="submit"
                                    className="w-full py-2 mt-4 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition"
                                >
                                    Iniciar sesión
                                </button>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Login;
