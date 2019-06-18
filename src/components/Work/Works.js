import React from 'react';
import ShowCase from './ShowCase/ShowCase';
import { Link } from 'react-router-dom';
import classes from './Works.module.scss';

const works = () => {
    return (
        <div className={classes.Works}>
                {/* <Header text="Work" /> */}
            <div className={classes.TextArea} />
            <div className={classes.Projects}>
                <ShowCase />
            </div>
        </div>
    );
};

export default works;
