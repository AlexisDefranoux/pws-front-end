import React, {Component} from 'react';
import {Icon, Menu} from "antd";
import Shop from "./Shop";
import Detail from "./Detail";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

type MyProps = {};
type MyState = { current: string };

class HeaderPage extends Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {
            current: 'shop'
        };
    }

    render() {
        return (
            <Router>
                <header>
                    <Menu defaultSelectedKeys={['1']} mode="horizontal">
                        <Menu.Item key="1">
                            <Link to="shop"><Icon type="shop"/>Shop</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="detail"><Icon type="file-add"/>Add a plugin</Link>
                        </Menu.Item>
                        <Menu.Item key="3" disabled>
                            <Icon type="user"/>
                            My account
                        </Menu.Item>
                        <Menu.Item key="4" disabled>
                            <Icon type="shopping-cart"/>
                            My cart
                        </Menu.Item>
                    </Menu>
                </header>

                <Switch>
                    <Route path="/shop">
                        <Shop/>
                    </Route>
                    <Route path="/detail">
                        <Detail/>
                    </Route>
                    <Route path="/:something">
                        <p>Page 404</p>
                    </Route>
                    <Route path="/">
                        <Shop/>
                    </Route>
                </Switch>
            </Router>

        );
    }
}

export default HeaderPage;
