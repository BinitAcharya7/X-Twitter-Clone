import './App.css';
import Feed from './components/Feed';
import News from './components/News';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <Sidebar />

      <Feed />

      <News />
    </div>
  );
}

export default App;
