import {Col, Row} from 'antd';
import React, {Component} from 'react';
import ShopCard from "./ShopCard";
import Parse from 'parse';

type MyProps = {};
type MyState = { ids: string[] };

class Shop extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            ids: []
        };
    }

    async componentDidMount(): Promise<void> {
        var Plugin = Parse.Object.extend("Plugin");
        var query = new Parse.Query(Plugin);
        const results = await query.find();
        let a: string[] = [];
        results.forEach(e => a.push(e.id));
        this.setState({ids: a});
    }

    render() {
        return (
            <Row gutter={[50, 20]}>
                {
                    this.state.ids.map(id =>
                        <Col key={id} span={6} style={{maxWidth: '400px', minWidth: '250px'}}>
                            <ShopCard id={id}/>
                        </Col>
                    )
                }
            </Row>
        )
    }
}

export default Shop;
