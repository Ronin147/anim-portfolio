import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/rklogo-s.png'
import LogoSubtitle from '../../assets/images/randylogo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faHome, faUser, faSuitcase, faBars, faClose} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'


const Sidebar = () =>  {
const[showNav, setShowNav] = useState(false);

return    (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="slobodan" /> 
        </Link>
    <nav className={showNav ? 'mobile-show':''}>
    <NavLink onClick={()=> setShowNav(false)} exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} />
    </NavLink>
    <NavLink onClick={()=> setShowNav(false)} exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} />
    </NavLink>
    <NavLink onClick={()=> setShowNav(false)} exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
        <FontAwesomeIcon icon={faSuitcase} />
    </NavLink>
    <NavLink onClick={()=> setShowNav(false)} exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} />
    </NavLink>
    <FontAwesomeIcon onClick={()=> setShowNav(false)} icon={faClose} size='3x' className='close-icon' />
    </nav>
    <ul>
        <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/randy-kinsley-35553b31/'>
                <FontAwesomeIcon icon={faLinkedin} className='fa-xl' color="#b7b7b7" />
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/Ronin147'>
                <FontAwesomeIcon icon={faGithub} className='fa-xl' color="#b7b7b7" />
            </a>
        </li>
    </ul>
    <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} size='3x' color="#F5D061" className='hamburger-icon' />
    </div>
)
}

export default Sidebar 