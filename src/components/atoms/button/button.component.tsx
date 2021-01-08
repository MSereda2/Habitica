import React from 'react';
import  './button.scss';
import classNames from 'classnames';

type Props = {
    text: string,
    size: 'sm',
    isIcon?: boolean,
    type: 'primary'
    disabled?: boolean
    
}


const Button: React.FC<Props> = (props) => {
    const {text, size, isIcon, type, disabled} = props;

    const style = classNames({
        'btn': true,
        'sm': size === 'sm',
        'btn_primary': type === 'primary',
    })

    return(
        <button className={style} disabled={disabled}>      
            {text}
        </button>
    )
}

export { Button }