import React, { useState } from 'react';
import { Route } from 'react-router-dom'

import { Menu } from './components/Menu/Menu'
import { ETHThx } from './components/ETHThx/ETHThx'
import { ETHAddress } from './components/ETHAddress/ETHAddress'
import { PersonalData } from './components/PersonalData/PersonalData'
import Login from './components/Login/Login'
import Registration from './components/Registration/Registration'
import useToken from './useToken';


function App() {
  const { token, setToken } = useToken();
  const current_path = window.location.pathname;
  console.log('render');
  console.log(token);
  if (!token && (current_path === '/registration')){
    return (
      <div>
        <Registration setToken={setToken} />
      </div>
    )
  }
  else if (!token || (!token && current_path === '/login')) {
    return (
      <div>
        <Login setToken={setToken} />
      </div>
    )
  }
  else {
    return (
      <div className="container" style={{marginTop: '70px'}}>
        {token  ? <Menu /> : null}    
        <Route path='/personal-data' component={PersonalData} />
        <Route path='/eth-address' component={ETHAddress} />
        <Route path='/eth-thx' component={ETHThx} />
        <Route path='/login' component={Login} />
        <Route path='/registration' component={Registration} />
      </div>
    )
  }  
}

export default App;
