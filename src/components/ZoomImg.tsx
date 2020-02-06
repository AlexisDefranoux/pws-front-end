import React, {Component} from 'react';

import {Card} from "antd";

type MyProps = {};
type MyState = { url: string };

class ZoomImg extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png'
        };
    }

    render() {
        return (
            <Card
                cover={
                    <img id="zoomImg" src={this.state.url}/>
                }
            />
        );
    }
}

export default ZoomImg;
