import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./componets/Header";
import FlexSideBar from "./componets/FlexSideBar";
import Main from './componets/Main';
import Footer from "./componets/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className='cont w-auto m-0 p-0'>
                <FlexSideBar/>
                <Main/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
