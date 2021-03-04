import React from 'react'
import { Route } from 'react-router-dom'

import { Menu } from './components/Menu'
import { ETHThx } from './components/ETHThx'
import { ETHAddress } from './components/ETHAddress'
import { PersonalData } from './components/PersonalData'

class App extends React.Component {

  render() {
      return (
        <div className="container" style={{marginTop: '70px'}}>
          <Menu />
          <Route path='/personal-data' component={PersonalData} />
          <Route path='/eth-address' component={ETHAddress} />
          <Route path='/eth-thx' component={ETHThx} />
        </div>
      )
  }
}

export default App;
