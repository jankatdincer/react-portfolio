import { faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() =>{
        return setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 3000 )
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A','b','o','u','t',' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                    Aenean ac arcu nec tortor mollis blandit quis ut enim. Mauris et hendrerit leo. Sed sed justo auctor, cursus erat ac, fermentum dui. Etiam consequat elit turpis, vitae semper lectus scelerisque vitae. Mauris dapibus mollis aliquet. Pellentesque in dapibus lacus. Sed tempor ex interdum, elementum diam non, sollicitudin arcu. Vestibulum turpis nibh, lacinia nec quam vel, luctus rhoncus velit. Proin molestie diam eu mi lobortis euismod. Quisque dapibus quam vitae leo dignissim vulputate. Proin facilisis, dolor ut egestas vehicula, risus lacus convallis elit, luctus lobortis nisi urna ac turpis. Aliquam sit amet odio sit amet ante condimentum cursus eget id eros. Phasellus fermentum nisl et massa consectetur, auctor tempus justo tempor. Morbi pretium accumsan venenatis.
                    </p>
                    <p>
                    Suspendisse potenti. Donec feugiat porta est ut posuere. In hac habitasse platea dictumst. Duis hendrerit id urna sed lobortis. Vestibulum sit amet suscipit orci, ac accumsan ante. Pellentesque id rhoncus dolor. Morbi arcu ligula, convallis sit amet pretium id, interdum et sem. Morbi et dui ac ipsum efficitur gravida vel ac sapien. Sed in sollicitudin nunc. Nulla vestibulum diam est, eget consectetur velit elementum sed.
                    </p>
                    <p>
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum eleifend quam in sem tristique, at ornare lacus scelerisque. Etiam non quam dolor. Mauris ipsum sapien, iaculis vel rhoncus sit amet, venenatis sit amet sem. Ut nec ullamcorper urna, vel pellentesque justo. Pellentesque ac tortor porttitor elit mollis posuere. Sed scelerisque ullamcorper tincidunt. Donec venenatis eleifend orci non dictum. Vestibulum in odio auctor, lobortis nisl ut, tristique neque.
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faJava} color="#f89820" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
        )
}

export default About