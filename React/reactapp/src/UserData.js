import React from 'react'

export default function UserData(props) {
    console.log(props);

  return (
    <>
    

      { (props.name != null) ? <h3>Your Name is:{props.name}</h3> : ""}
      {(props.position) ?  <h2>your position is:{props.position}</h2> :""}
      {(props.age)? <h2>your age is:{props.age}</h2> : ""}

    
    </>
  )
}
