import React from 'react';

const Card = ({objInfo}) => {
  const keys = Object.keys(objInfo)
  return(
    <div className='card'>
      { keys.map((oneKey,index) => {
        if(oneKey === 'name'){
          return(
            <h3 key={index} className='card-name'>{objInfo[oneKey]}</h3>
          )
        }
        return(
          <p key={index} className='card-keys'>{oneKey}: {objInfo[oneKey]}</p>
        )
      })}
    </div>
  )
}

export default Card;
