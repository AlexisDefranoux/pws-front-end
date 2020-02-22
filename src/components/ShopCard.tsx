import React, { Component } from 'react';
import {Card, Button, Tag, Row, Col} from "antd";
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
                <Card bodyStyle={{padding: 15}} style={{width: 300}} bordered={false} cover={<div style={{width: 300, height: 200, overflow: 'hidden'}}>
                    <img style={{width: '100%', height: 'auto'}} id="zoomImg" src={this.state?.plugin?.image.url} alt={this.state?.plugin?.image.name} />
                    </div>}>
                    <Row type='flex' justify='space-between'>
                        <Col span={6}>
                            <h3>{this.state?.plugin?.name}</h3>
                        </Col>
                        <Col span={6}>
                            <Button style={{float: 'right'}} type={"primary"} icon={"shopping-cart"} />
                        </Col>
                    </Row>
                    <p style={{marginBottom: 0}}>{this.state?.plugin?.price === 0 ?
                        <Tag color="green">Free</Tag> :
                        <Tag color="volcano">{this.state?.plugin?.price + '€'}</Tag>}
                    </p>
                </Card>
            </Link>
        )
    }
}

export default ShopCard;
