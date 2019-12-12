import React, { Component } from "react";
import CardList from "./CardList";
import { animals } from "./animals";
import SearchBox from "./SearchBox";
import './app.css'

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
  }

  render() {
    const filterAnimals = this.state.animals.filter(animal => {
        return animal.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      });
      console.log(filterAnimals);
    return (
      <div className="tc">
        <h1 className='f1'>Animal Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList animals={filterAnimals} />
      </div>
    );
  }
}

export default App;
