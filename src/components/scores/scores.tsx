import React from "react";
import { data } from "../../store/store";
import { IScores } from "../../types/types";
import Button from "../button/button";

import "./scores.css";

const Scores = ({ callback }: IScores) => {
  return (
    <div className="scores">
      {data.scores.map((score) => (
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
