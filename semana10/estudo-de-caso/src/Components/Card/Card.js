import { useState } from 'react';

function Card(props) {
    const { title = "T", description = "D" } = props
    const {isOn, setOff} = useState(true)

    return (
        <div>
          {isOn ? <h1 onClick={() => setOff(false)}>{title}</h1> : ""}
          {isOn ? <p>{description}</p> : ""}
        </div>
      );
    }

    export default Card