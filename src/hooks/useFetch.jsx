import {useState, useEffect} from 'react'
function useFetch(url,girisdata= []) {
    const [data, setData] = useState(girisdata)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
useEffect(() => {
    setLoading(true)
    fetch(url)
    .then(response => {

        if (!response.ok) {
            setError("hataaaa")
            setLoading(false)
            setData([])
        }else{
            
            return response.json()
        }
    })
    .then(data => {
        setData(data)
        setLoading(false)
        setError("")
    });
}, [url])



return {data,loading,error};
}
export default useFetch

