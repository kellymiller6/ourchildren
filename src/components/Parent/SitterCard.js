import React from 'react';

const SitterCard = ({sitterInfo}) => {
  return(
    <div >
      <h5 >{sitterInfo.sitterName}</h5>
      <p>{sitterInfo.sitterNumber}</p>
      <p>{sitterInfo.sitterEmail}</p>
    </div>
  )
}

export default SitterCard;
