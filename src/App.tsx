import React, {useState} from 'react';
import Modal from "./components/modal";


const App: React.FC = () => {
    const [modalActive, setModalActive] = useState<boolean>(false);
    return (
        <div className="App">
            <main>
                <h1>Главная страница</h1>
                <button onClick={() => setModalActive(true)}>Возобновить</button>
            </main>
            <Modal active={modalActive} setActive={setModalActive}>
                <p>Поделитесь своими впечатлениями о работе в сервисе. Это займет меньше двух минут.</p>
            </Modal>
        </div>
    );
};

export default App;
