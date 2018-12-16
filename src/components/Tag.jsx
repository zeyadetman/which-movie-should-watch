import React, { Component } from 'react'

export default class Tag extends Component {
    constructor(props){
        super(props);
    }


    render() {
        const colorize = (str) => {
            var hash = 0;
            for (var i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }
            var colour = '#';
            for (var i = 0; i < 3; i++) {
                var value = (hash >> (i * 8)) & 0xFF;
                colour += ('00' + value.toString(16)).substr(-2);
            }
            return colour;
        }
        return (
            <p style={{
                backgroundColor: `${colorize(this.props.text)}`,
                padding: '2px 4px',
                borderRadius: '5px',
                textAlign: 'center',
                width: 'fit-content',
            }}>{this.props.text}</p> 
        )
    }
}
