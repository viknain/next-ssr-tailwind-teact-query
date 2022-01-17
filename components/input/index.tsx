import * as React from 'react'
import styles from './input.module.scss'

type Props = {
    type: string
    value: string
    placeholder: string
    onChange?: () => void
}

const SLButton: React.FC<Props> = ({
    type,
    value,
    placeholder,
    onChange
}) => {
    return (
        <input type={type} value={value} placeholder={placeholder} onChange={onChange} />
    )
}

export default SLButton
