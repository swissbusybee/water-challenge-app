import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import HomePageBody from './components/homePageBody.jsx';
import NavBar from './components/navBar.jsx';
import Footer from './components/footer.jsx';
import About from './components/about.jsx';
import Resources from './components/resources.jsx';

function App() {
    return (
        <React.Fragment>
            <Router>
                <NavBar />
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={() => <HomePageBody />}
                    />
                    <Route
                        path="/about"
                        exact
                        component={() => <About />}
                    />
                    <Route
                        path="/resources"
                        exact
                        component={() => <Resources />}
                    />
                </Switch>
                <Footer />
            </Router>
        </React.Fragment>
    );
}

export default App;
