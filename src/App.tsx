import React, { createContext, useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Help } from './components/help/Help';
import { Translator } from './components/translator/Translator';
import { NavbarCustom as Navbar } from './components/navbar/Navbar';
import { BottomNav } from './components/bottomNav/BottomNav';
import { Modale } from './components/modal/Modale';
import { SwitchComponent } from './components/switch/SwitchComponent';
import { Error } from './components/error/Error';

//Routing
const router = createBrowserRouter([
  { path: "/", element: [<Home />] },
  { path: "/translator", element: [<Translator />] },
  { path: "/help", element: [<Help />] },
  { path: "*", element: [<Navbar />, <Error />] },
]);

//Context
export const ThemeContext = createContext('');

function App()
{

  const [mode, setMode] = useState('light');

  return (
    <ThemeContext.Provider value={mode}>
      <div className={`App root-style-${mode}`}>
        <RouterProvider router={router} />
        <BottomNav component={<SwitchComponent onClick={() => { setMode(mode === 'light' ? 'dark' : 'light'); }} />} />
        <Modale />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
