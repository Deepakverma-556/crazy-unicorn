import './App.css';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Roadmap from './components/Roadmap';
import Team from './components/Team';

function App() {
  return (
    <>
      <Hero />
      <OurStory />
      <Roadmap />
      <Team />
      <Faq />
      <Footer/>
    </>
  );
}

export default App;
