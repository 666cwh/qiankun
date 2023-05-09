import React,{useState} from "react";
function BaseType() {
    const [booleVal, setBooleVal] = useState(false)
    return (
        <div>{`${booleVal}`}</div>
    )
}
export default BaseType
