import React from 'react'
import styles, { layout } from '../style';

import { apple, google } from '../assets';


const SectionInfo = ({heading_1, heading_2=null, para, button_text=null, button_img}) => {
  return (
    <div className={`${layout.sectionInfo}`}>
      <h2 className={styles.heading2}>
        {heading_1}
        <br className="sm:block hidden" /> {heading_2}
      </h2>
      <p className={`${styles.paragraph} mb-5 max-w-[470px]`}>{para}</p>

      {button_text != null ? (
        <button className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-10">
          {button_text}
        </button>
      ) : null}

      {!button_img ? (
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="google_play"
            className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google_play"
            className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          />
        </div>
      ) : null}
    </div>
  );
}

export default SectionInfo