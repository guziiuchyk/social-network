import './sideBar.css'
import {NavLink} from "react-router-dom";

const SideBar = () => {
    return (
        <nav className='sideBar'>
            <ul className='sideBar__list'>
                <li className='sideBar__list__item'><NavLink to='/profile'>Profile</NavLink></li>
                <li className='sideBar__list__item'><NavLink to='/dialogs'>Messages</NavLink></li>
                <li className='sideBar__list__item'><NavLink to='/news'>News</NavLink></li>
                <li className='sideBar__list__item'><NavLink to='/music'>Music</NavLink></li>
                <li className='sideBar__list__item'><NavLink to='/settings'>Settings</NavLink></li>
            </ul>
        </nav>
    )
}
export default SideBar;