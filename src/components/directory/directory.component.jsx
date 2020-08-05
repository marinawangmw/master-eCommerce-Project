import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';

import './directory.styles.scss';

const Directory = ({ collections }) => (
        <div className='directory-menu'>
            {collections.map(({ id, ...otherProps }) => (
                <MenuItem key={id} {...otherProps} />
                )) 
            }
        </div>
    )


const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(Directory);