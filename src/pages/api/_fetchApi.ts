import axios from "axios";
import queryString from "query-string"

export const getFeed = async (key: any) => {
  const apiUrl = process.env.FEED_API_URL || "http://localhost:3000/api/feed"
  const parse = queryString.stringifyUrl({url: apiUrl, query: key.queryKey[1]})
  const res = await axios.get(parse)

  return res.data
}
