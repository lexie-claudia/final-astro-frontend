import React from 'react'

const Button = (props) => {
    return (
        <a 
        href={props.link}
        style={ {"width": props.width,'margin':'8px'} } 
        className={'btn ' + props.classColor}>{props.children}</a>
    )
}

export default Button
