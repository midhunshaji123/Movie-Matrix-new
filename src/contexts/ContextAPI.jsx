import React, { createContext, useState } from 'react'
export const contentTypeContext = createContext()

const ContextAPI = ({children}) => {

    const [contentType,setContentType] = useState("movie")

  return (
    <contentTypeContext.Provider value={{contentType,setContentType}}>
             {children}
    </contentTypeContext.Provider>
  )
}

export default ContextAPI