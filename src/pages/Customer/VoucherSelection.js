import React,{useState, useEffect} from 'react';
import { Avatar, Card, CardContent, Typography, Paper } from '@material-ui/core';
import ShoppingCartIcon from '../../assets/ShoppingCartIcon.svg';
import ProfileImage from '../../assets/ProfileImage.png';
import OCK from '../../assets/OCK.png';
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

    function onClickForward() {
        history.push('/customer/confirmation');
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
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', paddingTop:"0px"}}>
                <Card variant="outlined" style={{ borderRadius:'25px', width:'86%', marginTop:'-42px', boxShadow:'2px 2px 2px 1px rgba(0, 0, 0, 0.2)' }}>
                    <CardContent>
                        <p style={{paddingLeft: "70px", margin: "0px"}}>
                            Amount Due
                        </p>
                        <h2 style={{paddingLeft: "65px", margin: "10px"}}>
                            S${trans_obj == undefined ? "" : (trans_obj.originalamount)}
                        </h2>
                        <p style={{paddingTop: "0px"}}>
                            Pick a voucher to redeem 
                        </p>
                        <Card onClick={onClickForward} variant="outlined" style={{ borderRadius:'25px', width:'86%', marginTop:'12px', boxShadow:'2px 2px 2px 1px rgba(0, 0, 0, 0.2)' }}>
                            <CardContent>
                                <div id="container" style={{margin:"0px", whitespace:"nowrap"}}>
                                    <div id="image" style={{display:"inline"}}>
                                        <img src={OCK} style={{width:'30px', height:'30px'}}/>
                                    </div>
                                    <div id="texts" style={{position:"relative", top:"-10px", display:"inline", whitespace:"nowrap;"}}> 
                                        Old Chang Kee
                                    </div>
                                </div>
                                <h2 style={{margin:"0px"}}>$2 off</h2>
                                <p style={{fontSize: "10px", margin:"0px"}}>is expiring in 1 day</p>
                            </CardContent>
                        </Card>
                        <Card onClick={onClickForward} variant="outlined" style={{ borderRadius:'25px', width:'86%', marginTop:'12px', boxShadow:'2px 2px 2px 1px rgba(0, 0, 0, 0.2)' }}>
                            <CardContent>
                                <div id="container" style={{margin:"0px", whitespace:"nowrap"}}>
                                    <div id="image" style={{display:"inline"}}>
                                        <img src={OCK} style={{width:'30px', height:'30px'}}/>
                                    </div>
                                    <div id="texts" style={{position:"relative", top:"-10px", display:"inline", whitespace:"nowrap;"}}> 
                                        Old Chang Kee
                                    </div>
                                </div>
                                <h2 style={{margin:"0px"}}> $5 off</h2>
                                <p style={{fontSize: "10px", margin:"0px"}}>is expiring in 5 day</p>
                            </CardContent>
                        </Card>
                        
                    </CardContent>
                </Card></div>
        </div>
    );
}