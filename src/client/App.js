import React, { useState } from 'react';
import './app.css';
import ReactImage from './react.png';


function App() {
  const [userName, setUserName] = useState({
    username: null
  });

  // GET request
  fetch('/api', {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(user => setUserName({ username: user.username }));  
  // Post Request
  // fetch('/api', {
  //   method: 'post',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({})   //javascript objesi olarak icerik
  // })
  //   .then((res) => {
  //     console.log(res);
  //     return (res.json());
  //   })
  //   .then(user => setUserName({ username: user.username }));

    return (
    <div>
      {userName != null ? (
        <h1>{`Hello ${userName.username}`}</h1>
      ) : (
        <h1>Loading.. please wait!</h1>
      )}
      <img src={ReactImage} alt="react" />
    </div>
  );
}
export default App;
