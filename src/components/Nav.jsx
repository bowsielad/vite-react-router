import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <nav className="main-navigation">
      <NavLink
        to="/vite-basic-with-routing/"
        className={({ isActive }) => {
          return isActive ? "nav-active" : ""
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/vite-basic-with-routing/profiles"
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
