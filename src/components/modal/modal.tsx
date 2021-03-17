import React, { useState } from "react";
import { ReactComponent as Close } from "../../img/close.svg";
import RateLogo from "../../img/imageRate.svg";
import { data } from "../../store/store";
import { IModal, StepTypes } from "../../types/types";
import Form from "../form/form";
import Button from "../button/button";
import Scores from "../scores/scores";

import "./modal.css";

const Modal: React.FC<IModal> = ({ active, setActive }) => {
  const [result, setResult] = useState({
    rate: 0,
    comment: "",
  });
  const [step, setStep] = useState<number>(0);
  const currentStep = data.steps.find((el) => el.id === step);

  const getScore = (rate: number) => {
    setStep(step + 1);
    setResult({ ...result, rate });
  };

  const closeModal = (id: number) => {
    if (id === 2) {
      return setStep(id + 1);
    }
    if (id === 3) {
      setActive(false);
      console.log(result);
    }
    setActive(false);
  };

  const getComment = (comment: string, id: number) => {
    setResult({ ...result, comment });
    setStep(id + 1);
  };

  const stepRender = (step: StepTypes) => {
    const { id, title, text, btn_name, rating } = step;
    return (
      <>
        <Close
          onClick={() => closeModal(id)}
          className="modal-content__close"
        />
        {id === 0 ? (
          <img src={RateLogo} alt={"logo"} className="modal-content__img" />
        ) : null}
        <div className="modal-content__body">
          <h2>{title}</h2>
          <p style={id === 3 ? { maxWidth: 370 } : {}}>{text}</p>
          {rating ? <Scores callback={getScore} /> : null}
          {id === 2 ? <Form submit={getComment} id={id} /> : null}
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
