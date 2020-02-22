import {List, Avatar, Card} from 'antd';

import React, {Component} from "react";
import {Link} from "react-router-dom";

type MyProps = { data: any[] };
type MyState = { };

class MyPluginsList extends Component<MyProps, MyState> {
    state = {
    };

    render() {
        return (
            <List
                className="mypluginslist"
                itemLayout="vertical"
                size="default"
                dataSource={this.props.data}
                renderItem={item => (
                    <Card title={item.attributes.name}>
                        <List.Item
                            key={item.id}
                            actions={
                                item.attributes.official ?
                                    [] :
                                    [
                                        <Link to={"/publicofficialstore/" + item.id}>
                                            publish to official store
                                        </Link>
                                    ]
                            }
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.attributes.image.url()}/>}
                                title={item.attributes.name}
                            />
                            {item.attributes.short_description}
                        </List.Item>
                    </Card>
                )}
            />
        );
    }
}

export default MyPluginsList