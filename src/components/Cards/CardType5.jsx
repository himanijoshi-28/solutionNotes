import React from 'react';
import "./bigcard.css";

const CardType5 = ({mainheading,subHeading,link}) => {
  return (
    <div className='cardType5'>
      <p className='mainheading'>{mainheading}</p>
      <p className='subheading'>{subHeading}</p>
      <img src={link} alt="" />
    </div>
  )
}

export default CardType5
