import { Route,  Switch } from 'react-router-dom'

import { Main } from './components/Main/Main'
import { Menu } from './components/Menu/Menu'
import { ETHThx } from './components/ETHThx/ETHThx'
import { ETHAddress } from './components/ETHAddress/ETHAddress'
import { PersonalData } from './components/PersonalData/PersonalData'
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import Registration from './components/Registration/Registration'
import NotFound from './components/404/404'
import { Redirect } from 'react-router';


function App() {
    const token = localStorage.getItem('access_token');
    const current_path = window.location.pathname;

    console.log('render App');

    if (!token && (current_path === '/registration')){
        console.log('render Registration');
        return (
            <div>
                <Registration/>
            </div>
        )
    }

    else if (!token) {
        console.log('render Login');
        return (
            <div>
                <Login/>
            </div>
        )
    }

    else if ((current_path === '/login') || (current_path === '/registration')) {
        return (
            <div className="container" style={{marginTop: '70px'}}>
                <Redirect to='/'/>
                <Menu />
                <Route exact path='/' component={Main} />
            </div>
        )
    }
    else {
        return (

            <div className="container" style={{marginTop: '70px'}}>
                <Logout />
                <Menu />
                <Switch>
                    <Route path='/personal-data' component={PersonalData} />
                    <Route path='/eth-address' component={ETHAddress} />
                    <Route path='/eth-thx' component={ETHThx} />
                    <Route path='/login' component={Login} />
                    <Route path='/registration' component={Registration} />
                    <Route exact path='/' component={Main} />
                    <Route path='/*' component={NotFound} />
                </Switch>
            </div>
        )
    }
}

export default App;
