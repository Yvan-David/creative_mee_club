// import { Header } from "./components/header"
// import { Home } from "./components/home"
// import { Missions } from "./components/mission"
// import { Services } from "./components/service"
import NavBar from './components/nav'
import Collaborate from './components/collaborate'

import AppFooter from './components/footer'
import Introduction from './components/Introduction'
// import Building from './components/built'
// import Reason from './components/why'
import Testimonies from './components/loved'
function Home() {
  return <>
  <NavBar></NavBar>
  <Introduction></Introduction>
  <Collaborate></Collaborate>
  {/* <Building></Building> */}
  {/* <Reason></Reason> */}
  <Testimonies></Testimonies>
  {/* <AppFooter/> */}
  </>
}

export default Home
