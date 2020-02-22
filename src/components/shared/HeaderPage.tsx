import React, {Component} from 'react';
import {Badge, Icon, Menu} from "antd";
import './HeaderPage.css'

import { Link } from 'react-router-dom';
import Parse from 'parse';

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
            <header className={"fixed-menu"}>
                <Menu defaultSelectedKeys={['1']} mode="horizontal">
                    <Menu.Item key="1">
                        <Link to="/shop"><Icon type="shop"/>Shop</Link>
                    </Menu.Item>
                    {Parse.User.current() &&
                    <Menu.Item key="2">
                        <Link to="/addplugin"><Icon type="file-add"/>Add a plugin</Link>
                    </Menu.Item>}
                    {Parse.User.current() &&
                    <Menu.Item key="3">
                        <Link to="/myplugins"><Icon type="shop"/>My plugins</Link>
                    </Menu.Item>}
                    {!Parse.User.current() &&
                    <Menu.Item style={{float: "right"}} key="4">
                        <Link to="/login"><Icon type="user"/>Login</Link>
                    </Menu.Item>}
                    {Parse.User.current() &&
                    <Menu.Item disabled style={{float: "right"}} key="4">
                        <Icon type="user"/>Welcome {Parse.User.current()?.attributes.username}
                    </Menu.Item>}
                    <Menu.Item style={{float: "right"}} key="5" disabled>
                        <Badge count={2}><Icon type="shopping-cart"/></Badge>
                    </Menu.Item>
                </Menu>
            </header>
        );
    }
}

export default HeaderPage;
