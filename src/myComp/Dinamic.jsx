import { useState } from 'react';

const Dinamic = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(3);

  const increment = () => {
    setCount((oldState) => oldState + 1);
  };

  const clickOnInput = (e) => {
    setInputValue(Number(e.target.value));
  };
  return (
    <>
      <h2>
        Картинки обновлены {count} раз(а)
        <p>
          Показать{' '}
          <input
            type="number"
            min="0"
            max="50"
            step="1"
            value={inputValue}
            onChange={clickOnInput}
          ></input>
          <button onClick={increment}>Обновить</button>
        </p>
      </h2>
    </>
  );
};

export default Dinamic;
