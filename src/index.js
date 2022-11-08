import React from "react";
import { /* ReactDOM, */ createRoot } from "react-dom/client";
import Book from "./Book";
import styles from "./styles/main.css";
import { books } from "./books"; //Books array
import { testing } from "./testing/testing";

const root = createRoot(document.getElementById("root"));

/* --------------  MAP METHOD --------------*/
/* function Booklist() {
  return (
    <section className="booklist">
      {books.map((book, i) => {
        //Fixing the KEY UNIQUE PROP warning
        return <Book key={i} book={book}></Book>;
      })}
    </section>
  );
} */

/* ----------------SPREAD OPERATOR ------------- */
function Booklist() {
  console.log(testing);
  return (
    <section className="booklist">
      {books.map((book, i) => {
        //Fixing the KEY UNIQUE PROP warning
        return <Book key={i} {...book}></Book>;
      })}
    </section>
  );
}

root.render(<Booklist />);
