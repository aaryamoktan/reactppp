import { useEffect, useReducer, useRef, useState } from "react";
import { reducer } from "./reducer";

export const Nameee = ()=>
{
    const [set,sets] = useState(0);
    const name1 = useRef(0)
    console.log(name1.current)
    useEffect(()=>
    {
        name1.current = name1.current+1;
    })
    
    const [name,dispatch] = useReducer(reducer,0)
    return(
        <><input type="text" value={set} onChange={(e)=>sets(e.target.value)}/>{name1.current}
        <br/>
        {name}
        
        
            <button type="submit" onClick={()=>dispatch({type:"INC"})}>increase</button>
        </>
    )
}