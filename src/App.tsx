import Footer from "./components/Footer.tsx"
import Hero from "./components/Hero.tsx"
import SocialLinks from "./components/SocialLinks.tsx"
import Story from "./components/Story.tsx"

import "./App.css"

const App = () => {

  return (
    <>
      <header>
        <Hero />
        <SocialLinks />
      </header>
      <main>
        <Story />
      </main>
      <Footer />
    </>
  )
}

export default App
