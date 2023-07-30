import React from 'react'
import styles, { layout } from '../style';


const SectionInfo2 = ({
  heading_1,
  para,
  button_text = null,
}) => {
  return (
    <div className={`${layout.sectionInfoHorizontal} justify-evenly`}>
      <div>
        <h2 className={styles.heading2}>
          {heading_1}
          <br className="sm:block hidden" />
        </h2>
        <p className={`${styles.paragraph} mb-5 max-w-[470px]`}>{para}</p>  
      </div>

      {button_text != null ? (
        <button className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ml-10">
          {button_text}
        </button>
      ) : null}
    </div>
  );
};

export default SectionInfo2