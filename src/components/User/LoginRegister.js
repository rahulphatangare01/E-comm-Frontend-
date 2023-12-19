import React, { Fragment, useRef, useState } from 'react';
import './LoginRegister.css';
import Loader from '../Layout/Loader/Loader';
import { Link } from 'react-router-dom';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
const LoginRegister = ()=>{

     const loginTab = useRef(null);
     const RegisterTab = useRef(null);
     const switcherTab = useRef(null);

     const [loginEmail, setLoginEmail] = useState('');
     const [loginPassword, setLoginPassword] = useState('')

const loginSubmit =()=>{
        console.log('hello')
}

     const switchTabs =(e, tab)=>{

        if(tab === 'login'){

            switcherTab.current.classList.add('shiftToNeutral');
            switcherTab.current.classList.remove('shiftToRight');
    
            RegisterTab.current.classList.remove('shiftToNeutralForm');
            loginTab.current.classList.remove('shiftToLeft');
        }
        if(tab === 'register'){
            switcherTab.current.classList.add('shiftToRight');
            switcherTab.current.classList.remove('shiftToNeutral');
    
            RegisterTab.current.classList.add('shiftToNeutralForm');
            loginTab.current.classList.add('shiftToLeft');

        }
     }



    return (

        <Fragment>

        <div className='LoginSignUpContainer'>
        <div className='LoginSignUpBox'>
            <div>
                <div className='login_signup_toggle'>
                    <p onClick={(e)=> switchTabs(e,'login')}>LOGIN </p>
                    <p onClick={(e)=> switchTabs(e,'register')}>REGISTER </p>
                </div>
                <button ref={switcherTab} ></button>
            </div>
            
            <form className='loginForm' ref={loginTab} onSubmit={loginSubmit}>
            <div className='loginEmail'>
            <MailOutlineOutlinedIcon/>
            <input  
                type='email'
                placeholder='Email'
                required
                value={loginEmail}
                onChange={(e)=> setLoginEmail(e.target.value)}
            />
            </div>
            <div className='loginPassword'>
            <LockOpenOutlinedIcon/>
            <input 
                type='password'
                placeholder='Password'
                required
                value={loginPassword}
                onChange={(e)=> setLoginPassword(e.target.value)}
            />
            </div>
            <Link to='/password/forgot' > Forgot Password ?</Link>
            <input  type='submit' value='login' className='loginBtn' />
            </form>

           

        </div>
        </div>

        </Fragment>
    )

}
 export default LoginRegister