import React, { Component } from 'react';

import './Detail.css';

type MyProps = { };
type MyState = { url: string };
class Detail extends Component<MyProps, MyState> {
    constructor(props : any) {
        super(props);
        this.state = {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png'
        };
    }
    render() {
        return (
            <img width={300} height={300} src={this.state.url} alt="plugin"/>
        );
    }
}

export default Detail;