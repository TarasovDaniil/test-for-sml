import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import './Form.scss';

interface IFormProps extends React.HTMLAttributes<HTMLFormElement>{
    actions?: (reset : () => void) => React.ReactNode
}

const Form : React.FC<IFormProps & InjectedFormProps<{}, IFormProps>> = (props) => {

    const {handleSubmit, reset} = props;

    return(
        <form onSubmit={handleSubmit}>
            {props.children}
            <div className="form-actions">
                {props.actions !== undefined && props.actions(reset)}
            </div>
        </form>
    );
};

const ReduxForm = reduxForm<{}, IFormProps>({
    form: 'simple'
})(Form);

export default ReduxForm;