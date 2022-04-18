import {useState} from 'react'
import axios from 'axios'

export const useShortener = () => {

    const [url, setUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')

    const handleOnChangeUrl = (event) =>{
        setUrl(event.target.value)
    }

    const submitShortUrl = async() =>{
        await axios.post('http://localhost:4000/url/',{
            url
        }).then( res => {
            setShortUrl(res.data.data.shortURL)
        }).catch( err =>{
            console.log(err)
        })
    }

    const cleanInput = () =>{
        setUrl('')
    }

  return {
    url,
    shortUrl,
    handleOnChangeUrl,
    submitShortUrl,
    cleanInput
  }
}
