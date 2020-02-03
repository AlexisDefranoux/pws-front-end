import React, { Component } from 'react';

type MyProps = { };
type MyState = { };

class FooterPage extends Component<MyProps, MyState> {

    render() {
        return (
            <footer style={{ textAlign: 'center', padding: '10px'}}>Pop team - © France 2020 - Created by Pop, Jajmy, Dionysos, Lexalis</footer>
        );
    }
}

export default FooterPage;
