import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Nav2/Nav2'
import '../About us/Aboutus.css'
import '../../components/Welcome/Welcome'
import Welcome from '../../components/Welcome/Welcome'
import AwardsSlider from '../../components/Awards/Awards'
import HistoryTimeline from '../../components/History/History'
import TeamMembers from '../../components/Members/Members'

export default function Aboutus() {
  return (
    <>

      <Navbar></Navbar>
    <Welcome></Welcome>
    <AwardsSlider />
    <HistoryTimeline />
    <TeamMembers />
      <Footer></Footer>
    </>
  )
}
