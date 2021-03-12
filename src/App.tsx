import React from 'react';
import { Button } from 'antd';
import { observer } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './component/Nav';
import RouterContainer from './router/index';
import globStore from './store/glob';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <div className='content'></div>
        <RouterContainer />
      </BrowserRouter>
    </div>
  );
}

export default observer(App);
