import React, { Component } from "react";
import CardList from "./CardList";
import { animals } from "./animals";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      animals: animals,
      searchfield: ''
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    const filterAnimals = this.state.animals.filter(animal => {
      return animal.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    console.log(filterAnimals);
  }

  render() {
    return (
      <div className="tc">
        <h1>Animal Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList animals={this.state.animals} />
      </div>
    );
  }
}

export default App;
