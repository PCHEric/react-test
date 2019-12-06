import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Test6 from './Test6';
import Test7 from './Test7';
import './App.css'

function App() {
  return (
    <div className='menu'>
      <Router>
        <Link to='/inputnumber'>InputNumber组件</Link>
        <Link to='/confirm'>Confirm组件</Link>
        <Route path='/inputnumber' component={Test6}></Route>
        <Route path='/confirm' component={Test7}></Route>
      </Router>
    </div>
  )
}
export default App;
