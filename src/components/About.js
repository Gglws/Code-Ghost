import { Link } from 'react-router-dom'
import Intro from '../robin/Intro.js'

export default function About() {
    return (
        <section>
            <h2>About</h2>
            <Intro />
            <p>about info is here</p>
            <p>about info is here</p>
            <p>about info is here</p>

            <Link to='/' className="nav-btn">Go to Home</Link>
        </section>
    )
  }