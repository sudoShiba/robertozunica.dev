import Footer from "./components/Footer.tsx"
import Hero from "./components/Hero.tsx"
import SocialLinks from "./components/SocialLinks.tsx"

import "./App.css"

const App = () => {

  return (
    <>
      <header>
        <Hero />
        <SocialLinks />
      </header>
      <Footer />
    </>
  )
}

export default App
