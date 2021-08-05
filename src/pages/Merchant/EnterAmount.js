import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { QRCode } from 'react-qrcode-logo';
import { updateOriginalAmount, successfulTransactionListener } from 'API/api';
import { Avatar, CardContent } from '@material-ui/core';

import OCK from '../../assets/OCK.png';
import ShoppingCartIcon from '../../assets/ShoppingCartIcon.svg';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

export default function EnterAmount() {
  let history = useHistory();

  const [amount, setAmount] = useState();
  const [transactionId, setTransactionId] = useState();
  const [url, setURL] = useState();
  const [transaction, setTransaction] = useState();

  useEffect(() => {
    if (!transaction) {
      successfulTransactionListener(transactionId, setTransaction, redirect);
    }
  }, [transactionId]);

  const redirect = () => {
    history.push('/merchant/paymentcomplete/' + transactionId);
  };

  const getTransactionId = (amount) => {
    if (amount) {
      updateOriginalAmount(amount, setTransactionId, setURL);
    }
  };

  const handleCreateQR = (event) => {
    setAmount(event.target.value);
    getTransactionId(event.target.value);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: '#003B70',
          borderRadius: '50px',
          height: '250px',
          marginTop: '-50px',
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
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          top: '-50px',
          alignItems: 'center',
        }}
      >
        <Card
          variant="outlined"
          style={{
            borderRadius: '25px',
            width: '86%',
            height: '400px',
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
          }}
        >
          {amount && transactionId && url ? (
            <div style={{ height: '190px', margin: '30px 0px 0px 50px' }}>
              QR Code:
              <QRCode
                value={url}
                logoImage="/citi.jpg"
                logoWidth={40}
                logoHeight={40}
              />
            </div>
          ) : (
            <div
              style={{ height: '190px', marginTop: '0px', marginLeft: '50px' }}
            ></div>
          )}
          <div style={{ margin: '0px 50px 20px 50px' }}>
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-amount">
                <b>Enter Amount:</b>
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                autoFocus
                type="number"
                placeholder="0.00"
                onBlur={handleCreateQR}
                startAdornment={
                  <InputAdornment position="start">
                    <b>S$</b>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </Card>
      </div>
    </div>
  );
}
