// import { NextApiRequest, NextApiResponse } from "next";
// import parse from "rss-to-json";
// import { MosNewsType } from "../../types/mosNewsType";
// let buffer = []
// setInterval(async () => {
//   const response = await parse("https://www.mos.ru/rss", {});
//   const news = response.items.map((item: MosNewsType) => { return {
//     title: item.title,
//     link: item.link,
//     description: item.description,
//     date: item.published,
//     img: item.enclosures.length > 0 ? item.enclosures[0].url : ""
//   }})
//
//   buffer = news
//
//
// },300)
//
// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   console.log(req.query);
//   if (buffer.length = 0) {
//
//   }
//   res.status(200).json(buffer)
//
// }