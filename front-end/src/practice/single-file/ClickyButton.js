import React from 'react';

class ClickyButton extends React.Component {
    constructor() {
        super();
        this.state = {
            clicks: 0,
            message: 'I have 0 clicks. I am very sad.'
        }
    } // don't forget you can also just go 'this.state = {}' at the start 

    handleClick = () => {
        let moreClicks = this.state.clicks += 1;

        this.setState({
         clicks: moreClicks
        });   

        if (this.state.clicks >= 0 && this.state.clicks <= 25) {
            this.setState({ message: `I have ${this.state.clicks} clicks!`})
        } else if (this.state.clicks > 25) {
            this.setState({ message: 'That is too many clicks. Put some back.'})
        } else {
            return;
        }
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Click Meeeeee!</button>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default ClickyButton