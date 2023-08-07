"use client";

import React, { useRef } from 'react' // useRef useState
import Form from 'react-bootstrap/Form';

const LoginPage = () => {
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username:userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/profile"
    })
  }
  return (
    <div className='container my-5'>
      <h2 className='py-3'>LoginPage</h2> 
      
      {/* <TextBox labelText="User Name" 
        onChange={(e) => (userName.current = e.target.value)}  />

      <TextBox labelText="Password"  type="password" 
        onChange={(e) => (pass.current = e.target.value)}  /> */}

      {/* <Button onClick={onSubmit}>Login</Button> */}
        <form>
          <div className='row'>
              <div className='col-md-6'>
                <div className="input-group mb-3">
                  {/* <span className="input-group-text" id="basic-addon1">@</span> */}
                  <input type="text" className="form-control" placeholder="Username"
                    onChange={(e) => (userName.current = e.target.value)}  
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="input-group mb-3">
                  {/* <span className="input-group-text" id="basic-addon1">@</span> */}
                  <input type="password" className="form-control"
                    onChange={(e) => (pass.current = e.target.value)}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-secondary" onClick={onSubmit}>Submit</button>
              {/* <div className='col-md-6'>
              </div> */}
          </div>
        </form>
    </div>
  );
}

export default LoginPage