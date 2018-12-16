import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <button
                onClick={this.props.onClick}
                className="button-comp"
                style={{
                    padding: '15px 30px',
                    border: 'none',
                    position: 'relative',
                    top: '0',
                    cursor: 'pointer',
                    borderRadius: '3px',
                    margin: '15px 0 11px 0',
                    textAlign: 'center',
                    userSelect: 'none',
                    transition: 'all 0.2s ease',
                    background: '#fc3',
                    boxShadow: '0px 5px rgb(171, 141, 51)',
                    color: '#000',
                    fontWeight: '800'
                }}
            >{this.props.text}</button>
        )
    }
}
