import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import EnterAmount from './pages/Merchant/EnterAmount';
import CustomerHome from './pages/Customer/CustomerHome';
import PaymentComplete from './pages/Customer/PaymentComplete';
import BottomNav from './components/BottomNav';
import QRScanner from './pages/Customer/QRScanner';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/customer" component={CustomerHome} />
        <Route
          exact
          path="/customer/paymentcomplete"
          component={PaymentComplete}
        />
        <Route exact path="/merchant" component={Home} />
        <Route exact path="/merchant/enterAmount" component={EnterAmount} />
        <Route exact path="/merchant/qr" component={Home} />
        <Route exact path="/merchant/success" component={Home} />
        <Route exact path="/customer/qr" component={QRScanner} />
      </Switch>
      <BottomNav />
    </div>
  );
}

export default App;
