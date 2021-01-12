import React from 'react';

const Input : React.FC = (props : any) => {

    return(
        <div className="form-input__input">
            <input type="number" {...props.input} placeholder={props.placeholder}/>
            <span dangerouslySetInnerHTML={{__html: props.after}}/>
        </div>
    );
};

export default Input;