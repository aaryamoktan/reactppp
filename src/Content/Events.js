import React, { useState } from 'react'
const Events = ({ message, children,onPlay,onPause }) => {
    const [name,setname] = useState("play")
    const [color,setcolor]= useState("white")
    const [color1,setcolor1] = useState("white")
    let playing = false;
    const handleclick = (e) => {
       e.preventDefault()
        e.stopPropagation()
        if (playing)
        {
            onPlay();
            setname("Pause")
            setcolor("black")
            setcolor1("white")
            
        }
        else{
            onPause()
            setname("Play")
            setcolor('blue')
            setcolor1('black')
           
        }
        playing =!playing
    }
    return (
        <>
        <div className='apple' style={{background:`${color}`}}>
            <button style={{background:`${color}`, color:`${color1}`}}          onClick={handleclick}>{name}</button>
            </div>
        </>
    )
}
export default Events