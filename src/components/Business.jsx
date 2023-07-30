import React from 'react'
import styles, { layout } from '../style'
import { features } from '../constants';

const FeatureCard = ({icon, title, content, index})=>{
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>

      <div className="flex flex-col m-3">
        <h4
          className={`font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1`}
        >
          {title}
        </h4>

        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
}

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} mb-5 max-w-[470px]`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <button className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-10">Get Started</button>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {
          features.map((feature, index)=>(
            <FeatureCard key={feature.id} {...feature} index={index}></FeatureCard>
          ))
        }
      </div>
    </section>
  );
}

export default Business