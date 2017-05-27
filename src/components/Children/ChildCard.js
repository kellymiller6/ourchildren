import React from 'react';

const ChildCard = ({childInfo}) => {
  console.log('cc', childInfo);
  return(
    <div>
      <h5>{childInfo.childName}</h5>
      <p>{childInfo.childBirthday}</p>
      <p>{childInfo.childArrivalDate}</p>
      <p>{childInfo.childInsurance}</p>
    </div>
  )
}

export default ChildCard;
