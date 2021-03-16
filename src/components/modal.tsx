import React, {Dispatch, SetStateAction} from 'react';
import './modal.css';

interface IProps {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
}


const Modal: React.FC<IProps> = ({ active, setActive, children }) => {
    return (
        <div className={active ? "modal active" : "modal"}>
            <div className={active ? "modal__content active" : "modal__content"}>
                <button onClick={() => setActive(false)}>X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;