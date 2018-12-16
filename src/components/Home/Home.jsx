import React, { Component } from 'react';
import Input from '../Input';
import Button from '../Button';
import '../../style.css';

import 'antd/dist/antd.css';
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie1: '',
            movie2: '',
            movie1Info: {},
            movie2Info:{},
            isCompare: false
        };

        this.movie1Change = this.movie1Change.bind(this);
        this.movie2Change = this.movie2Change.bind(this);
        this.handleCompare = this.handleCompare.bind(this);
    }

    movie2Change(e) {
        console.log(e.target.value);
        this.setState({movie1: e.target.value});
    }

    movie1Change(e) {
        console.log(e.target.value);
        this.setState({movie2: e.target.value});
    }

    handleCompare() { 
        const urlMovie1 = `http://omdbapi.com/?apikey=a5cbd3f6&t=${this.state.movie1}`
        const urlMovie2 = `http://omdbapi.com/?apikey=a5cbd3f6&t=${this.state.movie2}`
        fetch(urlMovie1).then(res => res.json()).then(res=>{
            this.setState({movie1Info: res})
        }).catch(r=>{console.log(r)});
        fetch(urlMovie2).then(res => res.json()).then(res=>{
            this.setState({movie2Info: res})
        }).then(()=> {
            this.setState({isCompare: true})
        }).catch(r=>{console.log(r)});
    }

    render() {
        var mov1rate =0 , mov2rate =0;
        return (
            <div
                style={{
                    height: '90%',
                    position: 'absolute',
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    margin: 'auto',
                }}
            >
            <div>
            <h1 style={{
                background: '#fc3',
                textAlign: 'center',
                padding: '20px',
                margin: '25px auto',
                width: '50%',
                border: '5px solid',
                fontWeight: '800'
            }}>WHICH MOVIE SHOULD WATCH?</h1>
            </div>
                {
                    (!this.state.isCompare) ? (
                    <div style={{
                        textAlign: 'center'
                    }}>
                        <div style={{
                            margin: '5% 0'
                        }}>
                            <Input type="text" placeholder="Movie Title" onChange={this.movie1Change} />
                            <Input type="text" placeholder="Movie Title" onChange={this.movie2Change}/>
                        </div>
                        <Button text="COMPARE" onClick={this.handleCompare} />
                    </div>
                    ) : (
                        <div style={{
                            textAlign: 'center'
                        }}>
                            {
                                this.state.movie1Info.Ratings? this.state.movie1Info.Ratings.forEach((rate)=>{
                                    if(rate.Source === 'Internet Movie Database')
                                        mov1rate +=+(rate.Value.split('/')[0]);
                                    else if(rate.Source === 'Rotten Tomatoes')
                                        mov1rate+=+(rate.Value.slice(0, -1))
                                    else if(rate.Source === 'Metacritic')
                                        mov1rate+=+(rate.Value.split('/')[0]);
                                }): null
                            }

                            {
                                this.state.movie2Info.Ratings?this.state.movie2Info.Ratings.forEach((rate)=>{
                                    if(rate.Source === 'Internet Movie Database')
                                        mov2rate +=+(rate.Value.split('/')[0]);
                                    else if(rate.Source === 'Rotten Tomatoes')
                                        mov2rate+=+(rate.Value.slice(0, -1))
                                    else if(rate.Source === 'Metacritic')
                                        mov2rate+=+(rate.Value.split('/')[0]);
                                }):null
                            }

                            <p style={{
                                fontSize: '2em',
                                fontWeight: '900',
                                background: '#fc3',
                                padding: '15px',
                                color: '#000',
                            }}> {
                                mov1rate>mov2rate?this.state.movie1Info.Title:this.state.movie2Info.Title||'Go Sleep...'
                            }</p>

                            <Button text="Play Again" onClick={()=>this.setState({isCompare: false})} />
                        </div>
                    )
                }
            </div>
        )
    }
}
