import {List, Avatar} from 'antd';
import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import Parse from "parse";

type MyProps = { data: any[] };

class MyPluginsList extends Component<MyProps> {

    render() {
        if(!Parse.User.current()) return <Redirect to='/login'/>;
        return (
            <List
                className="mypluginslist"
                itemLayout="horizontal"
                dataSource={this.props.data}
                renderItem={item => (
                    <List.Item
                        key={item.id}
                        actions={item.attributes.official ?
                            [<Link to={"/detail/" + item.id}>Details</Link>] :
                            [<Link to={"/detail/" + item.id}>Details</Link>, <Link to={"/publicofficialstore/" + item.id}>Publish to official store</Link>]}>
                        <List.Item.Meta
                            avatar={<Avatar src={item.attributes.image.url()}/>}
                            title={item.attributes.name}
                            description={item.attributes.short_description}
                        />
                    </List.Item>
                )}
            />
        );
    }
}

export default MyPluginsList
