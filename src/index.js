import React, { Children, Component } from "react";
import ReactDom from "react-dom";
// CSS
import "./index.css";
//import books.js
import { books } from "./books";
import Book from './Book'
import {greeting} from './testing/testing'

// set up vars

//Best Bookselling website React me
function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book, index) => {
        //console.log(book);
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}


ReactDom.render(<BookList />, document.getElementById("root"));
