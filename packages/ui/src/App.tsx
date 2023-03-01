interface Props {
  name: string;
}

export const App: React.FC<Props> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};
