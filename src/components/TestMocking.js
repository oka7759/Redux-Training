import React, { useState } from 'react';
const Item = ({ name, age }) => {
  return (
    <li>
      name:{name} / age: {age}
    </li>
  );
};

const TestMocking = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const url =
    'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json';
  const handleClick = () => {
    fetch(url).catch(error => setError(`에러는: ${error}`));
  };
  const handleClick2 = () => {
    fetch('/login')
      .then(res => res.json())
      .then(result => console.log(result));
  };
  console.log(data);
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <button onClick={handleClick}>데이터 가져오기</button>
      <button onClick={handleClick2}>데이터 가져오기2</button>
      {data && (
        <ul>
          {data.people.map(person => {
            console.log(person);
            return (
              <Item key={person.name} name={person.name} age={person.age} />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TestMocking;
