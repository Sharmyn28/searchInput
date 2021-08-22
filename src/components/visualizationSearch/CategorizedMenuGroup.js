import React, { useState } from 'react'
import PropTypes from 'prop-types'
import i18n from '@dhis2/d2-i18n'
import { MenuItem, Divider } from '@dhis2/ui'
import { useConfig } from '@dhis2/app-runtime'

import HeaderMenuItem from './HeaderMenuItem'
import ContentMenuItem from './ContentMenuItem'
//import { getItemUrl } from './itemTypes'

import classes from './styles/CategorizedMenuGroup.module.css'

const CategorizedMenuGroup = ({
    type,
    title,
    items,
    hasMore,
    onChangeItemsLimit,
}) => {
    const { baseUrl } = useConfig()
    const [seeMore, setSeeMore] = useState(false)

    const addItem = item => () => {
        console.log('ADD ITEM', {item})
    }

    const toggleSeeMore = () => {
        setSeeMore(!seeMore)
        onChangeItemsLimit(type)
    }

    return (
        <>
            {/*<HeaderMenuItem title={title} />*/}
            {items.map(item => {
                //const itemUrl = getItemUrl(type, item, baseUrl)
                return (
                    <ContentMenuItem
                        key={item.id || item.key}
                        type={item.type}
                        name={item.displayName || item.name}
                        onInsert={addItem(item)}
                        //url={itemUrl}
                        valid={item.valid}
                    />
                )
            })}
            {hasMore ? (
                <MenuItem
                    dense
                    key={`showmore${title}`}
                    onClick={toggleSeeMore}
                    label={
                        <button className={classes.showMoreButton}>
                            {seeMore
                                ? i18n.t('Show fewer')
                                : i18n.t('Show more')}
                        </button>
                    }
                />
            ) : null}
        </>
    )
}

CategorizedMenuGroup.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    //type: PropTypes.oneOf(categorizedItems).isRequired,
    hasMore: PropTypes.bool,
    tAddListItemContent: PropTypes.func,
}

export default CategorizedMenuGroup