import React from 'react';
import './App.css';

import HeaderPage from "./components/HeaderPage";
import FooterPage from "./components/FooterPage";
import {Layout} from "antd";

const App: React.FC = () => {
  return (
    <Layout className={"test"} >
        <HeaderPage/>
        <FooterPage/>
    </Layout>
  );
};

export default App;
