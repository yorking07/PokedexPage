import axios from 'axios'
import react, { useState } from 'react'

const useFetch = (url) => {
    const [infoApi, setInfoApi] = useState()
    
    const getApi = () => {
        axios.get(url)
        .then(res => setInfoApi(res.data))
        .catch(err => console.log(err))
    }

    const getType = (urlType) => {
        axios.get(urlType)
        .then(res => {
            const obj = {
            results: res.data.pokemon.map(e => e.pokemon)
            }
            setInfoApi(obj)
        })
        .catch(err => console.log(err))
    }

    return[ infoApi, getApi,getType]
}

export default useFetch