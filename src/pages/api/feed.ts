import type { NextApiRequest, NextApiResponse } from 'next'
import parse from 'rss-to-json';
import { BaseNewsType } from "../../types/baseNewsType";
import { NewsType } from "../../types/newsType";
import { QueryDefaultValue } from '../../types/QueryDefaultValue';

let buffer: NewsType[] = []
let localeBuffer: NewsType[] = []
let news: NewsType[] = []

const fetchNews = async () => {
  localeBuffer = []
  try {
    const mosResponse = await parse(`${process.env.MOS_API_URL}`, {});
    const mosNews = mosResponse.items.map((item: BaseNewsType) => {
      return {
        title: item.title,
        link: item.link,
        description: item.description,
        date: item.published,
        img: item.enclosures.length > 0 ? item.enclosures[0].url : "",
        source: "www.mos.ru"
      }
    })
    localeBuffer = localeBuffer.concat(mosNews)
  } catch (error: any) {
    console.log(`Failed to get data from Mos.ru. ${error.message}`);
  }
  try {
    const lentaResponse = await parse(`${process.env.LENTA_API_URL}`, {})
    const lentaNsNews = lentaResponse.items.map((item: BaseNewsType) => {
      return {
        title: item.title,
        link: item.link,
        description: item.description,
        date: item.published,
        img: item.enclosures.length > 0 ? item.enclosures[0].url : "",
        source: "www.lenta.ru"
      }
    })
    localeBuffer = localeBuffer.concat(lentaNsNews)
  } catch (error: any) {
    console.log(`Failed to get data from Lenta.ru. ${error.message}`);
  }

  buffer = localeBuffer
}

setInterval( async () => {
  await fetchNews()
}, 360000)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (buffer.length < 1) {
    await fetchNews()
  }

  news = buffer

  if (req.query.sort && req.query.sort === "date") {
    news = news.sort((a, b) => a.date + b.date)
  }

  if (req.query.source && req.query.source !== QueryDefaultValue.source) {
    news = news.filter((post) => post.source === req.query.source)
  }

  if (req.query.search && (req.query.search !== QueryDefaultValue.search) && req.query.search !== undefined) {
    const searchFiltration = (data: string, searchText: string) => {
      return data.toLowerCase().includes(searchText.toLowerCase())
    }

    news = news.filter((post: NewsType) => {
      return post.description && searchFiltration(post.description, req.query.search as string) || post.title && searchFiltration(post.title, req.query.search as string)
    })
  }

  const newsQuantity = news.length

  if (req.query.limit && +req.query.page > 0) {
    const page = +req.query.page
    const limit = +req.query.limit
    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    news = news.slice(startIndex, endIndex)
  }

  res.status(200).json([news, newsQuantity])
}