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


import Parse from 'parse';

Parse.initialize('parse-server-webplugin');
Parse.serverURL = `${process.env.REACT_APP_API_PARSE}`;

const App: React.FC = () => {
    return (
        <Router>
            <Layout className={"test"}>
                <HeaderPage/>
                <div id="containerDiv" style={{padding: "78px 30px 30px 30px"}}>
                    <Switch>
                        <Route path="/shop" component={Shop}/>
                        <Route path="/addplugin" component={AddPluginForm}/>
                        <Route path="/detail/:id" component={Detail}/>
                        <Route exact path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/tryplugin/:id" component={TryPlugin}/>
                        <Route path="/:undefined"><p>Page 404</p></Route>
                        <Route path="/" component={Shop}/>
                    </Switch>
                </div>
                <FooterPage/>
            </Layout>
        </Router>
    );
};

export default App;
