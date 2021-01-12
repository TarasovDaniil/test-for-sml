import React from 'react';

const Switch : React.FC = (props : any) => {
    return (
        <div className="form-input__switch">
            <label>
                <input type="checkbox" {...props.input}/>
                <div className="area-switch">
                    {props.leftText && <span className="switch-text switch-left">{props.leftText}</span>}
                    <span className="slider round"/>
                    {props.rightText && <span className="switch-text switch-right">{props.rightText}</span>}
                </div>
            </label>
        </div>
    );
};

export default Switch;