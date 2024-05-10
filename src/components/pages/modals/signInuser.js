import React, { useState,useEffect } from 'react'
// css
import '../../css/signInModal.css'
// assets
import logo from '../../assets/logoname.png'
import cat from '../../assets/purr-black-friday.png'
// icons
import { GrFormView,GrFormViewHide  } from "react-icons/gr";
// backend
import { insertUser,authenticateUser } from '../backend/database';
// axios
import axios from 'axios';
import Fetchbuyers from '../backend/fetchBuyers';
import SuccessSignup from './successModal';

const Usermodalsign = ({ onOpensignin }) => {
// useState
const [ showPassbtm, setShowbtn ] = useState(false)
const [ typePass, setTypepass ] = useState('password')
// switch btn login
const [ switchSignin, setSwitchsignin ] = useState('login')
// userlist
const [ usersList, setUserslist ] = useState( );
// inputs
// create buyers
const [ createUsername, setCreateusername ] = useState( "" );
const [ createEmail, setCreateemail ] = useState( "" );
const [ createPassword, setCreatepassword ] = useState( "" );
// no input create
const [ nocreateUsername, setnoCreateusername ] = useState( false );
const [ nocreateEmail, setnoCreateemail ] = useState( false );
const [ nocreatePassword, setnoCreatepassword ] = useState( false );
// default placeholder
const [ usernamePlaceholder, setDefaultuserplaceholder ] = useState( "ex. budBoy_Dog" );
const [ emailPlaceholder, setDefaultemailplaceholder ] = useState( "ex. budDog@email.com" );
const [ passwordPlaceholder, setDefaultpasswordplaceholder ] = useState( "password" );

// login account
const [loginUsername, setLoginusername] = useState("")
const [loginpassword, setLoginpassword] = useState("")
// no input login
const [ nologinUsername, setnoLoginusername ] = useState( false );
const [ nologinPassword, setnoLoginpassword ] = useState( false );
// default placeholder login
const [ usernameloginPlaceholder, setDefaultuserloginplaceholder ] = useState( "ex. budBoy_Dog" );
const [ passwordloginPlaceholder, setDefaultpasswordloginplaceholder ] = useState( "password" );

// handling
const [ successCreate, setSuccesscreate ] = useState( false );

// show & hide pass
const passwordSw = () => {
    if (showPassbtm === false) {
        setTypepass('text')
        setShowbtn(true)
    } else {
        setTypepass('password')
        setShowbtn(false)
    }
}

// close signin
const closeModal = () => {
    onOpensignin(false)
}
// switches btn sign in
const loginBtn = () => {
    setSwitchsignin('login')
}
const signBtn = () => {
    setSwitchsignin('signin')
}
const forgotBtn = () => {
    setSwitchsignin('forgot')
}

// handle changes
// create acc
const handleCreateuser = ( event ) => {
    setCreateusername( event.target.value );
};
const handleCreateemail = ( event ) => {
    setCreateemail( event.target.value );
};
const handleCreatepass = ( event ) => {
    setCreatepassword( event.target.value );
};
// login acc
const handleLoginusername = ( event ) => {
    setLoginusername( event.target.value );
};
const handleLoginpassword = ( event ) => {
    setLoginpassword( event.target.value );
};

async function createAccount () {
    if ( createUsername === "" && createPassword === "" && createEmail === "" ) {
      setnoCreateusername( true );
      setnoCreatepassword( true );
      setnoCreateemail( true );
      setDefaultuserplaceholder( "fill username" );
      setDefaultemailplaceholder( "fill email/mobile no" );
      setDefaultpasswordplaceholder( "fill password" );
      console.log( "test1" );
    } else if ( createUsername === "" ) {
      setnoCreateusername( true );
      setnoCreateemail( false );
      setnoCreatepassword( false );
      setDefaultuserplaceholder( "fill username" );
      console.log( "test2" );
    } else if ( createPassword === "" ) {
      setnoCreatepassword( true );
      setnoCreateusername( false );
      setnoCreateemail( false );
      setDefaultpasswordplaceholder( "fill password" );
      console.log( "test3" );
    } else if ( createEmail === "" ) {
      setnoCreatepassword( false );
      setnoCreateemail( true );
      setnoCreateusername( false );
      setDefaultemailplaceholder( "fill email / password" );
      setDefaultpasswordplaceholder( "fill password" );
      console.log( "Test4" );
    } else {
        const customerIDGenerator = (length) => {
        const charset = '1234567890';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            result += charset.charAt(randomIndex);
        }
        return result;
        };
        const customerID = customerIDGenerator(11)
      if ( createEmail.includes( "@", ".com" ) ) {
        if (usersList.type === undefined) {
            const insertdata = {
            customerId: customerID,
            mobileno: "0",
            email: createEmail,
            username: createUsername,
            password: createPassword,
            };
            const jsonData = JSON.stringify( insertdata );
            axios.post( insertUser, jsonData )
            .then( response => {
                console.log( response.data );
                setSuccesscreate( true );
                setTimeout( () => {
                window.location.reload();
                }, 3000 );
            } )
            .catch( response => {
                const errorRec = response.response.data.error
                console.log(errorRec);
            } );
        } else {
            const filterDataemail = usersList.filter( item => item.email === createEmail );
            const filterDatausername = usersList.filter( item => item.username === createUsername );
            if ( filterDatausername[0].username === createUsername) {
                setDefaultuserplaceholder( "username already used" );
                setnoCreateusername( true );
                setnoCreateemail( false );
            }
            else if ( filterDataemail[0].email === createEmail) {
            setDefaultemailplaceholder( "email already used" );
            setnoCreateemail( true );
            setnoCreateusername( false );
            } else {
            // const remove = createEmail.indexOf('@');
            // const userNamedefault = createEmail.substring(0, remove)
            // console.log(userNamedefault);
            const insertdata = {
                customerId: customerID,
                mobileno: "0",
                email: createEmail,
                username: createUsername,
                password: createPassword,
            };
            const jsonData = JSON.stringify( insertdata );
            axios.post( insertUser, jsonData )
                .then( response => {
                console.log( response.data );
                setSuccesscreate( true );
                  setTimeout( () => {
                    window.location.reload();
                  }, 3000 );
                } )
                .catch( response => {
                    const errorRec = response.response.data.error
                    console.log(errorRec);
                } );
            }
        }
      } else if ( /^\d+$/.test( createEmail ) && createEmail.length > 5 ) {
        const filterData = usersList.filter( item => item.mobileno === createEmail );
        if ( filterData.length > 0 ) {
          console.log( "mobile number already in use" );
          setDefaultuserplaceholder( "number already used" );
          setnoCreatepassword( true );
        } else {
          const insertdata = {
            customerId: customerID,
            mobileno: createUsername,
            email: "no email added",
            username: createUsername,
            password: createPassword
          };
          const jsonData = JSON.stringify( insertdata );
          axios.post( insertUser, jsonData )
            .then( response => {
              setTimeout( () => {
                setSuccesscreate( true );
              }, 3000 );
            } )
            .catch( response => {
                const errorRec = response.response.data.error
                console.log(errorRec);
            } );
        }
      } else {
        setDefaultemailplaceholder( "not valid phone and email" );
        setnoCreateemail( true );
      }

    }
}

