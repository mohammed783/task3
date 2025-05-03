import './App.css'
import Top_banners from './components/Top Banners/top_banners'
//import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/Hero'
import FAQAccordion from './components/FAQ/Faq'
import BenefitsSection from './components/Our/our'
import Testimonials from './components/Testimonials/Testimonials'
import PagesSection from './components/our pages/our pages'
import Navbar2 from './components/Nav2/Nav2'
import Footeer from './components/Footer/Footer'
function App() {
    return (
    <>
    <Top_banners />
    <Navbar2 />
    {/* <Navbar /> */}
    <Hero />
    <BenefitsSection />
    < Testimonials />
    <FAQAccordion />
    <PagesSection />
      <Footeer />
    </>
  )
}

export default App
