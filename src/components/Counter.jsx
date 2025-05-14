import React, { useState, useEffect } from 'react'

const Counter = () => {

    const [countVal, setCountVal] = useState(0)
    const [isPlay, setIsPlay] = useState(true)

    useEffect(() => {
        let timer
        if (isPlay) {
            timer = setTimeout(() => {
                setCountVal(prev => prev + 1)
            }, 1000)
        }
        return () => clearInterval(timer)
    })

    const handlePlay = (play, stop) => {
        if (stop) {
            setCountVal(0)
        }
        setIsPlay(play)
    }

    return (
        <div>
            Count: {countVal}
            <div>
                <button onClick={() => handlePlay(true)}>Play</button>
                <button onClick={() => handlePlay(false)}>Pause</button>
                <button onClick={() => handlePlay(false, true)}>Stop</button>
            </div>
        </div>
    )
}

export default Counter;