import React, { Component } from 'react';

export default class Page1 extends Component {

    constructor() {
        super();

        this.state = {
            hello: 'Hello World!'
        }
    }

    render() {
        return (
            <div>
                asdasdasd
                <h1>{ this.state.hello }</h1>
            </div>
        );
    }
}