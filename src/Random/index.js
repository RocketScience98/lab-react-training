import React from 'react'

export default function Random(props) {
    const {min, max} = props;
    let r1= Math.floor(Math.random() * (max - min) + min)
    return (
        <div>
        Random value between {min} and {max} =>
        {r1}
      </div>
    )
}
