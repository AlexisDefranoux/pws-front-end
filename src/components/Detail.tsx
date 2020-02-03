import React, {Component} from 'react';

import './Detail.css';
import ZoomImg from "./ZoomImg";
import {Button, Col, Row, Tabs} from "antd";
import ShopCard from "./ShopCard";
const { TabPane } = Tabs;
type MyProps = {};
type MyState = { url: string };

class Detail extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
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
                        <h1>Titre</h1>
                        <p>Price</p>
                        <p>Description</p>
                        <Button>Add to Cart</Button>
                        <p>Category: truc</p>
                    </Col>
                </Row>

                <Row>
                    <Tabs>
                        <TabPane tab={"Description"} key={"Description"}>
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