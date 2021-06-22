import React , {Component}from 'react';
import { HashRouter ,Switch,Route,Redirect} from 'react-router-dom';
import Home from './views/Homepage';
import Test from './views/testpage';

class App extends Component {
  render(){
    return (
      <HashRouter>
        <div className="App">

            <Switch>
              <Route exact path='/' component={() => <Test/>} />
              <Route exact path='/home' component={() => <Home/>} />
              <Route exact path='/test' component={() => <Test/>} />
              <Redirect to='/'/>
            </Switch>
        </div>
      </HashRouter>
  
    );
  
  }
}

export default App;
