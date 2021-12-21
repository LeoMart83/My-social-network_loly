import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Friends from './components/Friends/Friends';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Navbar />
        <div className='wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/messages/*' element={<MessagesContainer />}  />
            <Route path='/friends' element={<Friends />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
