import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import EnterAmount from './pages/Merchant/EnterAmount';
import CustomerHome from './pages/Customer/CustomerHome';
import Payment from './pages/Customer/Payment';
import UserPaymentComplete from './pages/Customer/PaymentComplete';
import MerchantPaymentComplete from './pages/Merchant/PaymentComplete';
import VoucherSelection from './pages/Customer/VoucherSelection';
import BottomNav from './components/BottomNav';
import Confirmation from './pages/Customer/Confirmation';
import QRScanner from './pages/Customer/QRScanner';
import MerchantHome from './pages/Merchant/MerchantHome';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/customer" component={CustomerHome} />
        <Route
          exact
          path="/customer/paymentcomplete"
          component={UserPaymentComplete}
        />

        <Route
          exact
          path="/customer/voucherselection/:transactionId"
          component={VoucherSelection}
        />
        <Route exact path="/merchant" component={MerchantHome} />
        <Route
          exact
          path="/customer/confirmation/:transactionId/:voucherId"
          component={Confirmation}
        />
        <Route
          exact
          path="/customer/payment/:transactionId/:voucherId"
          component={Payment}
        />
        <Route exact path="/merchant/enterAmount" component={EnterAmount} />
        <Route exact path="/merchant/qr" component={Home} />
        <Route exact path="/merchant/success" component={Home} />
        <Route exact path="/customer/qr" component={QRScanner} />
        <Route
          exact
          path="/merchant/paymentcomplete"
          component={MerchantPaymentComplete}
        />
      </Switch>
      <BottomNav />
    </div>
  );
}

export default App;
