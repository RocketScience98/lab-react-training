import React, {useState} from 'react'

export default function ClickablePicture(props) {
    const [clicked, setClicked] = useState('false');

    const handleClick = () => setClicked(!clicked);
  
    return (
      <div>
        <img
          onClick={handleClick}
          src={clicked ? props.img: props.imgClicked}
          alt="max"
        />
      </div>
    );
}
