import React, {Component} from 'react';

import {Button, Card, Col, Descriptions, Icon, Rate, Row, Tabs, Tag} from "antd";
import CommentSection from "./CommentSection";
import PluginUse from './plugin/plugin_use';
import Parse from "parse";

const {TabPane} = Tabs;
type MyProps = { match: any };
type MyState = { plugin: any; user: any, category: any};

const descRating = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

class Detail extends Component<MyProps, MyState> {

    async componentDidMount(): Promise<void> {
        let query = new Parse.Query(Parse.Object.extend("Plugin"));
        const plugin = await query.get(this.props.match.params.id);
        this.setState({ plugin: plugin });

        let query2 = new Parse.Query(Parse.Object.extend("Category"));
        const category = await query2.get(plugin.attributes.category.id);
        this.setState({ category: category });
    }

    // handleRatingChange = (value: number) => {
    //     this.setState({rating: value});
    // };

    render() {
        return (
            <Row className="Detail" >
                <Card title={Plugin.name}>
                    <Row gutter={2}>
                        <Col span={6}>
                            <Card bordered={false} cover={<img id="zoomImg" src={this.state?.plugin?.attributes.image._url} alt={this.state?.plugin?.attributes.image._name}/>}/>
                        </Col>
                        <Col offset={1} span={17}>
                            <Descriptions column={1} title={this.state?.plugin?.attributes.name}>
                                <Descriptions.Item>{this.state?.plugin?.attributes.short_description}</Descriptions.Item>
                                {/*<Descriptions.Item label={"Rating"}>*/}
                                {/*    <span>*/}
                                {/*    <Rate tooltips={descRating} onChange={this.handleRatingChange} value={this.state?.plugin?.attributes.}/>*/}
                                {/*    {Plugin.nbRatings + " evaluations"}*/}
                                {/*  </span>*/}
                                {/*</Descriptions.Item>*/}
                                <Descriptions.Item label={"Open source"}>
                                    {
                                        this.state?.plugin?.open_source ?
                                            <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a"/> :
                                            <Icon type="close-circle" theme="twoTone" twoToneColor="#ff0000"/>
                                    }
                                </Descriptions.Item>
                                {this.state?.plugin?.attributes.tags[0] ?
                                    <Descriptions.Item
                                        label={"Tags"}>{this.state?.plugin?.attributes.tags.map((item: any, key: any) =>
                                        <Tag key={key}>{item}</Tag>)}
                                    </Descriptions.Item> : null
                                }
                                <Descriptions.Item label={"Price"}>
                                    {this.state?.plugin?.attributes.price === 0 ?
                                        <Tag color="green">Free</Tag> :
                                        <Tag color="volcano">{this.state?.plugin?.price + '€'}</Tag>}</Descriptions.Item>
                                <Descriptions.Item label={"Category"}><Tag color="#2db7f5">{this.state?.category?.attributes.name}</Tag></Descriptions.Item>
                            </Descriptions>
                            <Button type={"primary"}>Download</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Tabs>
                            <TabPane tab={"Description"} key={"Description"}>
                                <Row>{this.state?.plugin?.attributes.long_description}</Row><br/>
                                <iframe width="560" height="315" src={'https://www.youtube.com/embed/' + this.state?.plugin?.attributes.url} frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"/>
                            </TabPane>
                            <TabPane tab={"Try it"} key={"Try it"}>
                                <PluginUse pluginID="pluginlex"/>
                            </TabPane>
                            <TabPane tab={"Comments"} key={"Comments"}>
                                <CommentSection plugin={this.state?.plugin}/>
                            </TabPane>
                        </Tabs>
                    </Row>
                </Card>

                {/*<br/>*/}
                {/*<Row>*/}
                {/*    <h2>Related products</h2>*/}
                {/*    <Col span={5}>*/}
                {/*        <ShopCard id={1}/>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </Row>
        );
    }
}

export default Detail;
