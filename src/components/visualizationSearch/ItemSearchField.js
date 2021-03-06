import React from 'react'
import PropTypes from 'prop-types'
import i18n from '@dhis2/d2-i18n'
import { InputField } from '@dhis2/ui'

const ItemSearchField = props => (
    <InputField
        name="Dashboard item search"
        label={i18n.t('Search for visualizations to add')}
        type="text"
        onChange={props.onChange}
        onFocus={props.onFocus}
        value={props.value}
        dataTest="item-search"
        inputWidth="400px"
    />
)

ItemSearchField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
}

export default ItemSearchField