import React, { useEffect } from 'react';
const Li = ({styled,name,age,classs,rollnumber,number }) => {
  useEffect(()=>
  {
    console.log("hellow")
  },[])
  return (
    <>
        <ul style={{"list-style":`${styled}`}}>
            <li>{name}</li>
            <li>{age}</li>
            <li>{classs}</li>
            <li>{rollnumber}</li>
            <li>{number}</li>
        </ul>
    </>
  )
}
export default Li;