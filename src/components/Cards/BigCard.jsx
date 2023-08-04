import React from 'react'
import './bigcard.css';
const BigCard = ({sem,heading1,heading2}) => {
  return (
    <div>
      <div className="div1">
            <p>{sem}</p>
            <div className="smallcard-collection">
            <div className="smallcard">
                <p>{heading1}</p>
                
            </div>
            <div className="smallcard">
                <p>{heading2}</p>
            </div>

</div>
      </div>

    </div>
  )
}

export default BigCard;
