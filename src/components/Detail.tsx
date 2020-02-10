import React, {Component} from 'react';

import ZoomImg from "./ZoomImg";
import {Button, Card, Col, Descriptions, Icon, Rate, Row, Tabs, Tag} from "antd";
import ShopCard from "./ShopCard";
import {Link} from "react-router-dom";
import CommentSection from "./CommentSection";

const {TabPane} = Tabs;
type MyProps = {};
type MyState = {
    url: string,
    price: number,
    name: string,
    shortdescription: string,
    longdescription: string,
    category: string,
    rating: number,
    nbRatings: number,
    opensource: boolean,
    tags: string[]
};

const descRating = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

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
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png',
            rating: 3,
            nbRatings: 1000,
            opensource: false,
            tags: ["Cool", "Rock", "Metal"]
        };
    }

    handleRatingChange = (value: number) => {
        this.setState({rating: value});
    };

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
                                <Descriptions.Item label={"Rating"}>
                                    <span>
                                        <Rate tooltips={descRating} onChange={this.handleRatingChange}
                                              value={this.state.rating}/>
                                        {this.state.nbRatings + " evaluations"}
                                      </span>
                                </Descriptions.Item>
                                <Descriptions.Item label={"Open source"}>
                                    {this.state.opensource ?
                                        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a"/> :
                                        <Icon type="close-circle" theme="twoTone" twoToneColor="#ff0000"/>}
                                </Descriptions.Item>
                                <Descriptions.Item label={"Tags"}>
                                    {
                                        this.state.tags.map((item, key) => <Tag>{item}</Tag>)
                                    }
                                </Descriptions.Item>
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
                                <Link to={"tryplugin"}>
                                    <Button type={"primary"}>Try {this.state.name}</Button>
                                </Link>
                            </TabPane>
                            <TabPane tab={"Commentaires"} key={"commentaires"}>
                                <CommentSection/>
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
