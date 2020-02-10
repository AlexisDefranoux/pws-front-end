import React, {Component} from 'react';
import {Badge, Icon, Menu} from "antd";
import Shop from "./Shop";
import Detail from "./Detail";
import Login from "./Login";
import AddPluginForm from "./AddPluginForm";
import './HeaderPage.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Register from "./Register";

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
                <header className={"fixed-menu"}>
                    <Menu defaultSelectedKeys={['1']} mode="horizontal">
                        <Menu.Item key="1">
                            <Link to="/shop"><Icon type="shop"/>Shop</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/addplugin"><Icon type="file-add"/>Add a plugin</Link>
                        </Menu.Item>
                        <Menu.Item style={{float:"right"}} key="4">
                            <Link to="/login"><Icon type="user"/>Login</Link>
                        </Menu.Item>
                        <Menu.Item style={{float:"right"}} key="3" disabled>
                            <Badge count={5}><Icon type="shopping-cart"/></Badge>
                        </Menu.Item>
                    </Menu>
                </header>

                <div style={{padding: "78px 30px 30px 30px"}}>
                <Switch>
                    <Route path="/shop"><Shop/></Route>
                    <Route path="/addplugin"><AddPluginForm/></Route>
                    <Route path="/detail/:id"><Detail/></Route>
                    <Route exact path="/login"><Login/></Route>
                    <Route path="/register"><Register/></Route>
                    <Route path="/:undefined"><p>Page 404</p></Route>
                    <Route path="/"><Shop/></Route>
                </Switch>
                </div>
            </Router>

        );
    }
}

export default HeaderPage;
