import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Paper,
} from '@material-ui/core';
import ShoppingCartIcon from '../../assets/ShoppingCartIcon.svg';
import ProfileImage from '../../assets/ProfileImage.png';
import OCK from '../../assets/OCK.png';
import arrow from '../../assets/arrow.png';
import { getTransactionDetails, getVoucherDetails } from '../../API/api.js';
import { useHistory, useParams } from 'react-router-dom';

export default function CustomerHome() {
  const [trans_obj, set_trans_obj] = useState();
  const [voucher, setVoucher] = useState();
  const history = useHistory();
  const { transactionId, voucherId } = useParams();

  useEffect(() => {
    if (transactionId != undefined) {
      getTransactionDetails(transactionId, set_trans_obj);
    }
  }, [transactionId]);

  useEffect(() => {
    if (voucherId != undefined) {
      getVoucherDetails(voucherId).then((v) => {
        setVoucher(v);
      });
    }
  }, [voucherId]);

  function onClickForward() {
    history.push(`/customer/paymentcomplete/${transactionId}`);
  }

  function onClickBack() {
    history.push(`/customer/voucherselection/${transactionId}`);
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
            <div
              id="container"
              onClick={onClickBack}
              style={{ margin: '0px', whitespace: 'nowrap' }}
            >
              <div id="image" style={{ display: 'inline' }}>
                <img src={arrow} style={{ width: '30px', height: '30px' }} />
              </div>
              <div
                id="texts"
                style={{
                  position: 'relative',
                  top: '-10px',
                  display: 'inline',
                  whitespace: 'nowrap',
                  color: '#003b70',
                }}
              >
                Back
              </div>
            </div>
            <p style={{ marginTop: '40px', margin: '2px' }}>Pay From:</p>
            <div style={{ overflow: 'hidden' }}>
              <h4 style={{ float: 'left', margin: '2px' }}>CitiPay Wallet </h4>
              <p style={{ float: 'right', margin: '2px' }}>
                S${trans_obj == undefined ? '' : trans_obj.originalamount}
              </p>
            </div>
            <p style={{ margin: '2px', fontSize: '15px' }}>
              Current Balance S$100.00
            </p>
            <p style={{ paddingTop: '30px', margin: '2px' }}>Voucher</p>
            <div style={{ overflow: 'hidden' }}>
              <h4 style={{ float: 'left', margin: '2px' }}>
                {voucher != undefined
                  ? voucher.merchantname + ' ' + voucher.name
                  : ''}{' '}
              </h4>
              <p style={{ float: 'right', margin: '2px' }}>
                -S${trans_obj == undefined ? '' : trans_obj.vouchervalue}
              </p>
            </div>
            <div style={{ paddingTop: '30px', overflow: 'hidden' }}>
              <p style={{ float: 'left', margin: '2px' }}>Total Amount: </p>
              <p style={{ float: 'right', margin: '2px' }}>
                S${trans_obj == undefined ? '' : trans_obj.finalamount}
              </p>
            </div>
            <button
              style={{
                position: 'relative',
                top: '20px',
                left: '100px',
                backgroundColor: '#003B70',
                color: '#FFFFFF',
                borderRadius: '8px',
              }}
              onClick={onClickForward}
            >
              Pay
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}