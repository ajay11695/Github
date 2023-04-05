import React from "react";
import books from "../data/books.json";

class Books extends React.Component {
  state = {
    searchTerm: ""
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ searchTerm: value });
  };
  render() {
    let filteredBooks = books.filter((article) =>
      article.title.toLowerCase().includes(this.state.searchTerm)
    );
    return (
      <div className="main-page">
        <div className="textalign">
          <input
            placeholder="Search Book"
            className=""
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
        </div>
        <ul className="flex wrap evenly">
          {filteredBooks.map((book) => (
            <Book {...book} />
          ))}
        </ul>
      </div>
    );
  }
}

function Book(props) {
  return (
    <li className="book flex column align">
      <div className="book-image">
      <img src={props.image} alt={props.title} />
      </div>
      <h2 className="font margin-t-1">{props.title}</h2>
      <p className="font-w margin-t-1">
        Author:<span>{props.author}</span>
      </p>
      <a href={props.website} >
        <button className="btn margin-t-1">Buy Now</button>
      </a>
    </li>
  );
}

export default Books;