import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import SingleNews from './components/SingleNews';
import Home from './home/Home';
import Error from './home/Error';
import Headlines from './components/Headlines';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/single-news-source/:source_id' element={<SingleNews />} />
    <Route exact path='/top-news-headlines' element={<Headlines />} />
    <Route path="*" element={<Error />} />
    </Routes>
    </div>
  );
}

export default App;
