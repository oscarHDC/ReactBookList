//PROPS IS AN OBJECT, WHICH HAVE YOUR PARAMETERS AS OBJECTS INSIDE OF IT
//EXAMPLE:
/* 
  <Book book = {book} shit = {"SHIT"}></Book>
  Console.log(props) = {{book}, {shit}}
 
 */
const Book = (props) => {
  console.log(props);
  const { img, title, author, children } = props; //WITH SPREAD OPERATOR NOT NEEDED
  /* const { img, title, author, children } = props; //Distructuring prop parameter
  //You have to add .book, otherwise it doesnt get the book object :( */
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h3>{author.toUpperCase()}</h3>
      {children} {/* PROPS CHILDREN **** */}
    </article>
  );
};

export default Book;
