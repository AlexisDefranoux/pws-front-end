import React from 'react';
import './App.css';

import HeaderPage from "./components/shared/HeaderPage";
import FooterPage from "./components/shared/FooterPage";
import {Layout} from "antd";
import TryPlugin from "./components/TryPlugin";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Shop from "./components/Shop";
import AddPluginForm from "./components/AddPluginForm";
import Detail from "./components/Detail";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App: React.FC = () => {
    return (
        <Router>
            <Layout className={"test"}>
                <HeaderPage/>
                <div id="containerDiv" style={{padding: "78px 30px 30px 30px"}}>
                    <Switch>
                        <Route path="/shop"><Shop/></Route>
                        <Route path="/addplugin"><AddPluginForm/></Route>
                        <Route path="/detail/:id"><Detail/></Route>
                        <Route exact path="/login"><Login/></Route>
                        <Route path="/register"><Register/></Route>
                        <Route path="/tryplugin"><TryPlugin/></Route>
                        <Route path="/:undefined"><p>Page 404</p></Route>
                        <Route path="/"><Shop/></Route>
                    </Switch>
                </div>
                <FooterPage/>
            </Layout>
        </Router>
    );
};

export default App;
