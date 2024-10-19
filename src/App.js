import './App.css';
import Title from './components/Title'; 
import Navigation from './components/Navigation';
import Login from './components/Login';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <div className="App">
                {isLoggedIn ? (
                    <>
                        <Title />
                        <Navigation />
                        <Routes>
                            <Route path="/" element={<Body />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </>
                ) : (
                    <Login onLogin={() => setIsLoggedIn(true)} />
                )}
            </div>
        </Router>
    );
}

export default App;
