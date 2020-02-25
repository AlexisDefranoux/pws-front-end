import React, {Component} from 'react';
import {Button, Card, Col, Descriptions, Icon, notification, Rate, Row, Tabs, Tag} from "antd";
import Parse from "parse";
import axios from "axios";

import PluginUse from "./UsePlugin";
import CommentSection from "./CommentSection";
import {Simulate} from "react-dom/test-utils";

const {TabPane} = Tabs;
type MyProps = { match: any };
type MyState = { plugin: any; category: any; likes: any[]; canRate: boolean; likeAverage: number; redirect: string | undefined };

const descRating = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];

class PluginDetails extends Component<MyProps, MyState> {

    async componentDidMount(): Promise<void> {
        let query = new Parse.Query(Parse.Object.extend("Plugin"));
        const plugin = await query.get(this.props.match.params.id);
        this.setState({plugin: plugin});

        let query2 = new Parse.Query(Parse.Object.extend("Category"));
        const category = await query2.get(plugin.attributes.category.id);
        this.setState({category: category});

        let query3 = new Parse.Query(Parse.Object.extend("Like"));
        query3.equalTo("plugin", plugin);
        const likes = await query3.find();
        this.setState({likes: likes});
        this.computeRating(likes);
    }

    computeRating = async (likes: any[]) => {
        this.setState({canRate: true});
        let sum = 0;
        likes.forEach(like => {
                sum += like.attributes.rate;
                if (Parse.User?.current()?.id === like.attributes.user.id)
                    this.setState({canRate: false});
            }
        );
        if (likes.length !== 0) sum = sum / likes.length;
        this.setState({likeAverage: sum});
    };

    handleRatingChange = async (value: number) => {
        const like = new (Parse.Object.extend("Like"))({
            plugin: this.state.plugin,
            user: Parse.User.current(),
            rate: value,
        });

        try {
            await like.save();
            this.state.likes.push(like);
            this.computeRating(this.state.likes);
            notification.open({
                type: "success",
                message: 'Thank you for your opinion',
            });
            this.setState({canRate: false});
        } catch (e) {
            notification.open({
                type: "error",
                message: 'Failed to post your opinion',
            });
            console.error(e);
        }
    };

    handleForkPlugin = () => {
        console.log(process.env.REACT_APP_FORK_URL);
        let idPlugin: string = this.props.match.params.id;
        let idUser: string | undefined = Parse.User.current()?.id;

        axios({
            method: 'GET',
            url: process.env.REACT_APP_FORK_URL,
            responseType: 'json',
            params: {
                idPlugin: idPlugin,
                idUser: idUser
            }
        }).then((response: any) => {
            notification.open({
                type: "success",
                message: 'The plugin has been forked',
            });
            this.setState({redirect: "/detail/" + response.id})
        }).catch((error) => {
            notification.open({
                type: "error",
                message: 'Failed to fork this plugin',
            });
            console.log(error);
        });
    };

    download() {
        window.open(this.state.plugin.attributes.zip_plugin.url(), "_self")
    }

    render() {
        return (
            <Row className="Detail">
                <Card title={Plugin.name}>
                    <Row gutter={2}>

                        <Col span={6}>
                            <Card bordered={false}
                                  cover={<img id="zoomImg" src={this.state?.plugin?.attributes.image._url}
                                              alt={this.state?.plugin?.attributes.image._name}/>}/>
                        </Col>

                        <Col offset={1} span={17}>
                            <Descriptions column={1} title={this.state?.plugin?.attributes.name}>

                                <Descriptions.Item>{this.state?.plugin?.attributes.short_description}</Descriptions.Item>

                                <Descriptions.Item label={"Rating"}>
                                    <span>
                                        {Parse.User.current() && this.state?.canRate ?
                                            <Rate value={this.state?.likeAverage} tooltips={descRating}
                                                  onChange={this.handleRatingChange}/> :
                                            <Rate value={this.state?.likeAverage} disabled tooltips={descRating}/>}
                                        <span> {this.state?.likes?.length + " evaluations"}</span>
                                  </span>
                                </Descriptions.Item>

                                <Descriptions.Item label={"Open source"}>
                                    {
                                        this.state?.plugin?.attributes.open_source ?
                                            <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a"/> :
                                            <Icon type="close-circle" theme="twoTone" twoToneColor="#ff0000"/>
                                    }
                                </Descriptions.Item>

                                <Descriptions.Item label={"Official store"}>
                                    {
                                        this.state?.plugin?.attributes.official ?
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
                                        <Tag color="volcano">{this.state?.plugin?.attributes.price + '€'}</Tag>}
                                </Descriptions.Item>

                                <Descriptions.Item label={"Category"}>
                                    <Tag color="#2db7f5">{this.state?.category?.attributes.name}</Tag>
                                </Descriptions.Item>

                            </Descriptions>
                            <Button type={"primary"} icon={"download"}
                                    onClick={this.download.bind(this)}>Download</Button>
                            {this.state?.plugin?.attributes.open_source &&
                            <Button type={"primary"} icon={"fork"} onClick={this.handleForkPlugin.bind(this)}
                                    style={{marginLeft: "10px"}}>Fork</Button>}
                            </Col>
                    </Row>

                    <Row>
                        <Tabs>

                            <TabPane tab={"Description"} key={"Description"}>
                                <Row>{this.state?.plugin?.attributes.long_description}</Row><br/>
                                {this.state?.plugin?.attributes.url &&
                                <iframe title="youtube" width="560" height="315"
                                        src={'https://www.youtube.com/embed/' + this.state?.plugin?.attributes.url}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"/>}
                            </TabPane>

                            <TabPane tab={"Try it"} key={"Try it"}>
                                <PluginUse pluginID={this.props.match.params.id}/>
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

export default PluginDetails;
