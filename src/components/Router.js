import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StorePicker from './StorePicker/StorePicker';
import App from './App';
import NotFound from './NotFound/NotFound';

const AppRouter = () => {
  return(
  <Router>
    <Switch>
      <Route exact path="/" component={StorePicker}/>
      <Route path="/store/:storeId" component={App}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>
  );
}

export default AppRouter;