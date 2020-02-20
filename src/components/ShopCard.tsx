import React, { Component } from 'react';
import {Card, Button, Tag} from "antd";
import {Link} from "react-router-dom";
import Parse from "parse";

type MyProps = { id: string };
type MyState = { plugin: any };

class ShopCard extends Component<MyProps, MyState> {

    componentDidMount(): void {
        let query = new Parse.Query(Parse.Object.extend("Plugin"));
        query.get(this.props.id).then((plugin) => {
            this.setState({ plugin: plugin.toJSON() });
        }, (error) => {
            console.error("Get plugin by id : " + error)
        });
    }

    render() {
        return (
            <Link to={"/detail/" + this.props.id}>
                <Card style={{minHeight: '400px', maxHeight: '400px'}} bordered={false} cover={<img id="zoomImg" src={this.state?.plugin?.image.url} alt={this.state?.plugin?.image.name}/>}>
                    <h3>{this.state?.plugin?.name}</h3>
                    <p>{this.state?.plugin?.price === 0 ?
                        <Tag color="green">Free</Tag> :
                        <Tag color="volcano">{this.state?.plugin?.price + '€'}</Tag>}
                    </p>
                    <div style={{textAlign: 'center'}}>
                        <Button type={"primary"} icon={"shopping-cart"}>ADD TO CART</Button>
                    </div>
                </Card>
            </Link>
        )
    }
}

export default ShopCard;