// login buyer auth
const loginBuyer = () => {
    if (loginUsername === "" && loginpassword === "") {
        setnoLoginpassword(true)
        setnoLoginusername(true)
        setDefaultuserloginplaceholder("fill username")
        setDefaultpasswordloginplaceholder("fill password")
    } else if (loginUsername === "" && loginpassword !== "") {
        setnoLoginusername(true)
        setnoLoginpassword(false)
        setDefaultpasswordloginplaceholder("fill password")
    } else if (loginUsername !== "" && loginpassword === "") {
        setnoLoginusername(false)
        setnoLoginpassword(true)
        setDefaultuserloginplaceholder("fill username")
    } else {
        const loginsessionGenerator = (length) => {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            result += charset.charAt(randomIndex);
        }
        return result;
        };
        
        const newRandomString = loginsessionGenerator(20);
        const loginSession = "pawsome"+newRandomString+"log"
        const insertdata = {
        username: loginUsername,
        email: loginUsername,
        password: loginpassword,
        session: loginSession,
        };
        const jsonData = JSON.stringify( insertdata );
        axios.post( authenticateUser, jsonData )
        .then( (response) => {
            const localsession = insertdata['session']
            localStorage.setItem('loginlocalSession', localsession)
            const logged = usersList.filter( item => item.username === loginUsername)
            const jsonData = JSON.stringify(logged[0])
            localStorage.setItem('currentUser', jsonData)
            localStorage.setItem('logUser', localsession)
            const localsto = localStorage.getItem('loginlocalSession')
            console.log(localsto);
            alert('login successfully welcome user: ' + loginUsername)
            setTimeout( () => {
                window.location.reload();
            }, 3000 );
        })
        .catch( (response) => {
            const errorRec = response.response.data.error
            if (errorRec === "wrong password") {
                setDefaultpasswordloginplaceholder(response.response.data.error)
                console.log(errorRec);
                setnoLoginpassword(true);
                setnoLoginusername(false);
            } else {
                setDefaultuserloginplaceholder(response.response.data.error)
                setnoLoginpassword(false);
                setnoLoginusername(true);
            }
        } );
    }

}

  return (
    <div className="signInmodal">
        <Fetchbuyers onDatafetchbuyers={setUserslist}/>
        <div className="mainSigninModal">
            <div className={`successSignup-acc ${successCreate}`}>
                <div className={`scModal ${successCreate}`}>
                    <SuccessSignup/>
                </div>
            </div>
            <div className="signIn-container">
                <div className="closeModal">
                    <p onClick={closeModal}>x</p>
                </div>
                <div className="signIn-header">
                    <h1>Create</h1>
                    <img src={logo} alt="" />
                    <h2>account</h2>
                    <img src={cat} alt="" id='catModal'/>
                    <h3>make every part of family happy and healthy</h3>
                    <p>by creating pawsome account, you  aggree to our <span> terms & condition</span> and <span>privacy and policy</span></p>
                </div>
                <div className="signIn-contents">
                    <div className="signIn-inputs">
                        <section className={`userLogin ${switchSignin}`}>
                            <h1>Login</h1>
                            <p>username</p>
                            <li>
                                <input type="text" value={loginUsername} placeholder={usernameloginPlaceholder} onChange={handleLoginusername}/>
                            </li>
                            <span className={`errorlogUsername ${nologinUsername}`}>{usernameloginPlaceholder}</span>
                            <p>password</p>
                            <li>
                                <input type={typePass} value={loginpassword} placeholder={passwordloginPlaceholder} onChange={handleLoginpassword}/>
                                {!showPassbtm ? <button onClick={passwordSw}><GrFormView /></button> : <button onClick={passwordSw}><GrFormViewHide GrFormView/></button>}
                            </li>
                            <span className={`errorlogpass ${nologinPassword}`}>{passwordloginPlaceholder}</span>
                            <div className="userModalbtn">
                                <button onClick={loginBuyer}>Login</button>
                            </div>
                            <h3 onClick={forgotBtn}>forgot password?</h3>
                            <div className="switchBtn">
                                <p>don't have pawsome account?</p>
                                <button onClick={signBtn}>create account</button>
                            </div>
                        </section>
                        <section className={`userSignup ${switchSignin}`}>
                            <h1>Sign up</h1>
                            <p>username</p>
                            <li>
                                <input type="text" value={createUsername} placeholder={usernamePlaceholder} onChange={handleCreateuser}/>
                            </li>
                            <span className={`errorSignupusername ${nocreateUsername}`}>{usernamePlaceholder}</span>
                            <p>email or mobile no.</p>
                            <li>
                                <input type="text" value={createEmail} placeholder={emailPlaceholder} onChange={handleCreateemail}/>
                            </li>
                            <span className={`errorSignupemail ${nocreateEmail}`}>{emailPlaceholder}</span>
                            <p>password</p>
                            <li>
                                <input type={typePass} value={createPassword} placeholder={passwordPlaceholder} onChange={handleCreatepass}/>
                                {!showPassbtm ? <button onClick={passwordSw}><GrFormView /></button> : <button onClick={passwordSw}><GrFormViewHide GrFormView/></button>}
                            </li>
                            <div className="userModalbtn">
                                <button onClick={createAccount}>Create</button>
                            </div>
                            <div className="switchBtn">
                                <p>already have pawsome account?</p>
                                <button onClick={loginBtn}>login account</button>
                            </div>
                        </section>
                        <section className={`userForgot ${switchSignin}`}>
                            <h1>forgot</h1>
                            <p>username / email / mobile no.</p>
                            <li>
                                <input type="text" placeholder='ex. budDog@email.com'/>
                            </li>
                            <div className="userModalbtn">
                                <button>search and recover</button>
                            </div>
                            <div className="switchBtn">
                                <p>don't have pawsome account?</p>
                                <button onClick={signBtn}>create account</button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Usermodalsign