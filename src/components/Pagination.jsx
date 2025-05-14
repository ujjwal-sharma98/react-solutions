import React, { useState, useEffect } from 'react';

function Pagination() {

    const [usersData, setUsersData] = useState([])
    const [pageNo, setPageNo] = useState(0)
    const [visibleUserData, setVisibleUserData] = useState([])
    const dataDiff = 5

    const handlePagePrev = () => {
        setPageNo(prev => prev - 1)
    }

    const handlePageNext = () => {
        setPageNo(prev => prev + 1)
    }

    const handleDataChange = (users) => {
        let initialVal = pageNo * dataDiff
        let lastVal = initialVal + dataDiff
        const visiData = users.slice(initialVal, lastVal)
        setVisibleUserData(visiData)
    }

    useEffect(() => {
        handleDataChange(usersData)
    }, [pageNo])

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('https://dummyjson.com/users')
                const { users } = await response.json()
                setUsersData(users)
                handleDataChange(users)
            } catch (e) {
                console.log(e)
            }
        }
        fetchUsers()
    }, [])

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {visibleUserData.map((user) => (
                    <li key={user.id}>{user.firstName}</li>
                ))}
            </ul>
            <div>
                <button onClick={() => handlePagePrev()} disabled={pageNo == 0}>Prev</button>
                <span style={{ padding: '5px' }}>Page No: {pageNo + 1}</span>
                <button onClick={() => handlePageNext()} disabled={pageNo >= (usersData.length / dataDiff) - 1}>Next</button>
            </div>
        </div>
    )
}

export default Pagination;