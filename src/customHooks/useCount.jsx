import {useState} from "react";

export const useCount = (initialState = 10) =>{

  const [counter,setState]= useState(initialState);
 
  const addItem = () => {
      setState(counter + 1)
  }

  const removeItem = () => {
      setState(counter - 1)
  }

  return{
      addItem,
      counter,
      removeItem,
  };
}
