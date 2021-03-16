import React, { Children, Component } from "react";
import ReactDom from "react-dom";
// CSS
import "./index.css";

// set up vars
const books = [
  {
    id: 1,
    img: "https://source.unsplash.com/user/erondu/300x300",
    author: "demo_author_1",
    title: "demo_title_1",
  },
  {
    id: 2,
    img: "https://source.unsplash.com/user/erondu/300x900",
    author: "demo_author_2",
    title: "demo_title_2",
  },
];

//Best Bookselling website React me
function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        //console.log(book);
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

//Define CLick Handler
const clickHandler = () => {
  alert("Hello World");
};

//Define complexExample
const complexExample = (author) => {
  console.log(author);
};

//2nd Component Component
//Explicit return statement
const Book = (props) => {
  console.log(props);
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={clickHandler}>{title}</h1>
      <h>{author}</h>

      {/* <h4>{props.children}</h4> */}
      {/* //Adding button */}
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      {/* //Second button More COmplex example */}
      <button type="button" onClick={() => complexExample(author)}>
        More Complex Example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
