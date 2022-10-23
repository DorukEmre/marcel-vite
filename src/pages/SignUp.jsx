import { catMediumLogo } from '../assets/images'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <main id="signup-page">
      <div class="signup-container">
        <section class="signup-logo-container">
          <Link to="/">
            <img src={catMediumLogo} alt="cat logo" />
          </Link>
        </section>
        <section class="form-panel">
          <h1>Sign Up to Marcel</h1>
          <form action="/signup" method="POST">
            <div class="form-group">
              <label for="userName">Username (public)</label>
              <input
                type="text"
                id="userName"
                name="userName"
                placeholder="Username"
                required
                autofocus
              />
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                aria-describedby="emailHelp"
                required
                autofocus
              />
              <small id="emailHelp" class="">
                We will never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div class="form-group">
              <label for="confirmPassword">Confirm password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account?{' '}
            <Link to="/login" class="">
              Log in
            </Link>
          </p>
        </section>
      </div>
    </main>
  )
}

export default SignUp
