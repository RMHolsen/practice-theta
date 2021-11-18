import React from 'react';

class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.dog.id,
      name: this.props.dog.name,
      likes: 0
    }
  }
  
  // handleClick = () => {
  //   let moreLikes = this.state.likes += 1
  //   this.setState({ likes: moreLikes })
  // } 
  // DO NOT MUTATE STATE DIRECTLY 

   
  handleClick = () => { 
    this.updateLikes();
  } 

  updateLikes = () => {
    this.setState(prevState => ({ likes: prevState.likes + 1 }));
  }
  

  render() {
    return(
      <li>{this.state.name} - {this.state.likes === 1 ? this.state.likes + ' like' : this.state.likes + ' likes'} <br />
      <button onClick={this.handleClick}>Like Me</button><p />
      </li>
    )
  }
}

export default Dog;