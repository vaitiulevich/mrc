import React from "react";
import './styles.css'
import Hero from "./Hero/Hero";
import Labs from "./Labs/Labs";
import LabsAll from "./LabsAll/LabsAll";
import TestPage from "./TestPage/TestPage";

const CenterResurses = () => {

    return (
      <>
      <Hero/>
      <Labs/>
      <LabsAll/>
      <TestPage/>
      </>
   );
}

export default CenterResurses;