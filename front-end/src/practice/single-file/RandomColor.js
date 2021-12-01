import React from 'react';
// we're doing this with bind and not arrow functions now, okay?

class RandomColorGroup extends React.Component {
    // We're going to use bind for this, so don't forget to change it to bind afterwards
    
    constructor() {
        super();
        this.state = {
            firstColor: '',
            secondColor: '',
            thirdColor: '',
            selected: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
       const colors = ['red', 'pink', 'orange', 'yellow', 'gold', 'green', 'dark green', 'lime', 'teal', 'light blue', 'turquoise', 'blue', 'lavender', 'purple', 'magenta', 'gray', 'black', 'white']

       let choiceOne = Math.floor(Math.random() * colors.length)
       let choiceTwo = Math.floor(Math.random() * colors.length)
       let choiceThree = Math.floor(Math.random() * colors.length)

       this.setState({
           firstColor: colors[choiceOne],
           secondColor: colors[choiceTwo],
           thirdColor: colors[choiceThree],
           selected: true
       })
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Click for Colors</button><br />
                <p>Your colors for today are: <br />
                {this.state.selected ? this.state.firstColor : '_______'}, {this.state.selected ? this.state.secondColor : '_______'}, and {this.state.selected ? this.state.thirdColor : '_______'}. </p>
            </div>
        )
    }
}

export default RandomColorGroup