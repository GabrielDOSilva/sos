import { Routes, Route, Navigate } from "react-router-dom";
import { Button } from '@mui/material';
import { useDrawerContext } from "../shrades/contexts";
import { useEffect } from "react";

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(() =>{
    setDrawerOptions([
      {
        label: 'Home',
        icon: 'home',
        path: '/pagina-inicial',
      },
      {
        label: 'test1',
        icon: 'map',
        path: '/test1',
      },
      {
        label: 'test2',
        icon: 'star',
        path: '/test2',
      }
    ])
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Teste</Button>} />
      <Route path="/test1" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Teste</Button>} />
      <Route path="/test2" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Teste</Button>} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} /> 
    </Routes>
  );
};