import React, {useState} from 'react';
import {Icon, Menu} from "antd";
import './HeaderPage.css'

import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Parse from 'parse';

const HeaderPage: React.FC = (props) => {

    let history = useHistory();
    let [current, setCurrent]: [string | undefined, any] = useState(undefined);

    async function handleLogout() {
        await Parse.User.logOut();
        setCurrent('4');
        history.push('/login');
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
