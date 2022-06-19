import {BrowserRouter} from "react-router-dom";
import React from "react";

type Children = {
  children: React.ReactNode
}

export function AppProviders({children}: Children) {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
}