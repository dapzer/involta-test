// import parse from "rss-to-json";
import type { NextApiRequest, NextApiResponse } from 'next'
import parse from 'rss-to-json';
import { MosNewsType } from "../../types/mosNewsType";


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const mosResponse = await parse("https://www.mos.ru/rss", {});
  const lentaResponse = await parse("https://lenta.ru/rss/news", {});
  const mosNews = mosResponse.items.map((item: MosNewsType) => { return {
    title: item.title,
    link: item.link,
    description: item.description,
    date: item.published,
    img: item.enclosures.length > 0 ? item.enclosures[0].url : "",
    source: "www.mos.ru"
  }})
  const lentaNsNews = lentaResponse.items.map((item: MosNewsType) => { return {
    title: item.title,
    link: item.link,
    description: item.description,
    date: item.published,
    img: item.enclosures.length > 0 ? item.enclosures[0].url : "",
    source: "www.lenta.ru"
  }})

  let news = lentaNsNews.concat(mosNews)

  if (req.query.sort === "date") {
    news = news.sort((a, b) => a.date - b.date)
  }

  if (req.query.source){
    news = news.filter((post) => post.source === req.query.source)
  }



  console.log(req.query);
  res.status(200).json(news)

}
