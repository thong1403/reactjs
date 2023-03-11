import './App.css';
import TopContent from './components/conten-top/TopContent';
import Content from './components/content/Content';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TopContent/>
      <Content/>
    </div>
  );
}

export default App;
