import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
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

const firstBook = {
  author: "Paulo Coelho",
  title: "El alquimista",
  img: "https://m.media-amazon.com/images/I/412D9SdVVsL.jpg",
};
const secondBook = {
  author: "Tu madre",
  title: "La sombra del viento",
  img: "https://m.media-amazon.com/images/I/41+IKLM+VGL.jpg",
};

function Booklist() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
        price={firstBook.price}
      >
        <p>
          {" "}
          {/* PROPS CHILDREN ********** */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          numquam neque magni. Maxime inventore maiores ab nulla deserunt quod
          praesentium cupiditate rerum ipsam harum quas, voluptas enim quibusdam
          eos eveniet?
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

root.render(<Booklist />);
