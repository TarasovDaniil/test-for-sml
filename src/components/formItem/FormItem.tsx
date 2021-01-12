import React from 'react';
import './FormItem.scss';

interface IFormItemProps extends React.HTMLAttributes<HTMLDivElement>{
    title?: string | undefined
}

const FormItem : React.FC<IFormItemProps> = (props) => {

    return(
        <div className="form-item">
            {props.title && <small>{props.title}</small>}
            <div className="form-item__children">
                {props.children}
            </div>
        </div>
    );
};

export default FormItem;