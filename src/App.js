import './App.css';
import Title from './components/Title'; 
import Navigation from './components/Navigation.js'; 
import Login from './components/Login.js'; 
import Body from './components/Body.js'; 
import { useState } from 'react';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    return (
        <div className="App">

            {isLoggedIn ? (
                <>
                    <Title />
                    <Navigation />
                    <Body /> 
                </>
            ) : (
                <Login onLogin={() => setIsLoggedIn(true)} /> 
            )}
        </div>
    );
}

export default App;
