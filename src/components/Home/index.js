import LogoR from '../../assets/images/rLogo-part.png';
import LogoK from '../../assets/images/kLogo-part.png';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img className="imgR" src={LogoR} alt="developer" />
                andy<img className="imgK" src={LogoK} alt="developer" />insley
                <br />
                developer & designer
                 </h1>
                 <h2>front-end - web - game - multimedia</h2>
                 <Link to='/contact' className="flat-button">CONTACT ME</Link>
                </div>
        </div>
    );
};

export default Home;