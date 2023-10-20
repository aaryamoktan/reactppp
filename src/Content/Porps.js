import React, { useState } from 'react'
const Porps = () => {
  const [add ,setadd] = useState("");
  const [name,setname] = useState([])
  const change = (e)=>
  {
    setadd(e.target.value)
  }
  const click = ()=>
  {
    setname((addi)=>
    {
      return [...addi,add]
    })
    setadd('')
  }
  const deleted = (id)=>
  {
    console.log("delete"+ id);
    setname((addi)=>
    {
      return addi.filter((arrele,index)=>
      {
        return index!==id
      })
    })
  }
  return (
    <>
    <input type="text" onChange={change}  value={add} placeholder='add items name'/>
    <button type="submit" onClick={click}>+</button>  
    {name.map((elel,index)=>
    {
      let id = index
      return  <><div><li><button onClick={()=>
      {
        deleted(id)}}
        >delete</button>{elel}</li></div></>
      
    })}
    </>
  )
}

export default Porps