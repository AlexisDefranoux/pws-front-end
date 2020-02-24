import React, { useState } from 'react';

import HeaderPage from "./components/shared/HeaderPage";
import FooterPage from "./components/shared/FooterPage";
import {Layout} from "antd";
import TryPlugin from "./components/TryPlugin";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PrivateRoute from './components/auth/private_route';
import Shop from "./components/Shop";
import PluginForm from "./pages/plugin_form";
import Detail from "./components/Detail";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";


import Parse from 'parse';
import MyPlugins from "./components/MyPlugins";
import PublishOfficialStore from "./components/PublishOfficialStore";

Parse.initialize('parse-server-webplugin');
Parse.serverURL = `${process.env.REACT_APP_API_PARSE}`;

const App: React.FC = () => {

    let [page, setPage] = useState('1');

    return (
        <Router>
            <Layout>
                <HeaderPage key={page}/>
                <div style={{padding: "78px 30px 30px 30px"}}>
                    <Switch>
                        <Route onEnter={() => setPage('1')} path="/shop" component={Shop}/>
                        <PrivateRoute  onEnter={() => setPage('3')} path="/addplugin"><PluginForm/></PrivateRoute>
                        <Route  onEnter={() => setPage('2')} path="/myplugins" component={MyPlugins}/>
                        <Route  path="/detail/:id" component={Detail}/>
                        <Route  path="/publicofficialstore/:id" component={PublishOfficialStore}/>
                        <Route  onEnter={() => setPage('4')} exact path="/login" component={Login}/>
                        <Route  path="/register" component={Register}/>
                        <Route  path="/tryplugin/:id" component={TryPlugin}/>
                        <Route  path="/:undefined"><p>Page 404</p></Route>
                        <Route  path="/" component={Shop}/>
                    </Switch>
                </div>
                <FooterPage/>
            </Layout>
        </Router>
    );
};

export default App;
