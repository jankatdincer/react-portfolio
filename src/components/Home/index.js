import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import {Link} from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [ 'a', 'n', 'k', 'a', 't',' ', 'D', 'i', 'n', 'ç', 'e', 'r']
    const jobArray = ['s', 'e', 'n', 'i', 'o', 'r',' ', 'c','o','m','p','u','t','e','r',' ','s','c','i','e','n','c','e',' ','s','t','u','d','e','n','t','.']


    useEffect(() =>{
        return setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 4000 )
    }, [])

    return(
        <>
            
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                    Hello, 
                    <br/> 
                    I'm 
                    <img src={LogoTitle} alt="developer"/>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                    />
                    <br/>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}
                    />
                    </h1>

                    <h2>
                        Intern at BIS Cozum
                    </h2>
                    <Link to="/contact" className='flat-button'>Contact Me</Link>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    );
}

export default Home