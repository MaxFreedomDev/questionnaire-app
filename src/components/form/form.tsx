import React from "react";
import { useForm } from "react-hook-form";
import Button from "../button/button";
import { IInput, IPropsForm } from "../../types/types";

import "./form.css";

const Form = (props: IPropsForm) => {
  const { register, handleSubmit, errors } = useForm<IInput>();
  const onSubmit = handleSubmit(props.submit);
  return (
    <form onSubmit={onSubmit} className="form">
      <div className="form-content">
        <label htmlFor="text">Комментарий</label>
        <textarea
          name="text"
          id="text"
          placeholder="Введите текст..."
          ref={register({ required: true })}
          className={errors.text ? "input_error" : ""}
        />
        <span
          className="form-content__error"
          style={errors.text && { visibility: "visible" }}
        >
          Поле не должно быть пустым
        </span>
      </div>
      <Button type="submit" text="Отправить отзыв" />
    </form>
  );
};

export default Form;
