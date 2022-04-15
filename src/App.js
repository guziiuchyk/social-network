import './App.css';
import Header from './components/generalComponents/header/header';
import Profile from './components/contentComponents/profile/profile';
import SideBar from './components/generalComponents/sideBar/sideBar';
import Dialogs from "./components/contentComponents/dialogs/dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Music from "./components/contentComponents/music/music";
import News from "./components/contentComponents/news/news";
import Settings from "./components/contentComponents/settings/settings";

function App() {
    return (
    <BrowserRouter>
        <div className='Wrapper'>
            <Header/>
            <SideBar/>
            <div className='content'>
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dialogs/*" element={<Dialogs />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </div>
    </BrowserRouter>
    )
}


export default App;
