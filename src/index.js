import React from "react";
import { /* ReactDOM, */ createRoot } from "react-dom/client";
import Book from "./booklist";
/* import ReactDOM from "react-dom"; */
//CSS
import styles from "./styles/main.css";
const root = createRoot(document.getElementById("root"));

//---------------Nested Components, React Tools -----------------
/*const Person = () => <h2>Oscar Hernanz</h2>;
const Message = () => <p>This is a message</p>;

 function Greeting() {
  return (
    <div>
      <Person />
      <Message />
      <p>Wasssssup</p>
    </div>
  );
} */

const books = [
  {
    author: "Paulo Coelho",
    title: "El alquimista",
    img: "https://m.media-amazon.com/images/I/412D9SdVVsL.jpg",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia numquam neque magni. Maxime inventore maiores ab nulla deserunt quod praesentium cupiditate rerum ipsam harum quas, voluptas enim quibusdam eos eveniet?",
  },
  {
    author: "Carlos Luis Zafon",
    title: "La sombra del viento",
    img: "https://m.media-amazon.com/images/I/41+IKLM+VGL.jpg",
  },
  {
    author: "Eddie Jaku",
    title: "El hombre mas feliz del mundo",
    img: "https://m.media-amazon.com/images/I/51NyJ+4tNGL.jpg",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia numquam neque magni. Maxime inventore maiores ab nulla deserunt quod praesentium cupiditate rerum ipsam harum quas, voluptas enim quibusdam eos eveniet?",
  },
  {
    author: "Vibhor Kumar Singh",
    title: "El monje y el millonario",
    img: "https://m.media-amazon.com/images/I/41vQLTA0XCL.jpg",
  },
];

/* Passing the book with MAP METHOD */
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

/* Passing the book with SPREAD OPERATOR */
function Booklist() {
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

/* 
 <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
        price={firstBook.price}
      >
        <p>
          /* PROPS CHILDREN ********** */
/*  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          numquam neque magni. Maxime inventore maiores ab nulla deserunt quod
          praesentium cupiditate rerum ipsam harum quas, voluptas enim quibusdam
          eos eveniet?
        </p>
      </Book>
*/
