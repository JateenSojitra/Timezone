import React from 'react'
import { SelectPicker } from 'rsuite';

const SelectPickerRsuite = (props) => {

    return (
        <SelectPicker
            placeholder={props.placeholder}
            data={props.data}
            cleanable={props.cleanable}
            onChange={props.onChange}
            value={props.value}
        />
    )
}

export default SelectPickerRsuite