import './App.css';
import Header from './components/generalComponents/header/header';
import Profile from './components/contentComponents/profile/profile';
import SideBar from './components/generalComponents/sideBar/sideBar';
import Dialogs from "./components/contentComponents/dialogs/dialogs";
import {Routes, Route } from "react-router-dom";
import Music from "./components/contentComponents/music/music";
import News from "./components/contentComponents/news/news";
import Settings from "./components/contentComponents/settings/settings";

function App(props) {
    return (

        <div className='Wrapper'>
            <Header/>
            <SideBar/>
            <div className='content'>
                <Routes>
                    <Route path="/profile" element={<Profile dispatch={props.dispatch} profilePage={props.data.profilePage}  />} />
                    <Route path="/dialogs/*" element={<Dialogs dispatch={props.dispatch} dialogsPage={props.data.dialogsPage}  />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </div>
    )
}


export default App;
