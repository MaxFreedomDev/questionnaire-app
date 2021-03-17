import React from 'react';
import {IButtonProps} from "../../types/types";

import "./button.css";

const Button = (props: IButtonProps) => {
    const {type, callback, text, styles} = props;
    return (
        <button onClick={callback} className={styles ? styles : "button"} type={type} >
            {text}
        </button>
    );
};

export default Button;