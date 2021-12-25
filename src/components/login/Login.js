import React from 'react'
import './login.css'

function Login() {
    return (
        <div>
             <div className="col-md-12">
      <div className="card card-container mt-5" id='Card'>
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <form >
          <div className="form-group mt-2">
            <label className='Email'>Email</label>
            <input
              type="text"
              className="form-control"
              name="username"
             
            />
          </div>

          <div className="form-group mt-2">
            <label className='Email'>Password</label>
            <input
              type="password"
              className="form-control"
            
            
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block mt-3" id='Login'>
             
              Login
            </button>
          </div>

        
        </form>
      </div>
    </div>
  


        </div>
    )
}

export default Login
