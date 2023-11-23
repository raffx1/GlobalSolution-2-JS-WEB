import Login from './Pages/login';
import 'bootstrap/dist/css/bootstrap.css'
import Page from './Pages/page';
import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import {Autenticar} from './autenticador';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Page' element={<Autenticar><Page/></Autenticar>}/>
      </Routes>
    </Router>
  );
}

export default App;
