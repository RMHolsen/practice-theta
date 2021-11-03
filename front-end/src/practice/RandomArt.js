import React from 'react';
import { mediumOptions } from '../data/artData';
import { subjectOptions } from '../data/artData';

class RandomArt extends React.Component {
    constructor() {
        super();
        this.state = {
            medium: '',
            subject: ''
        }
    }

    handleClick = () => {
        let mediumChoice = Math.floor(Math.random() * mediumOptions.length)
        // random number from 1 to however long the array of options is
        let medium = mediumOptions[mediumChoice]
        this.setState({ medium: medium })

        let subjectChoice = Math.floor(Math.random() * subjectOptions.length)
        let subject = subjectOptions[subjectChoice]
        this.setState({ subject: subject })
    }

    doNotWant = () => {
        this.setState({ medium: '', subject: '' })
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Random Art Project Generator</button>
                <p>You are making an art of {this.state.subject === '' ? 'something random' : this.state.subject} with { this.state.medium === '' ? 'nothing, yet' : this.state.medium}.</p>
                <button onClick={this.doNotWant}>I Don't Like This Choice</button>
            </div>
        ) // so, ternary operators work, but if/then full structure does not
    }
}

export default RandomArt