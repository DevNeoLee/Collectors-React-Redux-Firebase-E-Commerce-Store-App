
import React from 'react'
import homepageStyles from './homepage.module.scss'
import Directory from '../../components/directory/directory'

export default function Homepage() {
    return (
        <div className={homepageStyles.homepage}>
            <p>homepage</p>
            <Directory />
        </div>
    )
}
