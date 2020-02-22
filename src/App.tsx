import React from 'react';

import HeaderPage from "./components/shared/HeaderPage";
import FooterPage from "./components/shared/FooterPage";
import {Layout} from "antd";
import TryPlugin from "./components/TryPlugin";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PrivateRoute from './components/auth/private_route';
import Shop from "./components/Shop";
import AddPluginForm from "./components/AddPluginForm";
import Detail from "./components/Detail";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";


import Parse from 'parse';
import MyPlugins from "./components/MyPlugins";
import PublishOfficialStore from "./components/PublishOfficialStore";

Parse.initialize('parse-server-webplugin');
Parse.serverURL = `${process.env.REACT_APP_API_PARSE}`;

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <HeaderPage/>
                <div style={{padding: "78px 30px 30px 30px"}}>
                    <Switch>
                        <Route path="/shop" component={Shop}/>
                        <PrivateRoute path="/addplugin"><AddPluginForm/></PrivateRoute>
                        <Route path="/myplugins" component={MyPlugins}/>
                        <Route path="/detail/:id" component={Detail}/>
                        <Route path="/publicofficialstore/:id" component={PublishOfficialStore}/>
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
