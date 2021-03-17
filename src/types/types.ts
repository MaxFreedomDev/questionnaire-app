import {Dispatch, SetStateAction} from "react";

export interface IModal {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
    setRestartApp: Dispatch<SetStateAction<boolean>>;
}

export interface StepTypes {
    id: number,
    title: string,
    text: string,
    btn_name: string,
    rating: boolean
}

export interface IButtonProps {
    type?: "button" | "submit" | "reset" | undefined,
    styles?: string,
    text: string | number,
    callback?: () => void
}

export interface IInput {
    text: string;
}


export interface IPropsForm {
    submit: (comment: string, id: number) => void;
    id: number
}

export interface IScores {
    callback: (rate: number) => void;
}

export type GlobalContent = {
    steps: Array<StepTypes>
    scores:Array<number>
}
