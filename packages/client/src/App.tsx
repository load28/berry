interface Props {
  name: string;
}

const App: React.FC<Props> = ({ name }) => {
  return <div>blue, {name}!</div>;
};

export default App;
