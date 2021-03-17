import {Dispatch, SetStateAction} from "react";

export interface IProps {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
}

export interface StepTypes {
    id: number,
    title: String,
    text: String,
    btn_name: String,
    rating: Boolean
}

export interface IButtonProps {
    type?: "button" | "submit" | "reset" | undefined,
    styles?: string,
    text: String | Number,
    callback?: () => void
}

export interface IInput {
    text: string;
}

export interface IPropsForm {
    submit: () => void
}

export interface IScores {
    callback: () => void;
}
