import { Context, PersistentMap } from "near-sdk-as";

import { User, users } from "../models/user";
import { Book, books } from "../models/book";
import { Fragment } from "../models/fragment";

export function registerUser(email: string, name: string): string {
  const newUser = new User(Context.sender, email, [], name, []);
  users.set(Context.sender, newUser);

  return "User registered!";
}

export function postBook(
  title: string,
  price: string,
  synopsis: string,
  content: [{ title: string; body: string }]
): string {
  const author = Context.sender;
  const newBook = new Book(title, author, price, synopsis, content);
  const user = users.get(author);

  if (user) {
    books.set(title, newBook);
    user.postedBooks.push(newBook);
    return `${title} has been registered! by  ${author}`;
  } else {
    return "The user is not registered";
  }
}

export function getBook(title: string): Book {
  const book = books.get(title);
  if (book) {
    return book;
  }

  return new Book("", "", "", "", [{ title: "", body: "" }]);
}

export function getBooks(): PersistentMap<String, Book> {
  return books;
}

export function buyBook(title: string): string {
  const attachedDeposit = Context.attachedDeposit;
  const sender = Context.sender;
  const book = books.get(title);
  if (book) {
    const user = users.get(sender);
    if (user) {
      user.acquisitions.push(book);
      if (attachedDeposit) {
        return "Enjoy your new book: " + title;
      }
      return (
        "The price of the book is: " +
        book.price +
        ` you inserted ${attachedDeposit}`
      );
    }

    return "User: '" + sender + "' is not registered";
  }

  return "No book: '" + title + "' found";
}
