import React, { useState } from 'react';
// this is an example of a controlled component

export function PhoneNumberForm() {
    const [number, setNumber] = useState(0);
    // set the state attribute and the setstate function, and the default value 0, using useState

    // HANDLE CHANGE
    const handleChange = (e) => {
        const newNumber = e.target.value
        // set the newNumber variable as the value of the input 

        // originally: if (!newNumber.isNaN(Number(newNumber)) && ... ) but took that out because it was fucky
        if (!newNumber.isNaN && newNumber.length <= 10) {
            setNumber(e.target.value);
            // if the new number is both a number object and has a length less or equal to 10, set the state.number as the value
        }
    };

    // HANDLE SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Sending confirmation code to ${number}.`);
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>Phone Number: 
                <input type="tel" value={number} onChange={handleChange} />
            </label>

            <input type="submit" value="Submit" />
        </form>
    )
}