import './App.css';
import React from 'react';

interface Cat {
  id: number;
  name: string;
}

function App() {
  const [cats, setCats] = React.useState<Cat[]>();

  React.useEffect(() => {
    fetch('http://localhost:3000/cat/list')
      .then((response) => response.json())
      .then((data) => setCats(data));
  }, []);

  return (
    <div className="App">
      <h1>Cats</h1>
      <ul>
        {cats?.map((cat) => {
          return <li>{cat.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
