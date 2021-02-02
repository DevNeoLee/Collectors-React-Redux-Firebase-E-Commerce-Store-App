
import React, { Component } from 'react'
import MenuItem from '../menu-item/menu-item';
import directoryStyle from './directory.module.scss'

class Directory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sections: [
                {
                    title: 'movie',
                    imageUrl: '',
                    id: 1,
                    linkUrl: 'shop/movie'
                },
                {
                    title: 'animation',
                    imageUrl: '',
                    id: 2,
                    linkUrl: 'shop/animation'
                },
                {
                    title: 'tv-series',
                    imageUrl: '',
                    id: 3,
                    linkUrl: 'shop/tv-series'
                },
                {
                    title: 'sports-art',
                    imageUrl: '',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/sports-art'
                },
                {
                    title: 'rare-collectors',
                    imageUrl: '',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/rare-collectors'
                }       
            ]
        }
    }

    render() {
        return (
            <div className={directoryStyle.directory}>
                 {this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} className={directoryStyle.directory}/>
                ))}
            </div>
        )
    }
}

export default Directory
