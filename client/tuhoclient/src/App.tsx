import './App.css'
import { Route, Routes, useNavigate } from "react-router";

import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import type { MenuItem } from 'primereact/menuitem';
import Home from './pages/Home';

function App() {

  const pageNav = useNavigate();// Hook para obtener la ruta actual

  const items: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => {
        pageNav("/");
      },
    },
  ];
  return (
  <>
    <nav className="navbar-top px-6  py-1.5 w-full  flex flex-row gap-1.5 justify-between items-center">
        <img
          src="/logo/IdUHo-05.png"
          className="aspect-square"
          width={60}
          alt="AR&E logo"
        />
        <div className="flex flex-row gap-2">
          <Button icon="pi pi-sign-in" label="Iniciar" />
          <Button
            className="bg-blue-400"
            icon="pi pi-user-plus"
            label="Registrarse"
          />
        </div>
      </nav>
      <section className="flex flex-row flex-nowrap gap-2 grow">
        <aside className="aside-nav bg-gray-400 p-1.5 rounded-sm">
          <Menu model={items} />
        </aside>
        <div className="section-content w-full flex flex-col max-w-[85%] justify-star items-star border-t-2 border-gray-200 border-b-2 gap-10">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </section>
      <footer className="w-screen text-sm font-bold px-1.5 flex justify-center p-3 ">
        <span>UHo.2025</span>
      </footer>
    </>
  )
}

export default App
