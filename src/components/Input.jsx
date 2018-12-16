import React, { Component } from 'react';

export default class Input extends Component {
    render() {
        return (
            <input
                className="input-comp"
                type={this.props.type}
                style={{
                    border: 'none',
                    padding: '5px',
                    margin: '5px',
                    borderBottom: '1px solid #000',
                    width: '20%',
                    minWidth: '200px',
                    textAlign: 'center',
                    color: '#000',
                    fontWeight: '800'
                }}
                onChange={this.props.onChange}
                placeholder={this.props.placeholder}
            />
        )
    }
}
