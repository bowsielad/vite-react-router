import { DataProvider } from "./context/DataContext"
import { Outlet } from "react-router-dom"

import Nav from "./components/Nav"

function App() {
  return (
    <>
      <DataProvider>
        <h1>Vite with Basic Routing</h1>
        <Nav />
        <Outlet />
      </DataProvider>
    </>
  )
}

export default App
