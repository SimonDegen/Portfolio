import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

function App() {
  const [showContact,setShowContact] = useState(false)
  const [CurrentPage, setCurrentPage] = useState(1)
  return (
    <div className="App">
      <Navbar setShowContact = {setShowContact} setCurrentPage = {setCurrentPage} />
      {(() => {
                            switch (CurrentPage) {
                            case 1:
                                return <Home/>
                            case 2:
                                return <Projects/>  
                            default:
                                return <Home/>
                            }
                        })()}
      {(() => {
                if(showContact == true){
                  return <Contact setShowContact = {setShowContact} />
                }
      })()}
    </div>
  );
}
export default App;
