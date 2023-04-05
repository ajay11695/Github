import React from "react";

import people from "../data/got.json";

class People extends React.Component {
    state = {
        searchTerm: ""
    };
    handleChange = ({ target: { value } }) => {
        this.setState({ searchTerm: value });
    };
    render() {
        let allPeople = people.reduce((acc, cv) => {
            acc = acc.concat(cv.people);
            return acc;
        }, []);

        let filteredPeople = allPeople.filter((person) =>
            person.name.toLowerCase().includes(this.state.searchTerm)
        );
        return (
            <div className="main-page">
                <div className="textalign">
                    <input
                        placeholder="Search people"
                        className=""
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                    />
                </div>
                <ul className="flex wrap evenly">
                    {filteredPeople.map((sp) => (
                        <SinglePerson {...sp} />
                    ))}
                </ul>
            </div>
        );
    }
}

function SinglePerson(props) {
    return (
        <li className="card flex column justify-center align">
            <div className="info">
                <img src={props.image} alt={props.name} />
            </div>
            <h2 className="font-1 font-w textalign margin-t-1">{props.name}</h2>
            <p className="textalign margin-t-1">{props.description}</p>
            <a href={props.wikiLink} className="btn">Learn More!</a>
        </li>
    );
}

export default People;