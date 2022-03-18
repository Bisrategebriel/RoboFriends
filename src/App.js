import React, { Component } from "react";
import CardList from "./components/CardList";
import Scroll from "./components/Scroll";
import SearchBox from "./components/SearchBox";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: [],
      searchField: "",
      date: new Date(),
    };
  }

  async componentDidMount() {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const response = await data.json();

    this.setState({
      robots: response,
    });
  }

  // componentDidMount() {
  //   fetch(`https://jsonplaceholder.typicode.com/users`)
  //     .then((data) => data.json())
  //     .then((user) => this.setState({ robots: user }));
  // }

  onSearchChange = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };

  render() {
    const { date } = this.state;
    const filteredRobots = this.state.robots.filter((robot) => {
      const searchResult = robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
      return searchResult;
    });

    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="robo-title">RoboFriends</h1>
          <h1 style={{ color: "white" }}>{`${date}`}</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}
