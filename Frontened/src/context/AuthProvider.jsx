import React, { createContext, useContext, useState } from 'react'
export const Authcontext=createContext();

function AuthProvider({children}) {
    const initialauthuser=localStorage.getItem("users");
 const [authuser,setauthuser]=useState(
    initialauthuser?JSON.parse( initialauthuser):undefined
 )
  return (
    <Authcontext.Provider value={[authuser,setauthuser]}>
        {children}
    </Authcontext.Provider>
  )
}
export const useAuth=()=> useContext(Authcontext); 
export default AuthProvider


/*✅ createContext → Ek global storage create karta hai.
✅ useContext → Us storage ka data kisi bhi component me access karta hai.
✅ Provider → Data ko share karne ka kaam karta hai.

💡 Yeh Redux ka lightweight alternative hai! 🚀 */







