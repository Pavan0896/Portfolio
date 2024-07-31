import { Box } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import ScrollToTopButton from './Components/ScrollToTopButton';


const App = () => {
  return (
    <Box>
      <Navbar />
      <Box as="main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ScrollToTopButton />
      </Box>
    </Box>
  );
};

export default App;

