import React, { useState } from 'react';

const DocWidth = () => {

    const [size, setSize] = useState(window.innerWidth);

    React.useEffect(() => {

        const handleResize = () => {

            setSize(window.innerWidth);

        }

        window.addEventListener('resize', handleResize);

    }, [size]);

    var digit = size;
    var firstDigit = ('' + digit)[0];

    // // string to int
    var firstInt = parseInt(firstDigit);

    console.log("First Digit", firstInt);

    return (
        <div>
            <h1>{size}</h1>
            <p>Screen Size First Digit is <b>{firstInt}</b></p>
        </div>
    )
}


export default DocWidth;