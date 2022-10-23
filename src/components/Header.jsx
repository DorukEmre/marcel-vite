// import { Link } from 'react-router-dom'

const Header = () => {
  const userLoggedIn = false
  const logInAndSignUp = false

  return (
    <header>
      {logInAndSignUp ? (
        <></>
      ) : (
        <nav className="header-navbar">
          {userLoggedIn ? (
            <></>
          ) : (
            <ul className="header-list new-session">
              <li className="header-item login">
                <a href="/login">Log in</a>
              </li>
              <li className="header-item signup">
                <a href="/signup">Sign up</a>
              </li>
            </ul>
          )}
        </nav>
      )}
    </header>
  )
}

export default Header
