import  { useEffect, useState } from "react";
import Character from "../components/Character/Character";


const ApiCall = () => {
  const [data, setData] = useState(null);
  const apiUrl = 'https://rickandmortyapi.com/api/character';

  useEffect(() => {  
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('La consulta realizada no es válida');
        }
        return response.json();
      })
      .then((apiData) => {
        setData(apiData);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, []);
  

  return (
    <>
      {data ? (
        <>
          {data.results.slice(0,6).map((character, index) => (
            <Character key={index} character={character}/>
            ))}
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );

};

export default ApiCall;
