import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import CustomerMarketPlaceUnhighlighted from '../../assets/CustomerMarketPlaceUnhighlighted.svg';
import CustomerScanQRHighlighted from '../../assets/CustomerScanQRHighlighted.svg';
import CustomerScanQRUnhighlighted from '../../assets/CustomerScanQRUnhighlighted.svg';
import CustomerWalletHighlighted from '../../assets/CustomerWalletHighlighted.svg';
import CustomerWalletUnhighlighted from '../../assets/CustomerWalletUnhighlighted.svg';
import MerchantCardHighlighted from '../../assets/MerchantCardHighlighted.svg';
import MerchantCardUnhighlighted from '../../assets/MerchantCardUnhighlighted.svg';
import MerchantHouseHighlighted from '../../assets/MerchantHouseHighlighted.svg';
import MerchantHouseUnhighlighted from '../../assets/MerchantHouseUnhighlighted.svg';

export default function BottomNav() {
  const history = useHistory();
  const location = useLocation();
  const accountType = location.pathname.split('/')[1];

  if (location.pathname === '/customer') {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          position: 'fixed',
          bottom: 0,
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <img src={CustomerWalletHighlighted} alt="" height="25px" />
        <img
          onClick={() => {
            history.push('/customer/qr');
          }}
          src={CustomerScanQRUnhighlighted}
          alt=""
          height="25px"
        />
        <img src={CustomerMarketPlaceUnhighlighted} alt="" height="25px" />
      </div>
    );
  } else if (accountType === 'customer') {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          position: 'fixed',
          bottom: 0,
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <img src={CustomerWalletUnhighlighted} alt="" height="25px" />
        <img src={CustomerScanQRHighlighted} alt="" height="25px" />
        <img src={CustomerMarketPlaceUnhighlighted} alt="" height="25px" />
      </div>
    );
  } else if (location.pathname === '/merchant') {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          position: 'fixed',
          bottom: 0,
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <img src={MerchantHouseHighlighted} alt="" height="25px" />
        <img src={MerchantCardUnhighlighted} alt="" height="31px" />
      </div>
    );
  } else if (accountType === 'merchant') {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          position: 'fixed',
          bottom: 0,
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <img src={MerchantHouseUnhighlighted} alt="" height="25px" />
        <img src={MerchantCardHighlighted} alt="" height="30px" />
      </div>
    );
  } else {
    return '';
  }
}
