import { Col, Row } from 'antd';
import React, { Component } from 'react';
import ShopCard from "./ShopCard";

type MyProps = { };
type MyState = { ids: number[] };
class Shop extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            ids: [0,1,2,3,4]
        };
    }

    render() {
        return (
            <div className={"Shop"} style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={16}>
                    {
                        this.state.ids.map(el =>
                            // <Link to="/about">
                                <Col key={el} span={8} style={{marginBottom: '15px'}}>
                                    <ShopCard id={el}/>
                                </Col>
                            // </Link>
                        )
                    }
                </Row>
            </div>
        )
    }
}

export default Shop;
