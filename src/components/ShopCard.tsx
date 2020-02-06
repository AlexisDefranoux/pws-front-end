import React, { Component } from 'react';
import {Card, Button} from "antd";

let titles = ['AUGUR', 'B', 'CCC', '25', 'ALEXIIIIS'];

type MyProps = { id: number };
type MyState = { url: string, title: string, price: string };
class ShopCard extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png',
            title: titles[props.id],
            price: 'free',
        };
    }

    render() {
        return (
            <div className={"ShopCard"}>
                <Card bordered={false}
                    cover={
                        <img src={this.state.url} alt={this.state.title + "'s image"}/>
                    }
                >
                    <h3>{this.state.title}</h3>
                    <p>{this.state.price}</p>
                    <p>id : {this.props.id}</p>
                    <Button type={"primary"} icon={"shopping-cart"}>ADD TO CART</Button>
                </Card>
            </div>
        )
    }
}

export default ShopCard;
