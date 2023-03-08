// export *  from './App';


import { createRoot } from 'react-dom/client';
import Root from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<Root/>);
