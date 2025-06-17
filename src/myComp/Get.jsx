import { useState, useEffect } from 'react';

const Get = () => {
  const [picture, setPicture] = useState([]);
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState();
  const getDog = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random/3`);
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

  useEffect(() => {}, [update]);

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
