import React, {Component} from 'react';

import ZoomImg from "./ZoomImg";
import {Button, Card, Col, Descriptions, Icon, Rate, Row, Tabs, Tag} from "antd";
import ShopCard from "./ShopCard";
import {Link} from "react-router-dom";
import CommentSection from "./CommentSection";
import Parse from "parse";

const {TabPane} = Tabs;
type MyProps = {
    match: any
};
type MyState = {
    plugin: any;
};

const descRating = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

class Detail extends Component<MyProps, MyState> {

    componentDidMount(): void {
        let query = new Parse.Query(Parse.Object.extend("Plugin"));
        query.get(this.props.match.params.id).then((plugin) => {
            this.setState({ plugin: plugin.toJSON() });
            console.log(this.state.plugin);
        }, (error) => {
            console.error("Get plugin by id : " + error)
        });
    }

    // handleRatingChange = (value: number) => {
    //     this.setState({rating: value});
    // };

    render() {
        return (
            <div className="Detail" >
                <Card title={Plugin.name}>
                    <Row gutter={2}>
                        <Col span={6}>
                            <Card cover={<img id="zoomImg" src={this.state?.plugin?.image.url} alt={this.state?.plugin?.image.name}/>}/>
                        </Col>
                        <Col offset={1} span={17}>
                            <Descriptions column={1} title={this.state?.plugin?.name}>
                                <Descriptions.Item label={"Rating"}>
                                    {/*<span>*/}
                                    {/*    <Rate tooltips={descRating} onChange={this.handleRatingChange}*/}
                                    {/*          value={Plugin.rating}/>*/}
                                    {/*    {Plugin.nbRatings + " evaluations"}*/}
                                    {/*  </span>*/}
                                </Descriptions.Item>
                                <Descriptions.Item label={"Open source"}>
                                    {
                                        this.state?.plugin?.open_source ?
                                        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a"/> :
                                        <Icon type="close-circle" theme="twoTone" twoToneColor="#ff0000"/>
                                    }
                                </Descriptions.Item>
                                <Descriptions.Item label={"Tags"}>{this.state?.plugin?.tags.map((item:any) => <Tag>{item}</Tag>)}</Descriptions.Item>
                                <Descriptions.Item label={"URL"}><a href={this.state?.plugin?.url}/></Descriptions.Item>
                                <Descriptions.Item label={"Price"}>{this.state?.plugin?.price + " €"}</Descriptions.Item>
                                <Descriptions.Item label={"Description"}>{this.state?.plugin?.short_description}</Descriptions.Item>
                                {/*<Descriptions.Item label={"Category"}>{this.state?.plugin?.category}</Descriptions.Item>*/}
                            </Descriptions>
                            <Button type={"primary"}>Add to Cart</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Tabs>
                            <TabPane tab={"Description"} key={"Description"}>
                                <p>{this.state?.plugin?.long_description}</p>
                                <Link to={"tryplugin"}>
                                    <Button type={"primary"}>Try {this.state?.plugin?.name}</Button>
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
