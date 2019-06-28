import React from 'react'
import Header from '../UI/Header/Header'
import classes from './About.module.scss'
import { Link } from 'react-router-dom'


const About = () => {
    return (
            <div className={classes.About}>
                <div className={classes.TextArea}>
                    <Header text="About me" />
					<p className={classes.Journey}>
                        Hi there! My name is Elisa and I'm about to end my training within {' '}
                        <a href="https://www.becode.org/" target="_blank" rel="noopener noreferrer">
                            BeCode
                        </a> {' '} as a full stack web developer in Brussels. 
                        Since the beginning of this training, I have gained various skills. I have a preference for ReactJS, however I'm open to all technologies.
                    </p>
                    <p className={classes.Journey}>
                        As much as I love to do {' '}
                        <a href="https://www.facebook.com/CrossFitExit8/" target="_blank" rel="noopener noreferrer">
                            Crossfit
                        </a> {' '} in my spare hours, I love to connect to people by coding. I do have the ambition to deliver excellent work, a strong work ethic and the willingness to constantly learn and grow.
                    </p>
                    <div className={classes.Journey}>
                        My aspiration is to learn to create great applications that are simple, functional, beautiful and fun to work with. Together in an uplifting team of developers.
                    </div>
                    <p className={classes.Journey}>
                        My values are about respect, caring and service. I value differences and openness. 
                    </p>
                    <p className={classes.Journey}>
                        I'm more for collaboration than competition, except when it is used as a constructive and stimulating way. I believe anybody can learn, grow and reach their dreams. I'm optimistic and am cultivating gratitude on a daily basis. I love to challenge myself, exercise courage and discipline.
                    </p>
                    <p className={classes.Journey}> 
                        If you’d like to learn more, feel free to <Link to="/contact">contact</Link> me <br/>about anything on this website that sparks your interest! 
                    </p>
                </div>
                <div className={classes.ImageArea}>
					<img className={classes.profilIcon} src="/assets/img/perso/elisa.JPG" alt="Profil Icon"/>
					<img className={classes.qrCodeMobile} src="/assets/img/perso/QR_CV.png" alt="qr-code" />
					Check more!
                </div>
            </div>
    )
}

export default About