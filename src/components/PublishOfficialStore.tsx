import React, {Component} from 'react';

import {Button, Card} from "antd";
import Parse from "parse";

type MyProps = { match: any };
type MyState = { plugin: any; };

class PublishOfficialStore extends Component<MyProps, MyState> {

    componentDidMount(): void {
        let query = new Parse.Query(Parse.Object.extend("Plugin"));
        query.get(this.props.match.params.id).then((plugin) => {
            this.setState({ plugin: plugin.toJSON() });
        }, (error) => {
            console.error("Get plugin by id : " + error)
        });
    }

    handleClick() {

    }

    render() {
        return (
            <div className="PublishOfficialStore" >
                <Card title={Plugin.name}>
                    {/*<TryPlugin/>*/}
                    <Button onClick={this.handleClick}>a</Button>
                </Card>
            </div>
        );
    }
}

export default PublishOfficialStore;
