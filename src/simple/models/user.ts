import { PersistentMap } from "near-sdk-as";

import { Book } from "./book";

@nearBindgen
export class User {
  accountId: string;
  email: string;
  acquisitions: Book[];
  name: string;
  postedBooks: Book[];

  constructor(
    accountId: string,
    email: string,
    acquisitions: Book[],
    name: string,
    postedBooks: Book[]
  ) {
    this.accountId = accountId;
    this.email = email;
    this.acquisitions = acquisitions;
    this.name = name;
    this.postedBooks = postedBooks;
  }
}

export const users = new PersistentMap<String, User>("users");
