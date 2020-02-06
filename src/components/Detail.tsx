import React, {Component} from 'react';

import './Detail.css';
import ZoomImg from "./ZoomImg";
import {Button, Card, Col, Descriptions, Row, Tabs} from "antd";
import ShopCard from "./ShopCard";

const {TabPane} = Tabs;
type MyProps = {};
type MyState = {
    url: string,
    price: number,
    name: string,
    shortdescription: string,
    longdescription: string,
    category: string
};

class Detail extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            price: 5,
            name: "UnModule",
            shortdescription: "WAM instrument for Amped Studio.",
            longdescription: "AUGUR is modelled after the Prophet VS from Sequential Circuits, which was the first vector synthesizer to appear in the market in 1986. The original Prophet VS combined digital waveforms with analog filters for a very unique product for that time period. Chris Meyer (one of the original Prophet VS engineers) shares interesting background info in his blog post “The Story of the Prophet VS Although AUGUR shares Prophet VS architecture, it is not an exact emulation of the original VS. This digital synthesizer implementation by Antti Huovilainen has four digital oscillators, Antti’s world famous circuit-modelled filters and a lush chorus section. The three envelope generators, two LFOs and modulation matrix are also bundled in. It is capable of producing charasteristic Prophet VS timbres and beyond."
                + "WAM implementation by Jari Kleimola.",
            category: "Synthetizers",
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png'
        };
    }

    render() {
        return (
            <div className="Detail">
                <Card title={this.state.name}>

                    <Row gutter={2}>
                        <Col span={6}>
                            <ZoomImg/>
                        </Col>
                        <Col offset={1} span={17}>
                            <Descriptions column={1}>
                                <Descriptions.Item label={"Price"}>{this.state.price + " €"}</Descriptions.Item>
                                <Descriptions.Item
                                    label={"Description"}>{this.state.shortdescription}</Descriptions.Item>
                                <Descriptions.Item label={"Category"}>{this.state.category}</Descriptions.Item>
                            </Descriptions>
                            <Button type={"primary"}>Add to Cart</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Tabs>
                            <TabPane tab={"Description"} key={"Description"}>
                                <p>{this.state.longdescription}</p>
                                <Button type={"primary"}>Try {this.state.name}</Button>
                            </TabPane>
                            <TabPane tab={"Infos"} key={"Infos"}>
                                Hello 2
                            </TabPane>
                        </Tabs>
                    </Row>
                </Card>

                <br/>
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