import React from 'react'
//import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import HeaderMenuItem from './HeaderMenuItem'
import ContentMenuItem from './ContentMenuItem'
//import { acAddDashboardItem } from '../../../actions/editDashboard'

const SinglesMenuGroup = ({ category }) => {
    const addToDashboard = () => () => {
        //acAddDashboardItem({ type, content })
        console.log({item})
    }

    return (
        <>
            <HeaderMenuItem title={category.header} />
            {category.items.map(item => (
                <ContentMenuItem
                    key={item.type}
                    type={item.type}
                    name={item.name}
                    onInsert={addToDashboard(item)}
                    valid={item.valid}
                />
            ))}
        </>
    )
}

SinglesMenuGroup.propTypes = {
    //acAddDashboardItem: PropTypes.func,
    category: PropTypes.object,
}

export default SinglesMenuGroup