import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState({results: null, loading: true, error: null})

    const fetchData = async () => {
        try {
            const response = await fetch(url)
            const results = await response.json()
            setData({results, loading: false, error: null})
        } catch (err) {
            setData({results: null, loading: false, error: err})
        }
    }

    useEffect(() => {

            fetchData()
    }, [])

    const reFetch = () => {
        fetchData()
    }


    return {data, reFetch}

}

export default useFetch