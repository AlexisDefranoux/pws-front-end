import React, {useState} from 'react';
import {Icon, Menu, notification} from "antd";
import {Link, useHistory} from 'react-router-dom';
import Parse from 'parse';

import './HeaderPage.css'

const HeaderPage: React.FC = () => {

    let history = useHistory();
    let [current, setCurrent]: [string | undefined, any] = useState(undefined);

    async function handleLogout() {
        try {
            await Parse.User.logOut();
            setCurrent('1');
            history.push('/shop');
            notification.open({
                type: "success",
                message: 'Log out succeed ',
            });
        } catch (err) {
            notification.open({
                type: "error",
                message: 'Failed to log out you',
            });
        }
    }

    return (
        <header className={"fixed-menu"}>
            <Menu defaultSelectedKeys={[current || '1']} mode="horizontal">
                <Menu.Item key="1">
                    <Link to="/shop"><Icon type="shop"/>Shop</Link>
                </Menu.Item>
                {Parse.User.current() &&
                <Menu.Item key="3">
                    <Link to="/myplugins"><Icon type="folder"/>My plugins</Link>
                </Menu.Item>}
                {Parse.User.current() &&
                <Menu.Item key="2">
                    <Link to="/addplugin"><Icon type="file-add"/>Add a plugin</Link>
                </Menu.Item>}
                {!Parse.User.current() &&
                <Menu.Item style={{float: "right"}} key="4">
                    <Link to="/login"><Icon type="user"/>Login</Link>
                </Menu.Item>}
                {Parse.User.current() &&
                <Menu.Item key="6" style={{float: "right"}}>
                    <span onClick={handleLogout}><Icon type="logout"/>Log out</span>
                </Menu.Item>}
                {Parse.User.current() &&
                <Menu.Item disabled key="5" style={{float: "right"}}>
                    <Icon type="user"/>Welcome {Parse.User.current()?.attributes.username}
                </Menu.Item>}
            </Menu>
        </header>
    );
};

export default HeaderPage;
