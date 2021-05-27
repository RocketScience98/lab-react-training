import React, {useState} from 'react'

export default function Dice() {
const [count,setCount] = useState(0)

const diceImg={
    0: "/img/dice-empty.png",
    1: "/img/dice1.png",
    2: "/img/dice2.png",
    3: "/img/dice3.png",
    4: "/img/dice4.png",
    5: "/img/dice5.png",
    6: "/img/dice6.png",
}
const rolldice = () =>{
    const randomnum = ()=>{
        return Math.round(Math.random() * (6 - 0) + 0);
    }
    return setCount(randomnum)
}
    return (
        <div>
                <img
          onClick={()=>setTimeout(rolldice,1000)}
          src={diceImg.[count]}
          alt="max"
        />    
        </div>
    )
}
