import * as React from 'react'
import styles from './button.module.scss'

type Props = {
    type: "button" | "submit" | "reset"
    placeholder: string
    onClick?: () => void
}

const SLInput: React.FC<Props> = ({
    type,
    onClick,
    children
}) => {
    return (
        <button onClick={onClick} type={type} >{children}</button>
    )
}

export default SLInput
