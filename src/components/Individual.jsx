import React, { Component } from 'react';

class Individual extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            addNumb: 0,
        })
    }

    render() {
        const {firstName, lastName, hairColor} = this.props;
        const addBirthday = () => {
            this.setState({addNumb: this.state.addNumb + 1})
        }

        return(
            <>
                <div>
                    <h2>{lastName}, {firstName}</h2>
                    <h5>Age: {this.state.addNumb}</h5>
                    <h5>Hair Color: {hairColor}</h5>
                    <button onClick={addBirthday}>Birthday Button for {firstName}{lastName}</button>
                </div>
            </>
        )
    }
}

export default Individual;