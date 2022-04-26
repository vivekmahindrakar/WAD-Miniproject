import logo from './logo.svg';
import './App.css';
import bgimage from './desktopbg.jpg';
import Timer from './components/Timer/Timer'
import Intro from './components/Intro/Intro'
// import Typewriter from 'typewriter-effect';

function App() {
  
  
  return (
    <div className="App">
      <div className='cool-bg-img' id='typewriter'>
      <img src={bgimage} alt="alt" className='App-bg'/>
      </div>
      
      <Timer />
      <Intro />
    </div>
  );
}

export default App;
