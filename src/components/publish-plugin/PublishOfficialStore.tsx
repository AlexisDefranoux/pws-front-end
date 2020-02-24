import React, {Component} from 'react';
import {Button, Card, notification, Row} from "antd";
import Parse from "parse";
import {Redirect} from "react-router-dom";

import TestAndUsePlugin from "./TestAndUsePlugin";

type MyProps = { match: any };
type MyState = { plugin: any, run: Mocha.Runner, redirect?: string };

class PublishOfficialStore extends Component<MyProps, MyState> {

    componentDidMount(): void {

        let query = new Parse.Query(Parse.Object.extend("Plugin"));
        query.get(this.props.match.params.id).then((plugin) => {
            this.setState({plugin: plugin.toJSON()});
        }, (error) => {
            console.error("Get plugin by id : " + error)
        });
    }

    getPluginTestResults(run: Mocha.Runner): void {
        this.setState({run: run});
    }

    async handleClick() {
        if (this.state.run?.failures !== 0) {
            notification.open({
                type: "error",
                message: 'Some tests failed',
            });
        } else {
            const Plugin = Parse.Object.extend("Plugin");
            const query = new Parse.Query(Plugin);
            query.equalTo("objectId", this.state.plugin.objectId);
            const results = await query.find();
            results[0].set("official", true);
            results[0].save();
            notification.open({
                type: "success",
                message: 'Your plugin has been posted to the official store',
            });
            this.setState({redirect: '/detail/' + results[0].id})
        }
    }

    render() {
        if (!Parse.User.current()) return <Redirect to='/login'/>;
        if (this.state?.redirect) return <Redirect to={this.state.redirect}/>;
        return (
            <div className="PublishOfficialStore">
                <Card title={'Request to the official store'}>
                    <Row type={'flex'} justify={"center"} style={{marginBottom: '15px'}}>
                        <Button icon="check" type={"primary"} onClick={this.handleClick.bind(this)}>Publish to the
                            official store</Button>
                    </Row>
                    {this.state?.plugin ?
                        <TestAndUsePlugin pluginID={this.state.plugin.objectId}
                                          testResults={this.getPluginTestResults.bind(this)}/> :
                        <p>Loading...</p>
                    }
                </Card>
            </div>
        );
    }
}

export default PublishOfficialStore;
