import { useEffect, useState } from 'react';
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {

    const[letterClass,setLetterClass] = useState('text-animate');

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    var aboutStr = "About me";
    return(
        <>
        <div className='container about-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={aboutStr.split('')}
                    idx={15}
                    />
                </h1>
                <p>I'm a developer and designer seeking a role in front-end development, multimedia development, 
                    game development, motion graphics, or animation. I want to leverage my diverse experience and 
                    always-growing skill set for companies and projects that captivate users.
                </p>
                <p>
                    I find joy in growing my knowledge and skill set on a wide variety of projects, 
                    and am a problem solver and planner by nature. 
                </p>
                <p>
                    More about me is I am a husband, father, Korean-American, tabletop and
                    video gamer, a good friend, life long learner, storyteller, and a tech enthusiast.
                </p>

            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div class="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div class="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div class="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div class="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div class="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div class="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About;