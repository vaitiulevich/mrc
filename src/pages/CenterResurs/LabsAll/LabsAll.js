import React from "react";
import './styles.css'
import Accordion from "../../../components/Accordion/accordion";
import lab1 from '../../../assets/lab1.png'
import lab2 from '../../../assets/lab2.png'
import lab3 from '../../../assets/lab3.png'
import lab4 from '../../../assets/lab4.png'

const LabsAll = () => {

    return (
      <section className="labs-all container">
         <div>
            <p className="prefic-lab">Ещё о лабораториях</p>
            <h2 id='target'>Условия для технического<br/>развития  </h2>
            <Accordion
            title={<><span className="numb-labs">1</span>ИНТЕЛЛЕКТУАЛЬНЫХ ЭЛЕКТРОННЫХ СИСТЕМ</>}
            content={
            <>
               <span>
                  Лаборатории центра компетенций приспособлены под полный цикл изготовления прототипа устройства. В данной лаборатории можно запрограммировать и соединить элементы будущего устройство, а также проверить его работоспособность. Использование современных учебных стендов позволяет освоить работу со множеством датчиков и периферийных устройств.
               </span>
               <img src={lab1} className="item-lab-img" alt="lab"/>
            </>
         }
            />
            <Accordion
            title={<><span className="numb-labs second-lab">2</span>СИСТЕМ АВТОМАТИЗИРОВАННОГО ПРОЕКТИРОВАНИЯ</>}
            content={
               <>
               <span>
               В данной лаборатории происходит проектирование корпуса устройства, а также дизайна печатных плат. Для этого используются современные среды разработки.
               </span>
               <img src={lab2} className="item-lab-img" alt="lab"/>
            </>
         }
            />
            <Accordion
            title={<><span className="numb-labs thed-lab">3</span>АВТОМАТИЗАЦИИ ТЕХНОЛОГИЧЕСКИХ ПРОЦЕССОВ</>}
            content={
               <>
               <span>
               Лаборатория прекрасно приспособлена для печати корпусов на 3D-принтерах, в том числе и двумя цветами одновременно!!! Обработку заготовки платы можно произвести на фрезерном станке.
               </span>
               <img src={lab3} className="item-lab-img" alt="lab"/>
            </>
            }
            />
            <Accordion
            title={<><span className="numb-labs">4</span>ЛАБОРАТОРИЯ ЭЛЕКТРОМОНТАЖА</>}
            content={
               <>
               <span>
               Электромонтаж в нашей лаборатории подразумевает развитие умений и навыков по работе с паяльной станцией (навесной монтаж, smd-монтаж)
               </span>
               <img src={lab4} className="item-lab-img" alt="lab"/>
            </>
            }
            />
         </div>
      </section>
   );
}

export default LabsAll;