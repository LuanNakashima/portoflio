import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Skills from './Pages/Skills';
import Projetos from './Pages/Projetos';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/sobre" component={Sobre} />

      <Route exact path="/habilidades" component={Skills} />

      <Route exact path="/projetos" component={Projetos} />
    </Switch>
  );
}

export default App;
