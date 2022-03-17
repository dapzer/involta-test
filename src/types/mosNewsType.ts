export interface MosNewsType {
  id: number;
  description: string;
  content: string;
  author: string;
  title: string;
  link: string;
  published: number
  created: number;
  category: [];
  enclosures: [{
    url: string;
    type: string;
  }]
  media: {}
}
