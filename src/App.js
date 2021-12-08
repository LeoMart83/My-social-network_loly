import './App.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Friends from './components/Friends/Friends';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { addPost } from './redux/state';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Navbar />
        <div className='wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile state={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />} />
            <Route path='/messages/*' element={<Messages state={props.state.messagesPage} />}  />
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
