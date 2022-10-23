import { catMediumLogo } from '../assets/images'
import { Link } from 'react-router-dom'

const LogIn = () => {
  return (
    <main id="login-page">
      <div class="login-container">
        <section class="login-logo-container">
          <Link to="/">
            <img src={catMediumLogo} alt="cat logo" />
          </Link>
        </section>
        <section class="form-panel">
          <h1>Log in to Marcel</h1>
          <form action="/login" method="POST">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                name="email"
                placeholder="Email"
                type="text"
                id="email"
                aria-describedby="emailHelp"
                required
                autofocus
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                name="password"
                placeholder="Password"
                type="password"
                id="password"
                required
              />
            </div>
            <button type="submit">Log In</button>
          </form>
          <p>
            New to Marcel?{' '}
            <Link to="/signup" class="">
              Sign up
            </Link>
          </p>
        </section>
      </div>
    </main>
  )
}

export default LogIn
