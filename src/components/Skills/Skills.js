import React from 'react';
import classes from './Skills.module.scss';
import TagCanvas from '../UI/TagCanvas/TagCanvas';
import { Link } from 'react-router-dom';

const skills = () => {
    return (
            <div className={classes.Skills}>
                <div className={classes.TextArea}>

                    <p className={classes.Journey}>
                        Main area of my expertise is front end development and everything related with web development.
                        HTML, CSS, JS (ES5, ES6), building small & medium Web Apps, Angular, React.
                    </p>
                    <p className={classes.Journey}>
                        Often I work as a full-stack developer - mainly in Java or Node with framework like Spring,
                        Express...
                    </p>

                    <p className={classes.Journey}>
                        I have also some experience working with databases like PostgreSQL, MongoBD or GraphQL.
                    </p>

                    <p className={classes.Journey}>
                        Would like to know more?
                        <br />
                        Please just <Link to="/contact">contact</Link> me.
                    </p>
                </div>

                <div className={classes.SkillChart}>
                    <TagCanvas />
                </div>
            </div>
    );
};

export default skills;
