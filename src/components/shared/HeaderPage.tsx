import React, {Component, useState} from 'react';
import {Icon, Menu} from "antd";
import './HeaderPage.css'

import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Parse from 'parse';

type MyProps = {};
type MyState = { current: string };


type Props = {
    key: string
};

const HeaderPage: React.FC<Props> = (props) => {

    let history = useHistory();
    let [current, setCurrent]: [string | undefined, any] = useState(undefined);

    async function handleLogout() {
        await Parse.User.logOut();
        setCurrent('4');
        history.push('/login');
    }

    
        return (
            <header className={"fixed-menu"}>
                <Menu defaultSelectedKeys={[current || props.key]} mode="horizontal">
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
                        <Menu.Item disabled key="5">
                            <Icon type="user"/>Welcome {Parse.User.current()?.attributes.username}
                        </Menu.Item>    
                    }
                    {Parse.User.current() && 
                        <Menu.Item key="6">
                            <a onClick={handleLogout}>Log out</a>
                        </Menu.Item>
                    }
                    {/*<Menu.Item style={{float: "right"}} key="5" disabled>*/}
                    {/*    <Badge count={2}><Icon type="shopping-cart"/></Badge>*/}
                    {/*</Menu.Item>*/}
                </Menu>
            </header>
        );
    
}

export default HeaderPage;
