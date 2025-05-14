import React, { useState, useEffect } from 'react'
import useDebounce from '../hooks/useDebounce'

const SearchComponent = () => {

    const [inputVal, setInputVal] = useState('')
    const debouncedValue = useDebounce(inputVal, 2000);

    useEffect(() => {
        try {
            fetch(`https://dummyjson.com/users/search?q=${debouncedValue}`).then(response => response.json()).then((users) => console.log(users))
        } catch (e) {
            console.log(e)
        }
    }, [debouncedValue])

    return <div>
        <input onChange={(e) => setInputVal(e.target.value)} value={inputVal} />
    </div>
}

export default SearchComponent