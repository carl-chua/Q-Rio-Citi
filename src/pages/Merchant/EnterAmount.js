import React from 'react';
import { useState } from 'react';
import { QRCode } from 'react-qrcode-logo';

import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

export default function EnterAmount() {
  const [amount, setAmount] = useState();
  const [qrString, setQRString] = useState();

  const handleChange = (event) => {
    setAmount(event.target.value);
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
      ></div>
      <div
        style={{
          position: 'relative',
          bottom: '100px',
          left: '22px',
        }}
      >
        <Card
          variant="outlined"
          style={{
            borderRadius: '25px',
            width: '86%',
            height: '450px',
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
          }}
        >
          {amount ? (
            <div
              style={{ height: '200px', marginTop: '30px', marginLeft: '50px' }}
            >
              QR Code:
              <QRCode
                value="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                logoImage="/citi.jpg"
                logoWidth={40}
                logoHeight={40}
              />
            </div>
          ) : (
            <div
              style={{ height: '200px', marginTop: '30px', marginLeft: '50px' }}
            ></div>
          )}
          <div style={{ margin: '30px 50px 20px 50px' }}>
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-amount">
                Enter Amount:
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                autoFocus
                type="number"
                value={amount}
                onChange={handleChange}
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
