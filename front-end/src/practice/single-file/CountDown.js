import React from 'react'

class CountDown extends React.Component {
    constructor() {
        super();
        this.state = {
            num_1: 0,
            num_2: 0,
            countdown: 0
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        let total = this.state.num_1 + this.state.num_2;
        this.setState({
            countdown: total
        });
        while (total > 0) {
            total -= 1;
        }
    }

    render() {
        return(
            <div>
                <form>
                    <input type="number" name="num_1" value={this.state.num_1} onChange={this.handleChange}/>
                    <input type="number" name="num_2" value={this.state.num_2} onChange={this.handleChange}/>
                    <input type="submit" onSubmit={this.handleSubmit}/>
                </form>
                <h2>Counting Down From {this.state.countdown}</h2>
            </div>
        )
    }
}

export default CountDown