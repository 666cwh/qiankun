import React, { useState, useEffect } from 'react'

const CustomHook = () => {

    const [num, setNum] = useState(1)
    
    useEffect(() => {
        setTimeout(() => {
            setNum(2)
        },3000)
    },[])
 
    return [
        num,
        setNum
    ]
}

export default CustomHook