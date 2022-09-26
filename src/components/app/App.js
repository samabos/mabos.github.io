import React from 'react';
import Layout from '../Layout/Layout';
import { Link } from "react-router-dom";

import Home from '../Home/Home';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Home />
                </Layout>
                </div>
            );
        
    }
}

export default App;
