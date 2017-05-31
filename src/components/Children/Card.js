import React from 'react';

const Card = ({objInfo}) => {
  var keys = Object.keys(objInfo)
  return(
    <div>

      {keys.map((key,index)=>{
        console.log(key);
        if(key === 'name'){
          return(
            <h3>{objInfo[key]}</h3>
          )
        }
        return(
          <p>{objInfo[key]}</p>
        )
      })}
    </div>
  )
}

export default Card;
