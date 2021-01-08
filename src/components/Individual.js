import React, { Component } from 'react';

class Individual extends Component {
    render() {
        return(
            <>
                <div>
                    <h2>{this.props.lastName}, {this.props.firstName}</h2>
                    <h5>Age: {this.props.age}</h5>
                    <h5>Hair Color: {this.props.hairColor}</h5>
                </div>
            </>
        )
    }
}

export default Individual;