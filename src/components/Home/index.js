import { useEffect, useState } from 'react';
import LogoR from '../../assets/images/rLogo-part.png';
import LogoK from '../../assets/images/kLogo-part.png';
import AnimatedLetters from '../AnimatedLetters';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './index.scss';

const Home = () => {
    const[letterClass,setLetterClass] = useState('text-animate');
    const firstNameArray = "andy".split('');
    const lastNameArray = "insley".split('');
    const jobArray = "developer &".split(''); 
    const jobArray2 = "designer".split(''); 

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, []);

    console.log(letterClass)
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _11`}>i,</span>
                <span className={`${letterClass} _11`}>{' '}</span>
                <span className={`${letterClass} _13`}> I</span>
                 <span className={`${letterClass} _14`}>'m</span><br />
                <img className="imgR" src={LogoR} alt="developer" />
                <AnimatedLetters letterClass={letterClass} 
                strArray={firstNameArray}
                idx={15}/><img className="imgK" src={LogoK} alt="developer" />
                <AnimatedLetters letterClass={letterClass} 
                strArray={lastNameArray}
                idx={16}/>
                <br />
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray}
                idx={3}/>
                 <br />
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray2}
                idx={4}/>
                 </h1>
                 <h2>front-end - web - game - multimedia</h2>
                 <button className="flat-button"><a href="mailto:rkinsley147@gmail.com">CONTACT ME</a></button>
            </div>
            <Logo />
        </div>
    );
};

export default Home;