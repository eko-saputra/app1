import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Animes extends Component {
    state = { animes: [] }

    componentDidMount() {
        this.setState({
            animes: [
                { id: 1, title: "Attack on Titan S1", runtime: 300 },
                { id: 2, title: "Attack on Titan S2", runtime: 300 },
                { id: 3, title: "Attack on Titan S3", runtime: 300 },
            ]
        })
    }

    render() {
        return (
            <Fragment>
                <h2>Anime List</h2>
                <ul>
                    {this.state.animes.map((e) => (
                        <li key={e.id}>
                            <Link to={`/animes/${e.id}`}>{e.title}</Link>
                        </li>
                    ))}
                </ul>
            </Fragment>

        );
    }
}