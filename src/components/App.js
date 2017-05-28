import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import '../styles/main.css';

export default class App extends Component {

    handleClickTes() {
        alert('ancamania!');
    }

    render() {
        return (
            <div>
                <h2>Mantul Bro!</h2>
                <h3>Haha</h3>
                <button onClick={ this.handleClickTes }>
                    Tes
                </button>
            </div>
        );
    }
}

