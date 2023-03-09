import React from 'react';

export default function Login() {
  return (
    <div className="container text-center m-5-auto">
      <h2>Login Form</h2>
      <h3>Resume Your Hero Journey</h3>
            <form>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required />
                </p>
            <button type="submit">Login</button>
            </form>
            <label>
            <input type="checkbox" checked="checked" name="remember"/> Remember me
            </label>
          {/* <div class="container" style="background-color:#f1f1f1">
            <span class="psw">Forgot <a href="#">password?</a></span>
          </div> */}  
          </div>
    
          
  );
}
