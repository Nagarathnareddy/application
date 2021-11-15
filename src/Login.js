import React, { Component } from 'react'
import User from './User';

export default class Login extends Component {
   constructor(props) {
       super(props)
       this.userID=React.createRef();
       this.psw=React.createRef();
   
       this.state = {
           userDetails:'',
           userPassword:'',
           response:[],
           login:false
            
       }
   }
   loginDetails = async()=>
   {
       let json;
       let dataToSend = new FormData()
       dataToSend.append("registeredEmail",this.userID.current.value)
       dataToSend.append("registeredPassword",this.psw.current.value)
       dataToSend.append("funcName","verifyLogin")
       
       let response =await fetch("https://pulse.brninfotech.com/pulse/modules/admin/ValidateLogin.php",
       {
           method:'POST',
           body:dataToSend
       }
       )
       console.log(response)
       json =await response.json()
       console.log(json);
      (json.loggedIn=="no")?(alert(json.msg)):(this.setState({login:true,userDetails:json}))
   }
   
    render() {
        return (
            (this.state.login)?(<User user={this.state.userDetails}/>):
           ( <div>
     <h1 className="head">Sign-In</h1>
      <div className="div" >
      <input className="first" type="text" placeholder="Email" ref={this.userID}/>
      <br/>
      <br/>
      <input className="second" type="password" placeholder="Password" ref={this.psw}/>
      <br/>
      <br/>
      <button className="btn" onClick={this.loginDetails}>Login</button>
      <br/>
      <br/>
      <input type="checkbox"/>
      <label>Remember</label>
      <link/>
      <br/> 
      <br/>
      <span className="psw"><a href="#">Forgot Password?</a></span>
      </div>
            </div>)
        )
    }
}
