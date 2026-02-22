import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import SkillsSection from "../components/SkillsSection"
import ProjectsSection from "../components/ProjectsSection"
import ExperienceSection from "../components/ExperienceSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import EducationSection from "../components/EducationSection"
import CertificationSection from "../components/CertificationSection"

function Index() {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection/>
      <SkillsSection />
      <CertificationSection/>
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Index