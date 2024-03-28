import Header from './components/header/header';
import './App.css';
import TopContainer from './components/topcontainer/topcontainer';
import Skills from './components/skillcontainer/skillcontainer';
import About from './components/about/about';
import Project from './components/project/project';
import Contact from './components/contact/contact';
function App() {
  return (
    <div className="App">
      <Header />
       <TopContainer />
      <About />
      <Skills /> 
      <Project />
      <Contact /> 
    </div>
  );
}

export default App;
