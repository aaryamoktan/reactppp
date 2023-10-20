import React, { useEffect, useState } from 'react'
const Counter = () => {
  const [name,setName] = useState(
    {}
  )
  const change =(e)=>
  {
    setName(e.target.value)
  }
  useEffect(()=>
  {
    console.log("render")
  },[name])
  return (
    <>
    <form >
    <input type="text" onChange={change} name="firstname" value={name.firstname}/>
    <button type="submit" onClick={(e)=>
    {
      e.preventDefault()
      console.log(name)
    }}>submit</button>
          </form> 
    </>
  )
}
export default Counter