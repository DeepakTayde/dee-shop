import './App.css';
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        <h2>This is the main page</h2>
      </main>
      <footer>
        <h3>This is the footer</h3>
      </footer>
    </div>
  );
}

export default App;
