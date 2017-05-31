import React from 'react';

const SitterCard = ({sitterInfo}) => {
  //grab the keys to dynamically generate the card
  return(
    <div >
      <h5 >{sitterInfo.sitterName}</h5>
      <p>{sitterInfo.sitterNumber}</p>
      <p>{sitterInfo.sitterEmail}</p>
    </div>
  )
}

export default SitterCard;
