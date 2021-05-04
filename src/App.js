import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./componets/Header";
import FlexSideBar from "./componets/FlexSideBar";
import Main from './componets/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='cont w-auto m-0 p-0'>
        <FlexSideBar />
        <Main />
      </div>
      <footer className='bg-dark text-white'>
        footer
      </footer>
    </div>
  );
}

export default App;
