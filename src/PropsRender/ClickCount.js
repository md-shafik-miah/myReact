import React, { Component } from 'react';

class ClickCount extends Component {
    render() {
        return (
            <div>

               <p>Count {this.props.count}</p>
               <button onClick={this.props.incrementHandler}>click here</button>
                
            </div>
        );
    }
}

export default ClickCount;