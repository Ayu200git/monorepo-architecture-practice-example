import React from 'react'

export function Button({ children }) {
  return (
     <button 
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
 