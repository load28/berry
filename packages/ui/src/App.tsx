import React from 'react';

interface Props {
  name: string;
}

const App: React.FC<Props> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default App;
