import React, {Component} from 'react';

import './Detail.css';
import ZoomImg from "./ZoomImg";
import {Button, Col, Descriptions, Row, Tabs} from "antd";
import ShopCard from "./ShopCard";

const {TabPane} = Tabs;
type MyProps = {};
type MyState = {
    url: string,
    price: number,
    name: string,
    description: string,
    category: string
};

class Detail extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            price: 5,
            name: "UnModule",
            description: "UneDescription",
            category: "Synthetizers",
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png'
        };
    }

    render() {
        return (
            <div className="Detail">
                <Row gutter={2}>
                    <Col span={6}>
                        <ZoomImg/>
                    </Col>
                    <Col span={18}>
                        <h1>{this.state.name}</h1>
                        <Descriptions>
                            <Descriptions.Item label={"Price"}>{this.state.price}</Descriptions.Item>
                            <Descriptions.Item label={"Description"}>{this.state.description}</Descriptions.Item>
                            <Descriptions.Item label={"Category"}>{this.state.category}</Descriptions.Item>
                        </Descriptions>
                        <Button>Add to Cart</Button>
                    </Col>
                </Row>

                <Row>
                    <Tabs>
                        <TabPane tab={"Description"} key={"Description"}>
                            <p>{this.state.description}</p>
                            <Button>Try truc</Button>
                        </TabPane>
                        <TabPane tab={"Infos"} key={"Infos"}>
                            Hello 2
                        </TabPane>
                    </Tabs>
                </Row>

                <Row>
                    <h2>Related products</h2>
                    <Col span={5}>
                        <ShopCard id={1}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Detail;