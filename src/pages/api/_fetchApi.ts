import axios from "axios";

export const getFeed = async (key: any) => {

  const apiUrl = `http://localhost:3000/api/feed?sort=date&page=${key.queryKey[0]}&limit=${key.queryKey[1].newsLimit}`

  if (key.queryKey[1].sourceUrl != "All"){
    const res = await axios.get(`${apiUrl}&source=${key.queryKey[1].sourceUrl}&search=${key.queryKey[1].search}`)
    return res.data
  }

  const res = await axios.get(`${apiUrl}&search=${key.queryKey[1].search}`)

  return res.data

}
