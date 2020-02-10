import {Col, Row} from 'antd';
import React, {Component} from 'react';
import ShopCard from "./ShopCard";
import {Link} from "react-router-dom";

type MyProps = {};
type MyState = { ids: number[] };

class Shop extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            ids: [0, 1, 2, 3, 4]
        };
    }

    render() {
        return (
            <Row gutter={[50, 20]}>
                {
                    this.state.ids.map(id =>
                        <Col key={id} span={6} style={{maxWidth: '400px', minWidth: '250px'}}>
                            <Link to={"/detail/" + id}>
                                <ShopCard id={id}/>
                            </Link>
                        </Col>
                    )
                }
            </Row>
        )
    }
}

export default Shop;
