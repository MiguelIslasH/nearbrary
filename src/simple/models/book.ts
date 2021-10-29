import { PersistentMap } from "near-sdk-as";

@nearBindgen
export class Book {
  title: string;
  author: string;
  price: string;
  synopsis: string;
  content: [{ title: string; body: string }];

  constructor(
    title: string,
    author: string,
    price: string,
    synopsis: string,
    content: [{ title: string; body: string }]
  ) {
    this.author = author;
    this.content = content;
    this.price = price;
    this.synopsis = synopsis;
    this.title = title;
  }
}

export const books = new PersistentMap<string, Book>("books");
