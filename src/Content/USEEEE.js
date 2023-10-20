import React, { useEffect, useState } from 'react'


const USEEEE = () => {
    const [data,setdata] = useState();
    const [name,setname] = useState(window.innerHeight);
  const handleresize = ()=>
  {
    setname(window.innerWidth)
  }
    useEffect(()=>
    {
      window.addEventListener('resize',handleresize)
        fetch(`https://jsonplaceholder.typicode.com/todos/`)
      .then(response => response.json())
      .then(json => console.log(json))
     
    })
  return (
    <>
        <div>
            <button onClick={()=> setdata(1)}>Submit</button>
            <button onClick={()=> setdata(4)}>post</button>
            <button onClick={()=> setdata(3)}>click</button>
            <h1>{data}</h1>
          {name}
        </div>
    </>
  )
}

export default USEEEE