import React, {useEffect, useState} from "react";
import Modal from "../modal/modal";
import Button from "../button/button";
import {data} from "../../store/store";
import {MyGlobalContext} from "../app-context/app-context";

import "./app.css";

const App: React.FC = () => {
    const [modalActive, setModalActive] = useState<boolean>(false);
    const [restartApp, setRestartApp] = useState<boolean>(false);
    const [showBtn, setShowBtn] = useState<boolean>(false);
    const [seconds, setSeconds] = useState<number>(10);

    const restart = () => {
        if (restartApp) {
            setSeconds(10);
            setShowBtn(false);
            setRestartApp(false)
        } else setModalActive(true)
    };

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            setModalActive(true);
            setShowBtn(true);
        }
    }, [seconds]);

    return (
        <MyGlobalContext.Provider value={data}>
            <div className="App">
                <main>
                    <h1>Главная страница</h1>
                    {seconds > 0 && (
                        <h2>
                            Опрос запустится через:<span>{seconds}</span>
                        </h2>
                    )}
                    {!modalActive && showBtn && (
                        <Button callback={() => restart()} text={restartApp ? "Перезапустить" : "Показать"}/>
                    )}
                </main>
                <Modal active={modalActive} setActive={setModalActive} setRestartApp={setRestartApp}/>
            </div>
        </MyGlobalContext.Provider>
    );
};

export default App;
