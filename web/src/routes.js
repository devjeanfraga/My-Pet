import React from 'react';
import {Route, Switch, BrowserRouter,  } from 'react-router-dom';

import CreatePet from '../src/pages/createPet.js'
import Pet from '../src/pages/pet'
import CreateClient from '../src/pages/createClient'
import Clients from './pages/clients.js';
import ClientDetails from '../src/pages/clientDetails'
import Landing from '../src/pages/landing'

const Routes =  () => {
  return (
    <BrowserRouter>
      <Switch>
       
        <Route path= "/" exact component= {Landing}/>
        <Route path= "/client-create" exact component= {CreateClient}/>
        <Route   path= "/clients" exact component= {Clients}/> 
        <Route  path= "clients/:clientId"  component ={ClientDetails} />
        <Route path= "clients/:clientId/pets" component= {CreatePet} />
        <Route path= "/pets" component= {Pet}/>
       
        
      </Switch>
    </BrowserRouter>

  ) 
}

export default Routes;

