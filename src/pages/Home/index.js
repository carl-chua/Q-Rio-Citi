import React from 'react';
import { Button, Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom';

export default function Home() {
    const history = useHistory();

    function onClickCustomer() {
        history.push('/customer');
    }

    function onClickMerchant() {
        history.push('/merchant');
    }

    function onClickPayment() {
        history.push('/customer/paymentcomplete');
    }

    return (
        <div className="Home">
            <div style={{ display:'flex', flexDirection:'column' }}>
                <Grid container justifyContent='center' alignItems='center'>
                    <Grid xs={12} style={{ marginBottom: '20px', marginTop:'80px' }}>
                        <Button style={{ width:'80%', height:'50px' }} variant="contained" onClick={onClickCustomer}>Customer</Button>
                    </Grid>
                    <Grid xs={12}>
                        <Button style={{ width:'80%', height:'50px' }} variant="contained" onClick={onClickMerchant}>Merchant</Button>
                    </Grid>
                    <Grid xs={12}>
                        <Button style={{ width:'80%', height:'50px' }} variant="contained" onClick={onClickPayment}>PaymentComplete</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}