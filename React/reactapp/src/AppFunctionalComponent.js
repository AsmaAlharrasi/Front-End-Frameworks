import React, { useState } from 'react';
import UserData from './UserData';
import { useEffect } from 'react';

function AppFunctionalComponent() {
  const [UserValue, setUserValue] = useState({
    neme: "Asma",
    position: "Full stack developer",
    age: 22
  });

  useEffect(() => {
    console.log("Did Mount");
  },[])

  useEffect(() => {
    console.log("Did Update");
  }, [UserValue])

  useEffect(() => {
    return () => {
      console.log("Did UnMount");
    }
  })




  const changName = (name) => {
    setUserValue({
      ...UserValue,
      name
    });
  }
  let cond = null;
  let flag = false;

  return (
    <>
      <h2>Hello From React</h2>
      { cond ?? <UserData name={UserValue.name} position={UserValue.position} age={UserValue.age} />}
      { flag ? <UserData name={UserValue.name} position={UserValue.position} age={UserValue.age} /> : <h3>no data here </h3> }
      <button onClick={() => changName("Sara")}>Change Name 1</button>
      <button onClick={() => changName("Ali")}>Change Name 2</button>
    </>

  );
}


export default AppFunctionalComponent; 
