import React ,{ useState,createContext } from "react";
import { flowers } from "../components/mock/flower";


export const FlowersContext = createContext();

export const Context =(props)=>{
  
    const [data, setData]= useState(flowers);
  return(
     <FlowersContext.Provider value={[data, setData]}>
         {props.children}
     </FlowersContext.Provider>
   );
};