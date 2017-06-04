import React from 'react';

const Card = ({objInfo}) => {
  const keys = Object.keys(objInfo)
  return(
    <div>
      { keys.map((oneKey,index) => {
        if(oneKey === 'name'){
          return(
            <h3 key={index}>{objInfo[oneKey]}</h3>
          )
        }
        return(
          <p key={index}>{objInfo[oneKey]}</p>
        )
      })}
    </div>
  )
}

export default Card;
