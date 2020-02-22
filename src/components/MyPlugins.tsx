import {Card, Col, Row} from 'antd';
import React, {Component} from 'react';
import Parse from 'parse';
import MyPluginsList from "./MyPluginsList";
import {Redirect} from "react-router-dom";

type MyProps = {};
type MyState = { ids_official: any[], ids_non_official: any[] };

class MyPlugins extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            ids_official: [],
            ids_non_official: []
        };
    }

    async componentDidMount(): Promise<void> {
        let Plugin = Parse.Object.extend("Plugin");
        let query = new Parse.Query(Plugin);
        query.equalTo("user", Parse.User.current());
        query.equalTo("official", true);
        const results1 = await query.find();

        query = new Parse.Query(Plugin);
        query.equalTo("user", Parse.User.current());
        query.equalTo("official", false);
        const results2 = await query.find();

        this.setState({
            ids_official: results1,
            ids_non_official:results2
        });
    }

    render() {
        if(!Parse.User.current()) return <Redirect to='/login'/>;
        return (
            <Row className="MyPlugins" type={'flex'} justify={"space-around"}>
                <Col span={11} style={{marginBottom: '15px'}}>
                    <Card title={'Officials'}>
                        <MyPluginsList data={this.state.ids_official}/>
                    </Card>
                </Col>
                <Col span={11}>
                    <Card title={'Unofficial'}>
                        <MyPluginsList data={this.state.ids_non_official}/>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default MyPlugins;
