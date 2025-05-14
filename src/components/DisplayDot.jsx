import React, { useState } from 'react';

export default function App() {
    const [dotPlace, setDotPlace] = useState([]);

    const handleDot = (e) => {
        let obj = {
            x: e.clientX,
            y: e.clientY,
        };
        setDotPlace([...dotPlace, obj]);
    };

    return (
        <div
            style={{ height: '100vh', width: '100vw', position: 'absolute', backgroundColor: 'white' }}
            onClick={(e) => handleDot(e)}
        >
            Click Anywhere!
            {dotPlace.map((dot, index) => (
                <div key={index}
                    style={{
                        height: '30px',
                        width: '30px',
                        backgroundColor: 'red',
                        borderRadius: '50%',
                        position: 'fixed',
                        top: dot.y,
                        left: dot.x,
                    }}
                ></div>
            ))}
        </div>
    );
}
