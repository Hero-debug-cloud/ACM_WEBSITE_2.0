import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import All from './pages/All/All';
import Home from './components/Home/Home';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import Events from './pages/Events/Events';
import Projects from './pages/Projects/Projects';
import Teams from './pages/Teams/Teams';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<All />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/teams" element={<Teams />} /> 
        </Route>
      

        {/* invalid url entered by the enivroment; */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
