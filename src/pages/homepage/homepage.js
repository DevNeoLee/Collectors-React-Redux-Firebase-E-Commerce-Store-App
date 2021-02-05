
import React, { useEffect } from 'react';
import { withRouter } from "react-router-dom";

import homepageStyles from './homepage.module.scss';
import Collections from '../../components/collections/collections';
import Slider from '../../components/slider/slider';


const Homepage = ({ history }) => {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, []);
    
    return (
        <div className={homepageStyles.homepage}>
            <Slider />
            <div className={homepageStyles.collectionContainer}><Collections /></div>
        </div>
    );    
}


export default withRouter(Homepage);

// class Homepage extends Component {
//     constructor(props) {
//         super(props);
//     }
// 	componentDidUpdate(prevProps) {
// 		if (this.props.location !== prevProps.location) {
// 			window.scrollTo(0, 0);
// 		}
//     }
//     render() {
//           return (
//         <div className={homepageStyles.homepage}>
//             <Slider />
//             <div className={homepageStyles.collectionContainer}><Collections /></div>
//         </div>
//     );
//     } 
// }

// export default withRouter(Homepage);
