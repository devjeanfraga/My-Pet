import React from 'react';
import {Route, Switch, BrowserRouter } from 'react-router-dom';

import CreatePet from '../src/pages/createPet.js'
import Pet from '../src/pages/pet'

const Routes =  () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path= "/clients/:client_id/pets" component= {CreatePet} />
        <Route path= "/pets" component= {Pet}/>
      </Switch>
    </BrowserRouter>

  ) 
}

export default Routes;

