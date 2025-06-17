import { useState } from 'react';
import Get from './Get';

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
        <Get count={inputValue} update={count} />
      </h2>
    </>
  );
};

export default Dinamic;
