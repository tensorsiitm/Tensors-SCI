import React , {Component}from 'react';
import { HashRouter ,Switch,Route,Redirect} from 'react-router-dom';
import Home from './views/Homepage';

class App extends Component {
  render(){
    return (
      <HashRouter>
        <div className="App">

            <Switch>
              <Route exact path='/' component={() => <Home/>} />
              <Route exact path='/home' component={() => <Home/>} />
              <Redirect to='/'/>
            </Switch>
        </div>
      </HashRouter>
  
    );
  
  }
}

export default App;
