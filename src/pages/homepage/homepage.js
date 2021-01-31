
import React from 'react';
import homepageStyles from './homepage.module.scss';
import Directory from '../../components/directory/directory';
import Slider from '../../components/slider/slider';

export default function Homepage() {
    return (
        <div className={homepageStyles.homepage}>
            <Slider />
            <Directory />

        </div>
    )
}
