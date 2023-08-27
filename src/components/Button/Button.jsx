import React from 'react'
import './Button.scss'

export default function Button({ size = 'm', color = 'colored', onClick, disable,className = '', children }) {
    return (
        <>
            <button className={`${size} ${color} ${disable ? 'disable' : ''} ${className} btn`} onClick={onClick} >{children}</button>
        </>
    )
}