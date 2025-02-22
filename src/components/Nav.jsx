import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <nav className="main-navigation">
      <NavLink
        to="/vite-react-router/"
        className={({ isActive }) => {
          return isActive ? "nav-active" : ""
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/vite-react-router/profiles"
        className={({ isActive }) => {
          return isActive ? "nav-active" : ""
        }}
      >
        Profiles
      </NavLink>
    </nav>
  )
}

export default Nav
