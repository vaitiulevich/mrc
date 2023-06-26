import React from "react";
import './styles.css'
import testImg from '../../../assets/test.png'
import { Link } from "react-router-dom";

const TestPage = () => {

    return (
      <section id='test' className="test-page container">
         <img src={testImg} alt="test" />
         <div className="test-page-content">
            <h2>Тест</h2>
            <p>Пройди тест для того что бы узнать, подходящее тебе направление! Тест поможет в более ясном понимании.</p>
            <Link className="btn-test-start" to={'/test'}>Пройти тест</Link>
         </div>
      </section>
   );
}

export default TestPage;