import React, { useEffect, useState } from "react";
import Modal from "../modal/modal";
import Button from "../button/button";
import "./app.css";

const App: React.FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(1);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 10000);
    } else {
      setModalActive(true);
      setShowBtn(true);
    }
  }, [seconds]);

  return (
    <div className="App">
      <main>
        <h1>Главная страница</h1>
        {seconds > 0 && (
          <h2>
            Опрос запустится через:<span>{seconds}</span>
          </h2>
        )}
        {!modalActive && showBtn && (
          <Button callback={() => setModalActive(true)} text="Показать" />
        )}
      </main>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default App;
