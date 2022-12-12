import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./styles.css";

// https://o5eesf.csb.app/OL7353617M
export default function App() {
  const [book, setBook] = useState([]);
  const { isbnID } = useParams();
  const [author, setAuthor] = useState([]);
  const [coverSrc, setCoverSrc] = useState([]);

  //OL7353617M
  //https://o5eesf.csb.app/OL7353617M
  //https://openlibrary.org/authors/OL34184A.json
  /*
cover

URLs to small, medium and large covers.

{
    "small": "https://covers.openlibrary.org/b/id/1-S.jpg",
    "medium": "https://covers.openlibrary.org/b/id/1-M.jpg",
    "large": "https://covers.openlibrary.org/b/id/1-L.jpg",
}

https://covers.openlibrary.org/b/8739161/1-S.jpg
  */
  useEffect(() => {
    fetch(`https://openlibrary.org/isbn/${isbnID}.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBook(data);
        if (data.covers) {
          setCoverSrc(
            `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`
          );
          console.log(
            `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`
          );
        }
        fetch(`https://openlibrary.org${data.authors[0].key}.json`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setAuthor(data);
          });
      });
  }, []);

  return (
    <div className="book-card">
      <div className="left">
        <h1>{book.title}</h1>
        <div>Author: {author.personal_name}</div>
        <ul>
          <li>ISBN: {book.isbn_10}</li>
          <li>Published: {book.publish_date}</li>
          <li>Pages: {book.number_of_pages}</li>
          <li>Publishers: {book.publishers}</li>
        </ul>
      </div>
      <div className="right">
        <img src={coverSrc} alt={book.title} />
      </div>
    </div>
  );
}
