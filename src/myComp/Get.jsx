import { useState, useEffect } from 'react';

const Get = ({ count }) => {
  const [picture, setPicture] = useState([]);
  const [loading, setLoading] = useState(true);
  const getDog = async () => {
    try {
      const response = await fetch(
        `https://dog.ceo/api/breeds/image/random/${count}`
      );
      const data = await response.json();

      setPicture(data.message);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDog();
  }, []);

  if (loading) return <>Загрузка...</>;
  return (
    <>
      <div className="gallery">
        {picture.map((item) => (
          <img src={item} alt="Собаки" />
        ))}
      </div>
    </>
  );
};

export default Get;
