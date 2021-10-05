import React from 'react';
import {Route, Switch, BrowserRouter } from 'react-router-dom';

import CreatePet from '../src/pages/createPet.js'

const Routes =  () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path= "/pets/create" component= {CreatePet} />
        <Route path= "pets/:id" component= ""/>
      </Switch>
    </BrowserRouter>

  ) 
}

export default Routes;

