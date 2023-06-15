import './index.scss'
import AnimatedLetters from '../AnimatedLetters';

const About = () => {
    var aboutStr = "About me";
    return(
        <div className='container about-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters strArray={aboutStr.split()}
                    idx={15}
                    />
                </h1>
                <p>I am a developer and designer seeking roles in front-end development, 
                    multimedia development, game development, motion graphics and animation.
                    I would like to put my diverse experience and always growing skill set to use
                    for companies and projects that will delight and please users.
                </p>
                <p>
                    I enjoy growing my knowledge and skill set on a wide variety of projects, 
                    and am a problem solver and planner by nature. 
                </p>
                <p>
                    A little more about me is I am a husband, father, Korean-American, tabletop and
                    video gamer, a good friend, life long learner, storyteller, and a tech enthusiast.
                </p>

            </div>
        </div>
    )
}

export default About;