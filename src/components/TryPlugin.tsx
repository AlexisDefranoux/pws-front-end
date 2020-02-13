import React, {Component} from 'react';
import './TryPlugin.css';

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
