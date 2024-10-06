import PreLoader from "./components/PreLoader";
import Button from "./components/Button";
import Header from "./components/SlideTabs";
import Hero from "./pages/Hero";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Projects2 from "./pages/Projects2";
import Features from "./pages/Features";
import HeroScroll from "./pages/HeroScroll";
import Grid from "./pages/Grid";
import Experience from "./pages/experience";

const App = () => {

  return (
   <>
    <Header />
    <div className='span-y snap-mandory overflow-scroll z-0 snap-center'>
      <Hero />
    </div>
    <HeroScroll />
    <Work />
    <Button />
    <Projects />
    <Projects2 />
    <Features />
    <Grid />
   </> 
  );
}

export default App
