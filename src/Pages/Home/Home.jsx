import Hero from "../../components/Hero/Hero" ; 
import BenefitsSection from "../../components/Our/our";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQAccordion from "../../components/FAQ/Faq";
import PagesSection from "../../components/our pages/our pages";
import './Home.css'
export default function Home() {
  return (
    <>
     <Hero></Hero>
     <BenefitsSection></BenefitsSection>
     <Testimonials></Testimonials>
     <FAQAccordion></FAQAccordion>
     <PagesSection></PagesSection> 
    </>
  )
}
