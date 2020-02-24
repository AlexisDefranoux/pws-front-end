import React, { useState } from 'react';
import {Layout} from "antd";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import HeaderPage from "./components/shared/HeaderPage";
import FooterPage from "./components/shared/FooterPage";
import Shop from "./components/shop/Shop";
import Login from "./components/authentification/Login";
import Register from "./components/authentification/Register";
import Parse from 'parse';
import MyPlugins from "./components/account/MyPlugins";
import PublishOfficialStore from "./components/publish-plugin/PublishOfficialStore";
import PrivateRoute from "./components/authentification/PrivateRoute";
import PluginForm from "./components/add-plugin/PluginForm";
import PluginDetails from "./components/plugin-details/PluginDetails";
import TestAndUsePlugin from "./components/publish-plugin/TestAndUsePlugin";

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
                        <Route  path="/detail/:id" component={PluginDetails}/>
                        <Route  path="/publicofficialstore/:id" component={PublishOfficialStore}/>
                        <Route  onEnter={() => setPage('4')} exact path="/login" component={Login}/>
                        <Route  path="/register" component={Register}/>
                        <Route  path="/tryplugin/:id" component={TestAndUsePlugin}/>
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
