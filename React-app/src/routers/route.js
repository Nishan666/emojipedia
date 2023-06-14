import React from "react";
import { Routes, Route } from 'react-router-dom';

// importing home and Detail page
import Detail from "../components/detailPage/Detail";
import Home from "../components/mainPage/Home";

const routes =  (
  <Routes>
    {/* on Route / -> render home page */}
        <Route path="/" element={<Home/>} />   
    {/* on Route //detail/:name -> render detail page based on emoji name (ROUTING PARAMETERS)*/}
        <Route path="/detail/:name" element={<Detail/> } />
  </Routes>
);

export default routes;



