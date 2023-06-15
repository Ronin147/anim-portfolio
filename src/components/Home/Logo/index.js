import './index.scss';
import LogoS from '../../../assets/images/rklogo-s.png';
import {useEffect, useRef} from 'react';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial';

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const outline2LogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin);
    
        gsap
          .timeline()
          .to(bgRef.current, {
            duration: 1,
            opacity: 1
          })
          /*
          .from(outlineLogoRef.current,
            {
            drawSVG: 0,
            duration: 10,
          })
         */
    
        gsap.fromTo(
          solidLogoRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 4,
            duration: 4,
          }
        )
      }, [])

    return(
        <div className='logo-container' ref={bgRef}>
        {/*<img className='solid-logo' src={LogoS} alt='RK' ref={solidLogoRef} />*/}
                <svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 377.15 350.76">
            <g className='svg-container'>
                <path ref={outlineLogoRef} d="m2,2h95.37c18.02,0,34.38,1.54,49.06,4.63,14.68,3.09,27.2,8.22,37.55,15.39,10.35,7.18,18.31,16.52,23.91,28.04,5.59,11.51,8.39,25.62,8.39,42.3,0,12.02-1.75,22.7-5.26,32.04-3.5,9.35-8.43,17.4-14.77,24.16-6.34,6.76-13.89,12.23-22.65,16.4-8.76,4.17-18.32,7.09-28.66,8.76,8.01,1.67,15.35,6.22,22.03,13.64,6.67,7.43,13.35,18.15,20.03,32.17l52.32,109.64h-72.34l-46.06-105.14c-4.34-10.01-10.39-17.56-18.15-22.65-7.76-5.09-16.9-7.63-27.41-7.63h-11.77v135.43H2v-183.49h87.75c9.64,0,18.4-1,26.27-3,7.87-2,14.59-5.01,20.18-9.01,5.58-4.01,9.9-8.97,12.94-14.89,3.05-5.92,4.57-12.72,4.57-20.4,0-16.02-5.16-27.54-15.48-34.54-10.32-7.01-25.8-10.51-46.45-10.51H2" fill='none' strokeWidth={'4px'}/>
                <path ref={outline2LogoRef} d="m298.92,21.59h74.35l-111.14,155.95,106.9,171.22h-79.6l-94.38-168.23L298.92,21.59Z" fill='none' strokeWidth={'4px'}/>
            </g>
        </svg>
        </div>
    )
};

export default Logo;