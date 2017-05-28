import React from 'react';

const SitterCard = ({sitterInfo}) => {
  console.log('cc', sitterInfo);

  return(
    <div contenteditable={true}>
      <h5 contenteditable="true">{sitterInfo.sitterName}</h5>
      <p>{sitterInfo.sitterNumber}</p>
      <p>{sitterInfo.sitterEmail}</p>
    </div>
  )
}

export default SitterCard;
