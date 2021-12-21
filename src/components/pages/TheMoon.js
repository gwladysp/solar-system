import { useEffect, useState } from 'react';

export default function TheMoon() {
  const [moonInfos, setMoonInfos] = useState({});
  useEffect(() => {
    const url = 'https://api.le-systeme-solaire.net/rest/bodies/moon';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setMoonInfos(json);
      } catch (error) {
        console.log('error API ', error);
      }
    };

    fetchData();
  }, []);
  console.log(moonInfos);

  return (
    <>
      <h1>{moonInfos.englishName}</h1>
    </>
  );
}
