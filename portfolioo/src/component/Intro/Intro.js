import React from 'react';
import './intro.css';
import myy from '../../asset/myy.jpg';

const Intro = () => {
    return (
        <section id="intro">
            <div className='introContent'>
                <span className="hello">Hello</span> 
                <span className="introText">I am <span className='introName'>Betelhem</span><br />Software engineer</span>
                <p className='introPara'>I am a 4th-year Software engineering student at Addis Ababa University (AAiT Campus)</p> 
            </div>
            <img src={myy} alt='profile' className='myy' />
        </section>
    );
}

export default Intro;