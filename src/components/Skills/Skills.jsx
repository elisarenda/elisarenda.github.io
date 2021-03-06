import React from 'react'
import classes from './Skills.module.scss'
import TagCanvas from '../UI/TagCanvas/TagCanvas'
import { Link } from 'react-router-dom'
import Header from '../UI/Header/Header'

const skills = () => {
    return (
            <div className={classes.Skills}>
                <div className={classes.TextArea}>
				<Header text="Skills / Experiences" />
                    <p className={classes.Journey}>
                    Main area of my expertise is front end development and everything related with web development. HTML, CSS, JS (ES5, ES6), building small & medium Web Apps, React.
                    </p>
                    <p className={classes.Journey}>
                        I work most of the time as a full stack developer - mainly in Javascript with frameworks like ReactJS or VueJS.
                    </p>

                    <p className={classes.Journey}>
                        I have also some experience working with databases like mySQL or Firebase.
                    </p>

                    <p className={classes.Journey}>
                        Would like to know more?
                        <br />
                        <Link to="/contact">Contact</Link> me.
                    </p>
                </div>

                <div className={classes.SkillChart}>
                    <TagCanvas />
                </div>
            </div>
    )
}

export default skills
