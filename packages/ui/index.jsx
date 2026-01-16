import React from 'react'

export function Button({ children, ...props }) {
  return (
     <button 
       {...props}  
       style={{
        background: "#16a34a",
        color: "white",
        padding: "10px 16px",
        borderRadius: "6px",
        border: "none"
       }}
     >
        {children}
     </button>
  )
}

export function Butt({ children, ...props }) {
     return (
     <button 
       {...props}  
       style={{
        background: "blue",
        color: "black",
        padding: "10px 16px",
        borderRadius: "10px",
        border: "2px solid blue"
       }}
     >
        {children}
     </button>
     );  
}
