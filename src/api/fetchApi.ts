import axios from "axios";

interface Key {
  meta: undefined;
  pageParam: undefined;
  queryKey: [
    {
      0: string;
      source?: string | undefined;
    }
  ]
}

export const getFeed = async (key?: any) => {
  const source = key?.queryKey[1].source

  if (source != "All") {
    const res = await axios.get(`http://localhost:3000/api/feed?sort=date&source=${source}`)
    return res.data
  }

  const res = await axios.get("http://localhost:3000/api/feed?sort=date")
  return res.data


}