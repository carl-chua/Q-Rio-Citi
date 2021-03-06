import React, { useState, useEffect } from 'react';
import { Avatar, Card, CardContent } from '@material-ui/core';
import ShoppingCartIcon from '../../assets/ShoppingCartIcon.svg';
import ProfileImage from '../../assets/ProfileImage.png';
import Tick from '../../assets/tick.png';
import { getTransactionDetails } from '../../API/api.js';
import { useHistory, useParams } from 'react-router-dom';

export default function CustomerHome() {
  let { transactionId } = useParams();
  const history = useHistory();

  const [transaction, setTransaction] = useState();

  useEffect(() => {
    getTransactionDetails(transactionId, setTransaction);
  }, [transactionId]);

  function onClickHome() {
    history.push('/merchant');
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
              src={ProfileImage}
              alt=""
              style={{ width: '70px', height: '70px' }}
            />
          </div>
        </div>
        <div className="WelcomeText" style={{ marginLeft: '60px' }}>
          <h3 style={{ margin: 0, lineHeight: 0.8, color: 'white' }}></h3>
          <h3 style={{ margin: 0, color: 'white' }}></h3>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '20px',
        }}
      >
        <Card
          variant="outlined"
          style={{
            borderRadius: '25px',
            width: '86%',
            marginTop: '-42px',
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
          }}
        >
          <CardContent>
            <p>Amount Received</p>
            <h3>S${transaction && transaction.finalamount}</h3>
            <p>Transaction ID</p>
            <h3>{transactionId}</h3>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img src={Tick} style={{ width: '120px', height: '120px' }}></img>
              <h3 style={{ textAlign: 'center' }}>Payment Successful</h3>
              <button onClick={onClickHome}>Return to Homepage</button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
