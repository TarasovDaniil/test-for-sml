import React from 'react';
import Prompt from "../prompt/Prompt";


const Radio : React.FC = (props : any) => {
    return(
        <React.Fragment>
        <div className="form-input__radio">
            <label><input type="radio" {...props.input}/><span/>{props.label}</label>
            { props.prompt &&
            <div style={{marginLeft: 8, display: 'inline-block'}}>
                <Prompt text={props.prompt}/>
            </div>}
        </div>
        </React.Fragment>
    );
};

export default Radio;