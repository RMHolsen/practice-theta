import React from 'react'

class AdvancedOracle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        let oracleReply 

        switch (this.props.oracle) {
            case 'birds':
                oracleReply = 'The birds are fleeing. Disaster is on the way.'
                break;
            case 'entrails': 
                oracleReply = 'This is disgusting. Why must you do this. You will have a bountiful harvest.'
                break;
            case 'seeds': 
                oracleReply = 'A scattered mind leads to a scattered life.'
                break;
            case 'runes':
                oracleReply = 'The runes are unclear, try cleaning the blood off of them.'
                break;
            case 'tarot': 
                oracleReply = 'The cards say YES YOU ARE ON THE CORRECT PATH, STUPID, STOP ASKING.'
                break;
            default: 
                oracleReply = 'Concentrate and ask again' 
                break;
        };
        console.log(oracleReply)
        this.setState({ message: oracleReply })
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>The Oracle says:</button>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default AdvancedOracle