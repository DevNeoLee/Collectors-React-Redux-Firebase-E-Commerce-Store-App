
import React from 'react';
import CategorypageStyles from './categorypage.module.scss';

import CategoryItem from '../../components/categoryItem/categoryItem';

export default function Categorypage() {
    return (
        <div className={CategorypageStyles.Categorypage}>
            <CategoryItem />
        </div>
    )
}
