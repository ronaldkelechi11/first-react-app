import Navbar from '../components/navbar'
import About from '../components/home'
import Portfolio from '../components/portfolio'
import Services from "../components/services";


function App() {
  let Component;
  let pathname = window.location.pathname

  switch (pathname) {
    case "/home":
      Component = About;
      break
    case "/services":
      Component = Services
      break
    case "/portfolio":
      Component = Portfolio
      break
    default:
      Component = About
  }
  return (
    <>
      <Navbar param={pathname} />
      <Component />
    </>
  )
}

export default App
