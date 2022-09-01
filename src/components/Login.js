import { Link } from 'react-router-dom'
import Form from '../Form.js'

export default function Login() {
    return (
        <section>
            <h2>LOGIN</h2>
            <Form />
            <Link to='/' className="nav-btn">Go to Home</Link>
        </section>
    )
  }
  