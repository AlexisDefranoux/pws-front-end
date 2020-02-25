import {Col, Row, Switch} from 'antd';
import React, {Component} from 'react';
import Parse from 'parse';

import ShopCard from "./ShopCard";

type MyProps = {};
type MyState = { plugins: any[], onlyOfficial: boolean };

class Shop extends Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {
            plugins: [],
            onlyOfficial: true
        };
    }

    async componentDidMount(): Promise<void> {
        this.getPlugins(true);
    }

    async getPlugins(onlyOfficial: boolean): Promise<void> {
        let query = new Parse.Query(Parse.Object.extend("Plugin"));
        if (onlyOfficial) query.equalTo("official", true);
        const plugins = await query.find();
        this.setState({plugins: plugins});
    }

    async onChange() {
        this.getPlugins(!this.state.onlyOfficial);
        this.setState({onlyOfficial: !this.state.onlyOfficial});
    }

    render() {
        return (
            <div>
                <div style={{marginBottom: '15px'}}><Switch defaultChecked={this.state.onlyOfficial}
                                                            onChange={this.onChange.bind(this)}/> Official plugins
                </div>
                <Row gutter={[50, 20]} type='flex'>
                    {this.state?.plugins?.map(plugin =>
                        <Col key={plugin.id}>
                            <ShopCard plugin={plugin}/>
                        </Col>
                    )}
                </Row>
            </div>
        )
    }
}

export default Shop;
