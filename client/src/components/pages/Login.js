import React from 'react';

export default function Login() {
  return (
    <div>
      <h2>Login Form</h2>
      <div>
        <form action="/action_page.php" method="post"/>
          <div class="container">
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required/>
    
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
            
            <button type="submit">Login</button>
            <label>
            <input type="checkbox" checked="checked" name="remember"/> Remember me
            </label>
          </div>
    
          {/* <div class="container" style="background-color:#f1f1f1">
            <span class="psw">Forgot <a href="#">password?</a></span>
          </div> */}
      </div>
    </div>
  );
}
