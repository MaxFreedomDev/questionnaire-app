import React from "react";
import { IScores } from "../../types/types";
import Button from "../button/button";
import {useGlobalContext} from "../app-context/app-context";

import "./scores.css";


const Scores = ({ callback }: IScores) => {
  const { scores } = useGlobalContext();
  return (
    <div className="scores">
      {scores.map((score) => (
        <Button
          text={score}
          callback={() => callback(score)}
          key={score}
          styles="score"
        />
      ))}
    </div>
  );
};

export default Scores;
