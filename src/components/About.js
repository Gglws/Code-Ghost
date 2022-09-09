
import { Link } from 'react-router-dom'
import HeaderMenu from '../robin/HeaderMenu.js'
import './About.css'
import BodyAbout from './BodyAbout.js'
import FooterAbout from './FooterAbout.js'
import HeaderAbout from './HeaderAbout.js'
export default function About() {
    return (

        <div>
            <div className='about-page'>
            <div className='about'>
                    <Header />
                    <HeaderMenu />
                </div>
            </div >
            <HeaderAbout className="hAbout"/>
            <BodyAbout />
            <FooterAbout />
            {/* <PlaceholderSqlBox className=“sqlbox-about-page”/> */}
            {/* <Link to='/' className='nav-btn'>Go to Home BTN</Link> */}
        </div>
    )
  }







