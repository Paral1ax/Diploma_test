import { useState } from "react";
import { ColorModeContex, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";


function App() {
  const [theme, colorMode] = useMode();
  
  return (
  <ColorModeContex.Provider value = {colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='app'>
        <main className="content">
          <Topbar/>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
          </Routes>
        </main>
      </div>
    </ThemeProvider> 
  </ColorModeContex.Provider>
  );
};

export default App;
