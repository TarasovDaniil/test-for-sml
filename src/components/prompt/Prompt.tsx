import React, {useEffect, useState} from 'react';
import './Prompt.scss';
import Close from "../icons/Close";
import Info from "../icons/Info";

interface IPromptProps {
    text: string
}

const Prompt : React.FC<IPromptProps> = (props) => {

    const [show, setShow] = useState(false);
    const [click, setClick] = useState(false);
    const [icon, setIcon] = useState(<Info/>);

    useEffect(() => {
        if(click){
            setIcon(<Close />);
        }else{
            setIcon(<Info />);
        }
    }, [click]);

    const triggerShow = (isShow : boolean) => {
        if(click){
            setShow(true);
        }else{
            setShow(isShow);
        }
    };

    return(
        <div className="form-prompt">
            <div className="area-icons"
                 onClick={() => setClick(!click)}
                 onMouseEnter={() => triggerShow(true)}
                 onMouseLeave={() => triggerShow(false)}>{icon}</div>
            { show &&
                <div className="area-prompt">
                    {props.text}
                </div>
            }
        </div>
    );
};

export default Prompt;