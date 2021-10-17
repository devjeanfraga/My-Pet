import React from 'react';
import {Route, Switch, BrowserRouter,  } from 'react-router-dom';

import CreatePet from '../src/pages/createPet.js'
import Pet from '../src/pages/pet'
import Clients from './pages/clients.js';
import ClientDetails from '../src/pages/clientDetails'


const Routes =  () => {
  return (
    <BrowserRouter>
      <Switch>
       
        <Route path= "/clients" component= {Clients}/>
        <Route path= "/clientDetails" component = {ClientDetails}/>
        <Route path= "/pets/:petId" component= {Pet}/>
        <Route path= "/pets" component= {CreatePet} />
        
      </Switch>
    </BrowserRouter>

  ) 
}

export default Routes;

