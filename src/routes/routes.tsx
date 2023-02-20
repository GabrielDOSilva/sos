import { Routes, Route, Navigate } from "react-router-dom";

import { useDrawerContext } from "../shrades/contexts";
import { useEffect } from "react";
import { Home } from "../pages";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() =>{
    setDrawerOptions([
      {
        label: 'Home',
        icon: 'home',
        path: '/pagina-inicial',
      },
      {
        label: 'Users',
        icon: 'group',
        path: '/usuarios',
      },
    ])
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Home/>} />
      <Route path="/usuarios" element={<Home/>} />
      

      <Route path="*" element={<Navigate to="/pagina-inicial" />} /> 
    </Routes>
  );
};