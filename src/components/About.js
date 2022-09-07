import { Link } from 'react-router-dom'
// import PlaceholderSqlBox from '../PlaceholderSqlBox.js'
import Header from '../robin/Header.js'
import HeaderMenu from '../robin/HeaderMenu.js'
import './About.css'
import BodyAbout from './BodyAbout.js'
import HeaderAbout from './HeaderAbout.js'

export default function About() {
    return (
        <div>
            <div className="about-page">
                <div className="about">
                    {/* <Header /> */}
                    <HeaderMenu />
                </div>
            </div>
            <HeaderAbout />
            <BodyAbout />
            {/* <PlaceholderSqlBox className="sqlbox-about-page"/> */}
            <Link to='/' className="nav-btn">Go to Home BTN</Link>

        </div>
    )
  }