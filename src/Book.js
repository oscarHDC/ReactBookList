import React from "react";

/* PROPS IS AN OBJECT, WHICH HAVE YOUR PARAMETERS AS OBJECTS INSIDE OF IT
EXAMPLE:

  <Book book = {book} shit = {"SHIT"}></Book>
  Console.log(props) = {{book}, {shit}} */

export const Book = (props) => {
  const { img, title, author, children } = props; //WITH SPREAD OPERATOR NOT NEEDED

  const clickHandler = () => {
    //Events
    console.log(/* author */);
  };

  const showTitle = () => {
    console.log(/* title */);
  };

  return (
    <article className="book" onMouseOver={() => showTitle()}>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h3>{author.toUpperCase()}</h3>
      {children} {/* PROPS CHILDREN **** */}
      <button type="button" onClick={clickHandler}>
        Refere
      </button>
    </article>
  );
};

export default Book;
