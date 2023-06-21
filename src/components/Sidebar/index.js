import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/rklogo-s.png'
import LogoSubtitle from '../../assets/images/randylogo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faHome, faUser, faSuitcase} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'



const Sidebar = () => 
(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="slobodan" /> 
        </Link>
    <nav>
    <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color='4d4d4e' />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color='4d4d4e' />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
        <FontAwesomeIcon icon={faSuitcase} color='4d4d4e' />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color='4d4d4e' />
    </NavLink>
    </nav>
    <ul>
        <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/randy-kinsley-35553b31/'>
                <FontAwesomeIcon icon={faLinkedin} className='fa-xl' color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/Ronin147'>
                <FontAwesomeIcon icon={faGithub} className='fa-xl' color="#4d4d4e" />
            </a>
        </li>
    </ul>
    </div>
)

export default Sidebar 