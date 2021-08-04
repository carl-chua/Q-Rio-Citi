import React,{useState, useEffect} from 'react';
import { Avatar, Card, CardContent, Typography, Paper } from '@material-ui/core';
import ShoppingCartIcon from '../../assets/ShoppingCartIcon.svg';
import ProfileImage from '../../assets/ProfileImage.png';
import OCK from '../../assets/OCK.png';
import arrow from '../../assets/arrow.png';
import {getTransactionDetails} from '../../API/api.js'
import { useHistory } from 'react-router-dom';

export default function CustomerHome() {
    const [trans_obj, set_trans_obj] = useState();
    const history = useHistory();
    useEffect(()=>{
        getTransactionDetails("XEUTMdEIqeQ9STWRt1Rr").then((transaction)=>{
            set_trans_obj(transaction);
        })
    },[])

    function onClickHome() {
        history.push('/home');
    }

    function onClickBack() {
        history.push('/customer/voucherselection');
    }

    return (
        <div>
            <div className='BlueRibbon' style={{ display:'flex', flexDirection:'column', backgroundColor: '#003B70', borderRadius:'50px', marginTop:'-50px', paddingBottom:'60px' }}>
                <div className='ShoppingCartAndAvatar' style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <div className='ShoppingCart' style={{ paddingTop:'90px', paddingLeft:'20px' }}>
                        <img src={ShoppingCartIcon} alt='' />
                    </div>
                    <div className='Avatar' style={{ paddingTop:'82px', paddingRight:'8px' }}>
                        <Avatar src={ProfileImage} alt='' style={{ width:'70px', height:'70px' }} />
                    </div>
                </div>
                <div className='WelcomeText' style={{ marginLeft:'60px' }}>
                    <h3 style={{ margin: 0, lineHeight: 0.8, color:'white' }}></h3>
                    <h3 style={{ margin: 0, color:'white'}}></h3>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', paddingTop:"20px"}}>
                <Card variant="outlined" style={{ borderRadius:'25px', width:'86%', marginTop:'-42px', boxShadow:'2px 2px 2px 1px rgba(0, 0, 0, 0.2)' }}>
                    <CardContent>
                        <div id="container" onClick={onClickBack} style={{margin:"0px", whitespace:"nowrap"}}>
                                    <div id="image" style={{display:"inline"}}>
                                        <img src={arrow} style={{width:'30px', height:'30px'}}/>
                                    </div>
                                    <div id="texts" style={{position:"relative", top:"-10px", display:"inline", whitespace:"nowrap", color:"#003b70"}}>
                                       Back
                                    </div>
                        </div>
                        <p>
                            Pay From:
                        </p>
                        <p>
                            CitiPay Wallet                
                        </p>
                        <p>
                            S${trans_obj == undefined ? "" : (trans_obj.originalamount)}
                        </p>
                        <p>
                            Current Balance S$100.00
                        </p>
                        <p> 
                            Voucher
                        </p>
                        <h3>
                            Old Chang Kee $4 Off          
                        </h3>
                        <p>
                            -S${trans_obj == undefined ? "" : (trans_obj.vouchervalue)}
                        </p>
                        <p>
                            Total Amount:
                        </p>
                        <p>
                            S${trans_obj == undefined ? "" : (trans_obj.finalamount)}
                        </p>
                    </CardContent>
                </Card></div>
        </div>
    );
}