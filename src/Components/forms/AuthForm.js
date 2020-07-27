import React from 'react'

const AuthForm = ({
  handleSubmit,
  email = '',
  setEmail,
  password = '',
  setPassword,
  loading,
  showPassword = false,
  submitLabel = 'Submit',
  hideEmail = false,
  children
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {
          !hideEmail

            ? <div className="form-group">
              <label htmlFor="email">Enter Email Address</label>
              <input id="email" type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="form-control" />
            </div>
            : ""
        }
        {
          showPassword
            ? <div className="form-group">
              <label htmlFor="pasword">Enter Password</label>
              <input id="password" type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="form-control" />
            </div>
            : ''

        }
        <button disabled={loading || (!hideEmail && !email) || (showPassword && !password)} className="btn btn-outline-success ">
          {!loading ? submitLabel : "Please Wait..."}
        </button>
        {children}
      </form>
    </div>
  )
}

export default AuthForm
