import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './componets/main';
import SideBar from './componets/sideBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        header
      </header>
      <div className='cont w-auto m-0 p-0'>
        <SideBar />
        <Main />
      </div>
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
