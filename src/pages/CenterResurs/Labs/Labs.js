import React from "react";
import './styles.css'
import icon1 from '../../../assets/icone papel.svg'
import icon2 from '../../../assets/icon gráfico.svg'
import icon3 from '../../../assets/icon phone.svg'
import icon4 from '../../../assets/icon star.svg'
import lab from '../../../assets/lab.png'
import labComp from '../../../assets/labComp.png'

const Labs = () => {

    return (
      <section className="labs container" >
         <div className="priloz" id='lab'>
            <div className="item-priloz">
               <img src={icon1} alt="pasport"/>
               <a href="https://mrk-bsuir.by/storage/images/ed930f57-72ed-4298-9ab9-c84d6aa8f991.pdf">Паспорт центра <br/>компетиций</a>
            </div>
            <div className="item-priloz">
               <img src={icon2} alt="plan"/>
               <a href="https://mrk-bsuir.by/storage/images/074caada-7adf-433d-a84e-a44df69fd0c9.pdf">
               План сетевого <br/>
обучения учащихся <br/>
и студентов
               </a>
            </div>
            <div className="item-priloz">
               <img src={icon3} alt="ancet"/>
               <a href="https://docs.google.com/forms/d/1bi8cJUP1ZtCB3ToO6kCcZ9dq_fmXx_X1uVO42ca9aAk/viewform?edit_requested=true">
               Анкета для <br/>
обучающихся <br/>
центра компетиций
               </a>
            </div>
            <div className="item-priloz">
               <img src={icon4} alt="pricaz"/>
               <a href="https://mrk-bsuir.by/storage/images/f7dfcf89-165d-452b-945e-b05f62f57631.pdf">
               Приказ 537 <br/>
от 31.08.22 <br/>
о сетевом обучении
               </a>
            </div>
         </div>
         <div>
            <h2 className="labs-handler">
               <span className="span-acent">ЛАБОРАТОРИИ </span>
               ЦЕНТРА КОМПЕТЕНЦИЙ
            </h2>
            <p>Ресурсный центр включает 4 лаборатории, оборудованные современными рабочими местами, позволяющими вести обучение по следующим направлениям:</p>
            <div>
               <div className="item-labs-contant">
                  <ul>
                     <li>
                     сборка и наладка радиоэлектронных устройств с использованием многофункционального современного паяльного оборудования;
                     </li>
                     <li>
                     диагностика качества изготовления печатных плат и качества выполнения электромонтажных работ с применением электронного микроскопа;
                     </li>
                     <li>
                     осуществление диагностических и ремонтных работ с использованием современной измерительной аппаратуры.
                     </li>
                  </ul>
                  <img src={lab} alt="laboratory"/>
               </div>
               <div className="item-labs-contant">
                  <img src={labComp} className="img-comp" alt="laboratory"/>
                  <ul>
                     <li>
                        разработка радиоэлектронных устройств с использованием программируемых микроконтроллеров на современных высокотехнологичных стендах. Рабочие места по разработке оборудованы современными измерительными приборами, и компьютерной техникой;
                     </li>
                     <li>
                        разработка и изготовление прототипов печатных плат с использованием станков с числовым программным управлением;
                     </li>
                     <li>
                     моделирование корпусных, крепежных деталей и деталей механизмов с использованием систем 3D моделирования и 3D печати;
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Labs;