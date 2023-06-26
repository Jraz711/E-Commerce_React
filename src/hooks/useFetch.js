import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl) => {

  const [infoApi, setinfoApi] = useState()
  const [hasError, sethasError] = useState()
  const [isLoading, setisLoading] = useState()

  const getApi = (path) => {
    const url = `${baseUrl}${path}`
    setisLoading(true)
    axios.get(url)
      .then(res => {
        setinfoApi(res.data)
        sethasError(false)
      })
      .catch(err => {
        console.log(err)
        sethasError(true)
      })
      .finally(() => {
        setisLoading(false)
      })
  }

  return [infoApi, getApi, hasError, isLoading]

}


export default useFetch