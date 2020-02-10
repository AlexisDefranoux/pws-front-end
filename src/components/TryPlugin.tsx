import React, {Component} from 'react';
import {Tabs} from "antd";
import './TryPlugin.css';


const {TabPane} = Tabs;
type MyProps = {};
type MyState = {};

class TryPlugin extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="TryPlugin">
                <embed id="pluginEmbed" src={"../freeverbDefranoux/index.html"}/>
            </div>
        );
    }
}

export default TryPlugin;