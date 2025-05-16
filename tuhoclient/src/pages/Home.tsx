import React from 'react';
import logo from '../assets/logo.svg'; // Asegúrate de tener el logo en esta ruta
import reactLogo from '../assets/react.svg'; // Asegúrate de tener el logo de React en esta ruta

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="flex flex-col items-center mb-10">
        <img src={logo} className="logo" alt="Logo" />
        <h1 className="text-4xl font-bold text-gray-800">Bienvenido a TUho</h1>
        <p className="mt-4 text-lg text-gray-600">Tu aplicación para gestionar tus tareas de manera eficiente.</p>
      </header>
      <main className="flex flex-col items-center">
        <div className="card bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold">Características</h2>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Gestión de tareas fácil y rápida</li>
            <li>Interfaz intuitiva y amigable</li>
            <li>Acceso desde cualquier dispositivo</li>
          </ul>
        </div>
      </main>
      <footer className="mt-10">
        <p className="text-gray-500">Hecho con ❤️ por el equipo de TUho</p>
        <div className="flex space-x-4 mt-4">
          <img src={reactLogo} className="logo react" alt="React Logo" />
        </div>
      </footer>
    </div>
  );
};

export default Home;