import { Routes, Route, Navigate } from "react-router-dom";

import { useDrawerContext } from "../shrades/contexts";
import { useEffect } from "react";
import { Home, Users } from "../pages";

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
      <Route path="/usuarios" element={<Users/>} />
      

      <Route path="*" element={<Navigate to="/pagina-inicial" />} /> 
    </Routes>
  );
};