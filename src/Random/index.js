import React from 'react'

export default function Random(props) {
    const {min, max} = props;
    let r1= Math.floor(Math.random() * (max - min) + min)
    return (
        <div class="border border-dark m-4 p-2">
        Random value between {min} and {max} =>
        {r1}
      </div>
    )
}
