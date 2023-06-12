import React from "react";
import { Routes, Route } from 'react-router-dom';



import Detail from "../components/detailPage/Detail";
import Entrys from "../components/mainPage/Entrys";

const routes =  (

  <Routes>

        <Route path="/" element={<Entrys/>} />
        <Route path="/detail/:name" element={<Detail/> } />

  </Routes>

);

export default routes;



