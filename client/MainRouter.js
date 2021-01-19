import { divide } from 'lodash';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './core/Home';
import Users from './user/Users';
import Signup from './user/Signup';
import Menu from './core/Menu';

const MainRouter = () => {
  return (
    <div>
      <Menu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={Users} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </div>
  )
}

export default MainRouter;