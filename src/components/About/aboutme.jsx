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
                        Hi! My name is Elisa. I'm about to end my training within {' '}
                        <a href="https://www.becode.org/" target="_blank" rel="noopener noreferrer">
                            BeCode
                        </a> {' '} as a full stack web developer in Brussels. 
                    </p>
                    <p className={classes.Journey}>
                        Enthusiastic, I am interested in computer science and more particularly in the construction of websites and applications. 
                        Since the beginning of this training, I have gained experience in various fields:
                    </p>
                    <div className={classes.Journey}>
                        <ul>
                            <li><b>Technologies</b>: HTML5, CSS3, JavaScript, PHP</li>
                            <li><b>Frameworks/Librairies</b>: ReactJS, React Native, Meteor, VueJS, ThreeJS</li>
                            <li><b>Back-end/Services</b>: Firebase, MongoDB, mySQL</li>
                        </ul>
                    </div>
                    <p className={classes.Journey}>
                        As this sector completes my studies, I look forward to gaining more experience in IT.{' '}<br/>
                        I have a preference for React, however I am open to all technologies.
                    </p>
                    <p className={classes.Journey}>
                        I'm currently study and round out my skills to become a fullstack developer, looking for growth opportunities from a remote team-based environment.
                    </p>
                    <p className={classes.Journey}>
                        Would like to know more?
                        <br />
                        Feel free to <Link to="/contact">e-mail</Link> me.
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