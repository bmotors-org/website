import {Route, Routes} from "react-router-dom";
import {About} from "../../pages/About";
import {Contact} from "../../pages/Contact";
import {Apps} from "../../pages/Apps";
import {Settings} from "../../pages/Settings";
import React from "react";

export type propsT = {
  colorMode: 'light' | 'dark',
  setColorMode: React.Dispatch<React.SetStateAction<"light" | "dark">>
}

export function AppRoutes(props: propsT) {
  const {colorMode, setColorMode} = props

  return (
    <Routes>
      <Route path="/" element={<About/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/apps" element={<Apps/>}/>
      <Route path="/settings" element={
        <Settings
          colorMode={colorMode}
          setColorMode={setColorMode}/>
      }/>
    </Routes>
  );
}