import React from 'react'
import { ThemeToggle } from '../components/ui/ThemeToggle'
import { StarBackground } from '../components/ui/StarBackground'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutAection'
import { SkillsSection } from '../components/SkillsSection'
import { ProjectsSection } from '../components/Projects'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen'>
    {/* theme toggle */}
<ThemeToggle/>
    {/* Background Effects */}
<StarBackground/>
    {/* navBar */}
<Navbar/>
    {/* Main Content */}
<main className='w-full'>
  <HeroSection/>
  <AboutSection/>
  
  <ProjectsSection/>
  <SkillsSection/>
  <ContactSection/>
  <Footer/>
</main>
    {/* Footer */}

    </div>
  )
}

export default Home
