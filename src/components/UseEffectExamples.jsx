import React, { useState, useEffect } from "react";

export default function App() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("1");
        return () => {
            console.log("2");
        };
    }, []);

    useEffect(() => {
        console.log("3");
        return () => {
            console.log("4");
        };
    }, [count]);

    useEffect(() => {
        console.log("5");
        return () => {
            console.log("6");
        };
    });

    return (
        <div>
            <div>
                <button onClick={() => setCount(count + 1)}>Increment Count</button>
            </div>
        </div>
    );
}