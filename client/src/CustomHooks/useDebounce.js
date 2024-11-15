import React, { useEffect, useState } from 'react'

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState("")

useEffect(()=>{

    let handleDebounce = setTimeout(()=>{
        setDebouncedValue(value)
    },delay) 

    return(()=>{
        clearTimeout(handleDebounce)
    })
},[value, delay])

  return debouncedValue
}

export default useDebounce