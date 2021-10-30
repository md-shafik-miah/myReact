import React, { Component } from 'react'

export default class HoverCount extends Component {
    render() {
        return (
            <div>
                <p>Count {this.props.count}</p>
                <button onMouseOver={this.props.incrementHandler}>Mouse over here</button>
            </div>
        )
    }
}
