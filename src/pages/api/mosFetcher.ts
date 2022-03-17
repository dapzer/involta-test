import parse from "rss-to-json";

export const fetchApi = async <T>(): Promise<T> => {
  const response = await parse("https://www.mos.ru/rss", "");
  const data = JSON.parse(JSON.stringify(response.items))

  console.log(response.items);

  return data;
};

