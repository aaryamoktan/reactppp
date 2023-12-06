import { useReducer } from "react";
import { reducer } from "./reducer";

export const Nameee = ()=>
{
    const [name,dispatch] = useReducer(reducer,0)
    return(
        <>
        {name}
            <button type="submit" onClick={()=>dispatch({type:"INC"})}>increase</button>
        </>
    )
}