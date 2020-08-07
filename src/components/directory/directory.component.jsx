import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../redux/shop/shop.selectors';

import './directory.styles.scss';

const Directory = ({ sections }) => (
        <div className='directory-menu'>
            {sections.map(({ id, ...otherProps }) => (
                <MenuItem key={id} {...otherProps} />
                )) 
            }
        </div>
    )


const mapStateToProps = createStructuredSelector({
    sections: selectSections
})

export default connect(mapStateToProps)(Directory);