import {Checkbox, Col, Row} from 'antd';
import React, {Component} from 'react';
import ShopCard from "./ShopCard";
import Parse from 'parse';

type MyProps = {};
type MyState = { ids: string[], official_only: boolean };

class Shop extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            ids: [],
            official_only: true
        };
    }

    async componentDidMount(): Promise<void> {
        let Plugin = Parse.Object.extend("Plugin");
        let query = new Parse.Query(Plugin);
        console.log(this.state.official_only);
        if (this.state.official_only)
            query.equalTo("official", true);
        const results = await query.find();
        let a: string[] = [];
        results.forEach(e => a.push(e.id));
        this.setState({ids: a});
    }

    async onChange() {
        this.setState({official_only: !this.state.official_only})
        this.componentDidMount();
    }

    render() {
        return (
            <div>
                <Checkbox onChange={this.onChange.bind(this)}>
                    Official plugins only
                </Checkbox>
                <Row gutter={[50, 20]} type='flex'>
                    {
                        this.state.ids.map(id =>
                            <Col key={id}>
                                <ShopCard id={id}/>
                            </Col>
                        )
                    }
                </Row>
            </div>
        )
    }
}

export default Shop;
