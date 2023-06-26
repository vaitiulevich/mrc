import React from "react";
import './styles.css'
import heroImg from '../../../assets/hero-img.png'

const Hero = () => {

    return (
      <section className="hero container">
         <div className="hero-content">
            <h1>
            ЦЕНТР КОМПЕТЕНЦИЙ<br/>
            <span className="span-acent"> информационно-коммуникационных технологий и электроники</span>
            </h1>
            <div className="hero-descrioption">
               <p>
               Подготовка учащихся и студентов, а так же рабочих и специалистов промышленного сектора и педагогов в области радиоэлектроники.
               </p>
               <p>
               Научно-методическая, экспериментальная и инновационная, учебно-производственная деятельности.
               Использование площадки центра компетенций для подготовки учащихся (студентов) в чемпионатах WorldSkills International.
               </p>
            </div>
         </div>
         <img src={heroImg} className="img-hero" alt="mrk" />
      </section>
   );
}

export default Hero;