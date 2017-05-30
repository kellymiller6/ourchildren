import React from 'react';

const WorkerCard = ({workerInfo}) => {
  // console.log('cc', workerInfo);

  return(
    <div>
      <h5>{workerInfo.workerName}</h5>
      <p>{workerInfo.workerNumber}</p>
      <p>{workerInfo.workerEmail}</p>
      <p>{workerInfo.workerType}</p>
    </div>
  )
}

export default WorkerCard;
