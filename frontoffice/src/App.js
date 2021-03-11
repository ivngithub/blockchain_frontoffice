import React, { useState } from 'react';
import { Route } from 'react-router-dom'

import { Menu } from './components/Menu/Menu'
import { ETHThx } from './components/ETHThx/ETHThx'
import { ETHAddress } from './components/ETHAddress/ETHAddress'
import { PersonalData } from './components/PersonalData/PersonalData'
import Login from './components/Login/Login'


function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="container" style={{marginTop: '70px'}}>
      <Menu />
      <Route path='/personal-data' component={PersonalData} />
      <Route path='/eth-address' component={ETHAddress} />
      <Route path='/eth-thx' component={ETHThx} />
    </div>
  )

}

export default App;
