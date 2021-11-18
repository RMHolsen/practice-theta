import React, { useState } from 'react'
// useState takes two arguments: the current state and the state setter
// in this case 'color' and 'set color'

export default function ColorPicker() {
    const [color, setColor] = useState();
    // yes it looks like set color refers to a function that isn't defined but it's basically a custom-labeled version of setState
    // just as 'color' is this.state { color: null } to begin with
    // if we wanted to start out with a default color we would type useState('black'); or something

    const divStyle = {backgroundColor: color};

    return(
        <div style={divStyle}>
        <p>The color is {color}.</p>
        <button onClick={() => setColor('Turquoise')}>Turquoise</button>
        <button onClick={() => setColor('Fuchsia')}>Fuchsia</button>
        <button onClick={() => setColor('LightYellow')}>Light Yellow</button>
        <button onClick={() => setColor('CornflowerBlue')}>Cornflower Blue</button>
        </div>
    )
}