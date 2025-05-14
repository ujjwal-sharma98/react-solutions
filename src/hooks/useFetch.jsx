import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`${url}`)
                const { data } = response
                setData(data)
                setLoading(false)
            } catch (e) {
                setError(e)
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    return [data, error, loading]
}

export default useFetch