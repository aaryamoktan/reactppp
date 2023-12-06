import { createContext } from "react";
const appContext = createContext();
const AppProvider = ({children})=>
{
    const userdata = {
        name:"aaarya",
        age:"25"
      }
   
    return <appContext.Provider value={userdata}> {children}</appContext.Provider>
}
export {AppProvider,appContext};