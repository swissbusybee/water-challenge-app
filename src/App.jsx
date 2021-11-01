import React from 'react';
import './App.css';
import HomePageBody from './components/homePageBody.jsx';
import NavBar from './components/navBar.jsx';
import Footer from './components/footer.jsx';

function App() {
    return (
        <React.Fragment>
            <NavBar />
            <HomePageBody />
            <Footer />
        </React.Fragment>
    );
}

export default App;
