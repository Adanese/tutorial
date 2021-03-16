import React from 'react';


// //Define CLick Handler
// const clickHandler = () => {
//   alert("Hello World");
// };

// //Define complexExample
// const complexExample = (author) => {
//   console.log(author);
// };


const Book = (props) => {
  console.log(props);
  const { img, title, author } = props;

  //Define CLick Handler
  const clickHandler = () => {
    alert("Hello World");
  };

  //Define complexExample
  const complexExample = (author) => {
    console.log(author);
  };

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
 export default Book;

