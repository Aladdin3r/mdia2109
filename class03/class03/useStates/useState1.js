import { useState } from "react";

export default function UseStateFive() {
    const [number, setNumber] = useState(0); 
    const [color, setColor] = useState("gray"); 

    const HandleChange = () => {
        if(number == 1) {
            setColor("orange");
        }
    }

    return(
        <div>
            <button onClick={() => {
                setNumber(number + 1)
                HandleChange()
            }}>
                Add Number
            </button>
        </div>
    )
}