import React, { Component } from 'react';
import {Card, Button, Tag, Row, Col} from "antd";
import {Link} from "react-router-dom";

type MyProps = { plugin: any };

class ShopCard extends Component<MyProps> {

    render() {
        return (
            <Link to={"/detail/" + this.props.plugin.id}>
                <Card bodyStyle={{padding: 15}} style={{width: 300}} bordered={false} cover={<div style={{width: 300, height: 200, overflow: 'hidden'}}>
                    <img style={{width: '100%', height: 'auto'}} id="zoomImg" src={this.props.plugin?.attributes.image._url} alt={this.props.plugin?.attributes.image._name} />
                    </div>}>
                    <Row type='flex' justify='space-between'>
                        <Col span={6}>
                            <h3>{this.props.plugin?.attributes.name}</h3>
                        </Col>
                        <Col span={6}>
                            <Button style={{float: 'right'}} type={"primary"} icon={"shopping-cart"} />
                        </Col>
                    </Row>
                    <p style={{marginBottom: 0}}>{this.props.plugin?.attributes.price === 0 ?
                        <Tag color="green">Free</Tag> :
                        <Tag color="volcano">{this.props.plugin?.attributes.price + '€'}</Tag>}
                    </p>
                </Card>
            </Link>
        )
    }
}

export default ShopCard;
