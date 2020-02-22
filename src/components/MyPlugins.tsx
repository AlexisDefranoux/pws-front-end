import {Col, Row} from 'antd';
import React, {Component} from 'react';
import Parse from 'parse';
import MyPluginsList from "./MyPluginsList";

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
        let query2 = new Parse.Query(Parse.Object.extend("User"));
        const user = await query2.get('ormdASGkOR');

        var Plugin = Parse.Object.extend("Plugin");
        var query = new Parse.Query(Plugin);
        query.equalTo("user", user);
        query.equalTo("official", true);
        const results1 = await query.find();

        query = new Parse.Query(Plugin);
        query.equalTo("user", user);
        query.equalTo("official", false);
        const results2 = await query.find();

        this.setState({
            ids_official: results1,
            ids_non_official:results2
        });
    }

    render() {
        return (
            <Row className="MyPlugins">
                <Col id="official" span={11}>
                    <h1>Officials</h1>
                    <MyPluginsList data={this.state.ids_official}/>
                </Col>
                <Col span={2}/>
                <Col id="non-official" span={11}>
                    <h1>Non-officials</h1>
                    <MyPluginsList data={this.state.ids_non_official}/>
                </Col>
            </Row>
        )
    }
}

export default MyPlugins;
