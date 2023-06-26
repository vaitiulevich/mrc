import React from "react";
import './styles.css'
import test from '../../../assets/image 21.svg'


const TestHero = () => {

    return (
      <section className="test-hero container">
         <div className="hero-content">
            <h1>
            <span className="span-acent">ТЕСТ</span><br/>
            ЦЕНТРA КОМПЕТЕНЦИЙ<br/>
            </h1>
            <div className="hero-descrioption">
               <p>
                  Тут вы сможете узнать какое направление вам ближе всего
               </p>
            </div>
         </div>
         <img src={test} alt="test"/>
      </section>
   );
}

export default TestHero;