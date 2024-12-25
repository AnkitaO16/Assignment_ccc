import logo from './logo.svg';
import './App.css';
import WeatherWidget from './components/WeatherWidget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard</h1>
      </header>
      <main>
        <WeatherWidget />
      </main>
    </div>
  );
}

export default App;
