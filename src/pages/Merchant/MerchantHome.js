import React from 'react';
import { Avatar, Card, CardContent } from '@material-ui/core';
import OCK from '../../assets/OCK.png';
import ShoppingCartIcon from '../../assets/ShoppingCartIcon.svg';
import MerchantChart from '../../assets/MerchantChart.svg';

export default function MerchantHome() {
  function displayVoucherCard(marginTop, text, number) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Card
          variant="outlined"
          style={{
            borderRadius: '25px',
            width: '86%',
            marginTop: marginTop,
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
          }}
        >
          <CardContent>
            <h4 style={{ color: '#3A3A3A', margin: 0, fontWeight: 'normal' }}>
              {text}
            </h4>
            <div
              className="NumVouchersAndSeeAll"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <h1 style={{ color: '#003B70', margin: 0, paddingLeft: '6px' }}>
                {number}
              </h1>
              <p style={{ color: '#898A8D', margin: 0, paddingTop: '10px' }}>
                {'See All >'}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <div
        className="BlueRibbon"
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#003B70',
          borderRadius: '50px',
          marginTop: '-50px',
          paddingBottom: '60px',
        }}
      >
        <div
          className="ShoppingCartAndAvatar"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div
            className="ShoppingCart"
            style={{ paddingTop: '90px', paddingLeft: '20px' }}
          >
            <img src={ShoppingCartIcon} alt="" />
          </div>
          <div
            className="Avatar"
            style={{ paddingTop: '82px', paddingRight: '8px' }}
          >
            <Avatar
              src={OCK}
              alt=""
              style={{ width: '70px', height: '70px' }}
            />
          </div>
        </div>
        <div className="WelcomeText" style={{ marginLeft: '60px' }}>
          <h3 style={{ margin: 0, lineHeight: 0.8, color: 'white' }}>
            Good Morning
          </h3>
          <h3 style={{ margin: 0, color: 'white' }}>Old Chang Kee!</h3>
        </div>
      </div>
      {displayVoucherCard('-42px', 'Your total vouchers', '6')}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h4>Monthly Summary of Vouchers Sold</h4>
        <img src={MerchantChart} alt="" height="230px" />
      </div>
    </div>
  );
}
