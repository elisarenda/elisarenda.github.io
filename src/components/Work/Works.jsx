import React from 'react'
import ShowCase from './ShowCase/ShowCase'
import classes from './Works.module.scss'

const works = () => {
    return (
        <div className={classes.Works}>
            <div className={classes.TextArea} />
            <div className={classes.Projects}>
                <ShowCase />
            </div>
        </div>
    )
}

export default works
