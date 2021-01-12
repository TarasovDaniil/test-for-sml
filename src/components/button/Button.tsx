import React from 'react';
import './Button.scss';

export enum ButtonState{
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface IButtonProps {
    text: string,
    type: "button" | "submit" | "reset" | undefined,
    disabled?: boolean
    onClick?: () => void
    mode: ButtonState
}

const Button : React.FC<IButtonProps> = (props) => {

    return(
        <button type={props.type} className={"form-button" + (" " + props.mode)} disabled={props.disabled || false} onClick={props.onClick}>{props.text}</button>
    );
};

export default Button;