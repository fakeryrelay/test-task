import { useState } from "react";
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

import { routes } from "./routes.data";


export const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route => {
          return (
            <Route 
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          )
        })}

      </Routes>
    </BrowserRouter>
  )
}