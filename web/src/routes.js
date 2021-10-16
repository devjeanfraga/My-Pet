import React from 'react';
import {Route, Switch, BrowserRouter,  } from 'react-router-dom';

import CreatePet from '../src/pages/createPet.js'
import Pet from '../src/pages/pet'
import Owners from './pages/owners.js';

const Routes =  () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path= "/clients/:clientId/pets" component= {CreatePet} />
        <Route path= "/pets/:petId" component= {Pet}/>
        <Route path= "/owners" component= {Owners}/> 
      </Switch>
    </BrowserRouter>

  ) 
}

export default Routes;

