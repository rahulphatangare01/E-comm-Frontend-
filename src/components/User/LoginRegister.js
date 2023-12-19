import React, { Fragment, useRef, useState } from 'react';
import './LoginRegister.css';
import Loader from '../Layout/Loader/Loader';
import { Link } from 'react-router-dom';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import profileImage from '../../Assets/images/Profile.png'
const LoginRegister = ()=>{

     const loginTab = useRef(null);
     const RegisterTab = useRef(null);
     const switcherTab = useRef(null);

     const [loginEmail, setLoginEmail] = useState('');
     const [loginPassword, setLoginPassword] = useState('')

     const [user, setUser] = useState({
        name:'',
        email:'',
        password:''
     });

     const {name, email,password} = user;

     const [avatar,setAvatar ] =useState()
     const [avatarPreview, setAvatarPreview] = useState(profileImage)

const loginSubmit =()=>{
        console.log('login form submit')
}

const RegisterSubmit =(e)=>{
        e.preventDefault();
        const myForm = new FormData()
        
        myForm.set('name',name)
        myForm.set('email',email)
        myForm.set('password',password)
        myForm.set('avatar',avatar)
        console.log('register form submit')  
}

const registerDataChange =(e)=>{
    if(e.target.name ===  'avatar'  ){
        const reader = new FileReader();

        reader.onload = () =>{
            if(reader.readyState === 2){
            setAvatarPreview(reader.result);
            setAvatar(reader.result)
        }
    }
       reader.readAsDataURL(e.target.files[0])
    } else{
        setUser({...user, [e.target.name]: e.target.value})
    }
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

            <form
            className='signupForm'
            ref={RegisterTab}
            encType='multipart/form-data'
            onSubmit={RegisterSubmit}
            >
            <div
            className='signUpName' >
            <FaceOutlinedIcon/>
            <input
                type='text'
                placeholder='Name'
                required
                name='name'
                value={name}
                onChange={registerDataChange}
            />
            </div>
            <div className='signupEmail'>
            <MailOutlineOutlinedIcon/>
            <input  
                type='email'
                placeholder='Email'
                required
                name='email'
                value={email}
                onChange={registerDataChange}
            />
            </div>
            <div className='signUpPassword'>
            <LockOpenOutlinedIcon/>
            <input 
                type='password'
                placeholder='Password'
                required
                name='password'
                value={password}
                onChange={registerDataChange}
            />
            </div>
            <div id='registerImage'>
                <img src={avatarPreview} alt='avatar preview ' />
                <input
                    type='file'
                    name='avatar'
                    accept='image/*'
                    onChange={registerDataChange}
                />
            </div>
            <input
                type='submit'
                value='Register'
                className='signupBtn'
                // disabled={loading ? true : false}
            />



            </form>

        </div>
        </div>

        </Fragment>
    )

}
 export default LoginRegister