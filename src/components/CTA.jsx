import React from 'react'
import SectionInfo from './SectionInfo'
import styles from '../style';
import SectionInfo2 from './SectionInfo2';

const text = [
  "Let’s try our service now!",
  "Everything you need to accept card payments and grow your business anywhere on the planet.",
];


const CTA = () => {
  return (
    <section
      id="CTA"
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className='flex flex-col flex-1'>
        <SectionInfo2 heading_1={text[0]} para={text[1]} button_text={"Get Started"}/>
      </div>
    </section>
  );
}

export default CTA