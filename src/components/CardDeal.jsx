import React from 'react'
import { layout } from '../style'
import SectionInfo from './SectionInfo'
import { card } from '../assets';

const text = ["Find a better card deal", "in few easy steps.", "Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau."];

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <SectionInfo
        heading_1={text[0]}
        heading_2={text[1]}
        para={text[2]}
        button_text={"Get Started"}
      />
      <div className={layout.sectionImg}>
        <img src={card} alt="billing" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
}

export default CardDeal