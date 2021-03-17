import React, { useState } from "react";
import { ReactComponent as Close } from "../../img/close.svg";
import RateLogo from "../../img/imageRate.svg";
import { data } from "../../store/store";
import { IProps, StepTypes } from "../../types/types";
import Form from "../form/form";
import Button from "../button/button";
import Scores from "../scores/scores";

import "./modal.css";

const Modal: React.FC<IProps> = ({ active, setActive }) => {
  const [step, setStep] = useState<Number>(0);
  const currentStep = data.steps.find((el) => el.id === step);

  const stepRender = (step: StepTypes) => {
    const { id, title, text, btn_name, rating } = step;
    return (
      <>
        <Close
          onClick={() => setActive(false)}
          className="modal-content__close"
        />
        {id === 0 ? (
          <img src={RateLogo} alt={"logo"} className="modal-content__img" />
        ) : null}
        <div className="modal-content__body">
          <h2>{title}</h2>
          <p style={id === 3 ? { maxWidth: 370 } : {}}>{text}</p>
          {rating ? <Scores callback={() => setStep(id + 1)} /> : null}
          {id === 2 ? <Form submit={() => setStep(id + 1)} /> : null}
          {id === 0 ? (
            <Button text={btn_name} callback={() => setStep(id + 1)} />
          ) : null}
        </div>
      </>
    );
  };

  return (
    <div className={active ? "modal active" : "modal"}>
      <div className={active ? "modal-content active" : "modal-content"}>
        {currentStep && stepRender(currentStep)}
      </div>
    </div>
  );
};

export default Modal;
