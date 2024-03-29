import React from 'react';
import ReactDOM from 'react-dom';
import { Home,SignIn,Dashboard } from './components'; //NEW_ADDITION
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './styles.css'

ReactDOM.render(
  <React.StrictMode>

      <Router>
        <Routes>
          <Route path='/' element={<Home title  ={'DC Heros'}/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </Router>

    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();