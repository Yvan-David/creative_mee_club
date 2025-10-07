import NavBar from './components/nav'
import Collaborate from './components/collaborate'
import Introduction from './components/Introduction'
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
