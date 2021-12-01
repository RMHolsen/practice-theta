import React from 'react';

class PushDaButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    handleClick = () => {
        this.setState({
            message: 'You clicked da button!'
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Click Da Button!</button>
                <h1>{this.state.message}</h1>
            </div>
        )
    }

}

export default PushDaButton