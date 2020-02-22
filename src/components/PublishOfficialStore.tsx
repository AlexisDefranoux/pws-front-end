import React, {Component} from 'react';

import {Button, Card, notification} from "antd";
import Parse from "parse";
import TryPlugin from "./TryPlugin";
import {Redirect} from "react-router-dom";

type MyProps = { match: any };
type MyState = { plugin: any, testPassed: boolean, redirect?: string };

class PublishOfficialStore extends Component<MyProps, MyState> {

    componentDidMount(): void {
        this.setState({testPassed: false});

        let query = new Parse.Query(Parse.Object.extend("Plugin"));
        query.get(this.props.match.params.id).then((plugin) => {
            this.setState({ plugin: plugin.toJSON() });
        }, (error) => {
            console.error("Get plugin by id : " + error)
        });
    }

    getPluginTestResults(total: number, failure: number) : void {
        this.setState({testPassed: (failure === 0 && total > 0)});
    }

    async handleClick() {
        if (!this.state.testPassed) {
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
            this.setState({redirect: '/myplugins/'})
        }
    }

    render() {
        if(this.state?.redirect) return <Redirect to={this.state.redirect}/>;
        return (
            <div className="PublishOfficialStore" >
                <Card title={Plugin.name}>
                    {
                        this.state?.plugin?
                            <TryPlugin pluginID={this.state.plugin.objectId} testResults={this.getPluginTestResults.bind(this)}/>
                            :
                            <p>Chargement du plugin</p>
                    }
                    <Button onClick={this.handleClick.bind(this)}>Publish to the official store</Button>
                </Card>
            </div>
        );
    }
}

export default PublishOfficialStore;
