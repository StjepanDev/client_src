import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Parties from './Parties';
import About from './About';
import PartyDetails from './PartyDetails';
import AddParty from './AddParty';
import EditParty from './EditParty';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Parties} />
      <Route exact path="/about" component={About} />
      <Route exact path="/parties/add" component={AddParty} />
      <Route exact path="/parties/edit/:id" component={EditParty} />
      <Route exact path="/parties/:id" component={PartyDetails} />
    </Switch>
  </main>
);

export default Main;
