/* function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
 */

const Book = (props) => {
  console.log(props);
  const { img, title, author, price } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h3>{author.toUpperCase()}</h3>
      {props.children} {/* PROPS CHILDREN **** */}
    </article>
  );
};

export default Book;
