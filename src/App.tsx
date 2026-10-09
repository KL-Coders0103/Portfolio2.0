import { Navbar } from './components/navigation/Navbar'

import { Hero } from './sections/Hero/Hero'
import { Philosophy } from './sections/Philosophy/Philosophy'
import { Metrics } from './sections/Metrics/Metrics'
import { FeaturedWork } from './sections/FeaturedWork/FeaturedWork'
import { CaseStudy } from './sections/CaseStudy/CaseStudy'

import { useCaseStudy } from './hooks/useCaseStudy'
import { TechStack } from './sections/TechStack/TechStack'
import { Lab } from './sections/Lab/Lab'
import { Experience } from './sections/Experience/Experience'
import { About } from './sections/About/About'
import { Resume } from './sections/Resume/Resume'
import { Contact } from './sections/Contact/Contact'
import { Footer } from './sections/Footer/Footer'
import { CommandPaletteController } from './sections/Command/CommandPaletteController'

function App() {
  const {
    data: caseStudy,
    isCaseStudy,
  } = useCaseStudy()

  return (
    <div id="top">
      <Navbar />

      <main>
        {isCaseStudy && caseStudy ? (
          <CaseStudy data={caseStudy} />
        ) : (
          <>
            <Hero />

            <Philosophy />

            <Metrics />

            <FeaturedWork />

            <TechStack />

            <Experience />

            <About />

            <Resume />

            <Lab />

            <Contact />

            <Footer />
          </>
        )}
      </main>

      <CommandPaletteController />
    </div>
  )
}

export default App