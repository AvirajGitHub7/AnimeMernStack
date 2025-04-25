import React, { createContext,useContext,useState } from 'react'
 const SearchContext=createContext();
export const SearchProvider=({children}) =>{
    const [query,setquery]=useState("");
  return (
    <SearchContext.Provider value={{query,setquery}}>
         {children}
    </SearchContext.Provider>
  );
}

export const useSearch=()=>useContext(SearchContext);

