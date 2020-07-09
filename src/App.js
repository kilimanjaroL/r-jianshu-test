import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Write from './pages/write';
import './index.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/write' exact component={Write}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
