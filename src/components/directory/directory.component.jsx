import React from 'react';

import SHOP_DATA from '../../shop.data';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const { collections } = this.state;
        return(
            <div className='directory-menu'>
                {collections.map(({ id, ...otherProps }) => (
                    <MenuItem key={id} {...otherProps} />
                    )) 
                }
            </div>
        )
    }
}

export default Directory;