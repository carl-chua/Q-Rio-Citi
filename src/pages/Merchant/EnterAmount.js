import React from 'react';
import { useState } from 'react';
import { QRCode } from 'react-qrcode-logo';

import Grid from '@material-ui/core/Grid';
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
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={10}>
        <QRCode
          value="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          logoImage="/citi.jpg"
          logoWidth={40}
          logoHeight={40}
        />
      </Grid>
      <Grid item xs={10} style={{ marginTop: '30px' }}>
        <FormControl fullWidth>
          <InputLabel htmlFor="standard-adornment-amount">
            Enter Amount:
          </InputLabel>
          <Input
            id="standard-adornment-amount"
            value={amount}
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                <b>S$</b>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}
