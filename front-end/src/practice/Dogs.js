import React, { Component } from "react";
import { dogs } from "../data/dogs.js";
import Dog from "./Dog.js";

class DogList extends Component {

  render() {
    return (
      <div>
        <ul>
          {dogs.map(dog => <Dog dog={dog} />)}
        </ul>
      </div>
    );
  }
}

export default DogList;
