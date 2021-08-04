import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import EnterAmount from './Pages/Merchant/EnterAmount';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/customer" component={Home} />
        <Route exact path="/merchant" component={Home} />
        <Route exact path="/merchant/enterAmount" component={EnterAmount} />
        <Route exact path="/merchant/qr" component={Home} />
        <Route exact path="/merchant/success" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
