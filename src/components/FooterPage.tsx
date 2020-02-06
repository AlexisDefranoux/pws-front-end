import React, { Component } from 'react';
import {Layout} from "antd";

import './FooterPage.css'

const { Footer } = Layout;

class FooterPage extends Component {

    render() {
        return (
            <Footer className={"footer"} >Pop team - © France 2020 - Created by Pop, Jajmy, Dionysos, Lexalis</Footer>
        );
    }
}

export default FooterPage;
